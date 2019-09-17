#!/usr/bin/env/python3

import shapefile
import psycopg2 
from psycopg2.extras import execute_values
import random
import argparse
import json

faction_field = 'CONTINENT'
region_field  = 'SOVEREIGNT'
shp_name = 'ne_10m_admin_0_sovereignty'

randomseed = 1
max_rand_score = 100
min_rand_score = 0
random.seed(randomseed)


def seed_regions(sf, auth):
    conn = psycopg2.connect(**auth)
    cur = conn.cursor()

    sf = shapefile.Reader(sf)
    records = sf.records()
    reg_fac = {x[region_field]:x[faction_field] for x in records}

    factions = set(reg_fac.values())
    fac_fid = execute_values(cur, \
                        "INSERT INTO factions (name) VALUES %s RETURNING name, id;", \
                        [(f,) for f in factions], fetch=True)
    fac_fid = dict(fac_fid) 

    reg_fid = {r:fac_fid[reg_fac[r]] for r in reg_fac}

    execute_values(cur, \
       "INSERT INTO regions (owning_faction_id, click_count, name) VALUES %s;", \
       [(reg_fid[r], random.randint(min_rand_score, max_rand_score), r) for r in reg_fid])

    conn.commit()

    cur.execute("SELECT * from factions;")
    x = cur.fetchall()

    print(x)

    sf.close()
    cur.close()
    conn.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Seed the database with regions from a shapefile.")
    parser.add_argument('shapefile', metavar='sf', help="Path to the shapefile.", nargs=1)
    parser.add_argument('--dbauth', metavar='auth', help="Path to the dbauth.json file.", nargs=1, required=True)
    args = parser.parse_args()
    
    auth = None
    with open(args.dbauth[0]) as f:
        auth = json.load(f)
        
    seed_regions(args.shapefile[0], auth)
