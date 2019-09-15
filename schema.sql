DROP DATABASE IF EXISTS country_game;
CREATE DATABASE country_game;
\c country_game;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4() PRIMARY KEY, 
                      click_count INT DEFAULT 0, 
                      name VARCHAR(50),
                      owning_faction_id uuid);

CREATE TABLE factions (id uuid DEFAULT uuid_generate_v4() PRIMARY KEY, 
                      name VARCHAR(50));

CREATE TABLE users (id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
                    username VARCHAR(30) UNIQUE,
                    password VARCHAR(100));

CREATE TABLE user_performance (id uuid DEFAULT uuid_generate_v4() PRIMARY KEY, 
                               clicks_attk INT DEFAULT 0, 
                               clicks_dfnd INT DEFAULT 0);
