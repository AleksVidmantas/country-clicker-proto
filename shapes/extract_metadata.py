#!/usr/bin/env/python3

# script needs to be run as user postgres

import shapefile
import psycopg2 
from psycopg2.extras import execute_values
import random

faction_field = 'CONTINENT'
region_field  = 'SOVEREIGNT'
shp_name = 'ne_10m_admin_0_sovereignty'

randomseed = 1
max_rand_score = 100
min_rand_score = 0
random.seed(randomseed)



conn = psycopg2.connect("dbname=country_game user=postgres")
cur = conn.cursor()

sf = shapefile.Reader(shp_name)
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

sf.close()
cur.close()
conn.close()
