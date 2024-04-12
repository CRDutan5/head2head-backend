-- db/seed.sql
\c jwt_auth

-- INSERT INTO users (username, password_hash, email, created_at, updated_at)
-- VALUES 
-- ('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());
INSERT INTO users (username, password_hash, email, user_type, img, preferred_position, first_name, last_name, date_of_birth, nationality)
VALUES
    ('user1', '$2b$10$4vBdARqWiAF9wsjAL/LcgOFl/hFgOdQjjeO1sYXtFQ1HLCe0jyGZu', 'user1@example.com', 'regular', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Forward', 'John', 'Doe', '1990-01-01', 'USA'),
    ('user2', '$2b$10$srwF9Zj9c3HEP8pQ45A1l.onarjnd8wJtoaWtFOulOgTENAvw/FZW', 'user2@example.com', 'regular', 'img2.jpg', 'Midfielder', 'Michael', 'Smith', '1995-02-15', 'Canada'),
    ('user3', 'password3', 'user3@example.com', 'regular', 'img3.jpg', 'Defender', 'David', 'Johnson', '1988-06-20', 'UK'),
    ('user4', 'password4', 'user4@example.com', 'regular', 'img4.jpg', 'Goalie', 'James', 'Brown', '1992-11-30', 'Australia'),
    ('user5', 'password5', 'user5@example.com', 'regular', 'img5.jpg', 'Forward', 'Daniel', 'Wilson', '1985-04-10', 'Germany'),
    ('user6', 'password6', 'user6@example.com', 'regular', 'img6.jpg', 'Midfielder', 'William', 'Martinez', '1998-09-25', 'France'),
    ('user7', 'password7', 'user7@example.com', 'regular', 'img7.jpg', 'Defender', 'Christopher', 'Lee', '1993-07-12', 'Italy'),
    ('user8', 'password8', 'user8@example.com', 'regular', 'img8.jpg', 'Goalie', 'Andrew', 'Garcia', '1996-03-05', 'Spain'),
    ('user9', 'password9', 'user9@example.com', 'regular', 'img9.jpg', 'Forward', 'Alexander', 'Rodriguez', '1991-08-18', 'Brazil'),
    ('user10', 'password10', 'user10@example.com', 'regular', 'img10.jpg', 'Midfielder', 'Ryan', 'Taylor', '1987-12-22', 'Argentina'),
    ('user11', 'password11', 'user11@example.com', 'regular', 'img11.jpg', 'Defender', 'Kevin', 'Lopez', '1994-05-17', 'Mexico'),
    ('user12', 'password12', 'user12@example.com', 'regular', 'img12.jpg', 'Goalie', 'Matthew', 'Chen', '1989-10-08', 'China');


-- might not need creator_id
INSERT INTO team (name, home_color, away_color, creator_id, goalie, defender_one, defender_two, midfielder_one, midfielder_two, forward)
VALUES
    ('Phoenix Rising', 'Red', 'Blue', 1, 4,3,7,6,10,9),
    ('Emerald Enigmas', 'Green', 'Yellow', 2, 8,3,7,6,10,1),
    ('Shadow Strikers', 'Black', 'White', 3, 4,3,7,6,10,9),
    ('Sunset Serpents', 'Orange', 'Purple', 4, 4,3,7,6,10,9),
    ('Blazing Bandits', 'Pink', 'Brown', 5, 4,3,7,6,10,9),
    ('Silver Storm', 'Gray', 'Turquoise', 6, 4,3,7,6,10,9),
    ('Midnight Marauders', 'Navy', 'Maroon', 7, 4,3,7,6,10,9),
    ('Luminous Lions', 'Lime', 'Cyan', 8, 4,3,7,6,10,9),
    ('Mystic Mavericks', 'Magenta', 'Silver', 9, 4,3,7,6,10,9),
    ('Golden Gladiators', 'Gold', 'Bronze', 10, 4,3,7,6,10,9),
    ('Olympian Owls', 'Olive', 'Indigo', 11, 4,3,NULL,6,10,9),
    ('Twilight Titans', 'Teal', 'Violet', 12, NULL,NULL,NULL,NULL,NULL,NULL);

INSERT INTO match (img, address, state, city, zip, duration, start_datetime, away_team_id, home_team_id, creator_id, player_slots)
VALUES
    ('https://res.cloudinary.com/drlnh7yxm/image/upload/v1712344162/parks/AF1QipPhfYLlR-U69mBTE4koNvveVCFLi3USpcFYz0by_s1360-w1360-h1020_app7tx.jpg', '123 Main St', 'CA', 'Los Angeles', '90001', 90, '2024-04-20 18:00:00', 1, 2, 1, 12),
    ('https://res.cloudinary.com/drlnh7yxm/image/upload/v1712344021/parks/Aviator_Field_1.jpg_zpqsov.jpg', '456 Oak Ave', 'NY', 'New York', '10001', 90, '2024-04-11 19:00:00', 3, 4, 2, 12),
    ('https://res.cloudinary.com/drlnh7yxm/image/upload/v1712343830/parks/Pier-40-HRPK-Soccar-Fields-Dusk_wkvg8t.jpg', '789 Maple Blvd', 'TX', 'Houston', '77001', 90, '2024-04-22 22:00:00', 5, 6, 3, 12),
    ('https://res.cloudinary.com/drlnh7yxm/image/upload/v1712343785/parks/Main_89_rntcp5.jpg', '101 Elm St', 'FL', 'Miami', '33101', 90, '2024-04-13 21:00:00', 7, 8, 4, 12),
    ('https://res.cloudinary.com/drlnh7yxm/image/upload/v1712343726/parks/NYCSOCCER1web-superJumbo_q7ezmm.jpg', '202 Pine Ave', 'IL', 'Chicago', '60601', 90, '2024-04-14 22:00:00', 9, 10, 5, 12),
    ('https://res.cloudinary.com/drlnh7yxm/image/upload/v1712765385/parks/Photo-Michael-Dorgan-Queens-Post-10_ferfbp.jpg', '303 Cedar Dr', 'WA', 'Seattle', '98101', 90, '2024-04-15 23:00:00', 11, 12, 6, 12);


INSERT INTO matchplayer (match_id, player_id, team_id, position)
VALUES
    -- Team 1
    (1, 1, 1, 'Goalie'),
    (1, 2, 1, 'Defender'),
    (1, 3, 1, 'Defender'),
    (1, 4, 1, 'Midfielder'),
    (1, 5, 1, 'Midfielder'),
    (1, 6, 1, 'Forward'),
    -- Team 2
    (1, 7, 2, 'Goalie'),
    (1, 8, 2, 'Defender'),
    (1, 9, 2, 'Defender'),
    (1, 10, 2, 'Midfielder'),
    (1, 11, 2, 'Midfielder'),
    (1, 12, 2, 'Forward');