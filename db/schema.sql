-- db/schema.sql
DROP DATABASE IF EXISTS jwt_auth;

CREATE DATABASE jwt_auth;


\c jwt_auth

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    user_type VARCHAR(10),
    img VARCHAR(230),
    preferred_position VARCHAR(20),
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    date_of_birth date,
    nationality VARCHAR(40),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS team CASCADE;
CREATE TABLE team (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    home_color VARCHAR(15),
    away_color VARCHAR(15),
    creator_id INTEGER,
    available_goalie INTEGER DEFAULT 1 CHECK(available_goalie >= 0),
    available_defenders INTEGER DEFAULT 2 CHECK(available_defenders >= 0),
    available_midfielders INTEGER DEFAULT 2 CHECK(available_midfielders >= 0),
    available_forwards INTEGER DEFAULT 1 CHECK(available_forwards >= 0)
);

DROP TABLE IF EXISTS match CASCADE;
CREATE TABLE match (
    id SERIAL PRIMARY KEY,
    img VARCHAR(230),
    address VARCHAR(30),
    state VARCHAR(13),
    city VARCHAR(20),
    zip VARCHAR(10),
    duration INTEGER,
    start_datetime TIMESTAMP WITHOUT TIME ZONE,
    away_team_id INTEGER,
    home_team_id INTEGER,
    creator_id INTEGER,
    player_slots INTEGER,
    FOREIGN KEY (away_team_id) REFERENCES team (id),
    FOREIGN KEY (home_team_id) REFERENCES team (id)
);

DROP TABLE IF EXISTS matchplayer CASCADE;
CREATE TABLE matchplayer (
    match_id INTEGER,
    player_id INTEGER,
    team_id INTEGER,
    position VARCHAR(20),
    PRIMARY KEY (match_id, player_id, team_id),
    FOREIGN KEY (match_id) REFERENCES match (id),
    FOREIGN KEY (team_id) REFERENCES team (id),
    FOREIGN KEY (player_id) REFERENCES users (id)
);



