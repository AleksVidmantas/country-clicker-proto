CREATE DATABASE country_game;
\c country_game;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4(), 
                      click_count INT DEFAULT 0, 
                      is_parent BOOL DEFAULT FALSE);

CREATE TABLE faction (id uuid DEFAULT uuid_generate_v4(), 
                      name VARCHAR(20));

CREATE TABLE users (id uuid DEFAULT uuid_generate_v4(),
                   username VARCHAR(30) UNIQUE,
                   password VARCHAR(100));

CREATE TABLE user_performance (id uuid DEFAULT uuid_generate_v4(), 
                               clicks_attk INT DEFAULT 0, 
                               clicks_dfnd INT DEFAULT 0);
