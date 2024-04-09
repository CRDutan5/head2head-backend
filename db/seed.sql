-- db/seed.sql
\c jwt_auth

-- INSERT INTO users (username, password_hash, email, created_at, updated_at)
-- VALUES 
-- ('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());
INSERT INTO users (username, password_hash, email, user_type, img, preferred_position, firstName, lastName, date_of_birth, nationality)
VALUES
    ('user1', '$2b$10$4vBdARqWiAF9wsjAL/LcgOFl/hFgOdQjjeO1sYXtFQ1HLCe0jyGZu', 'user1@example.com', 'regular', 'img1.jpg', 'Forward', 'John', 'Doe', '1990-01-01', 'USA'),
    ('user2', 'password2', 'user2@example.com', 'regular', 'img2.jpg', 'Midfielder', 'Michael', 'Smith', '1995-02-15', 'Canada'),
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
INSERT INTO team (name, home_color, away_color, creator_id, available_goalie, available_defenders, available_midfielders, available_forwards)
VALUES
    ('Phoenix Rising', 'Red', 'Blue', 1, 1, 2, 2, 1),
    ('Emerald Enigmas', 'Green', 'Yellow', 2, 1, 2, 2, 1),
    ('Shadow Strikers', 'Black', 'White', 3, 1, 2, 2, 1),
    ('Sunset Serpents', 'Orange', 'Purple', 4, 1, 2, 2, 1),
    ('Blazing Bandits', 'Pink', 'Brown', 5, 1, 2, 2, 1),
    ('Silver Storm', 'Gray', 'Turquoise', 6, 1, 2, 2, 1),
    ('Midnight Marauders', 'Navy', 'Maroon', 7, 1, 2, 2, 1),
    ('Luminous Lions', 'Lime', 'Cyan', 8, 1, 2, 2, 1),
    ('Mystic Mavericks', 'Magenta', 'Silver', 9, 1, 2, 2, 1),
    ('Golden Gladiators', 'Gold', 'Bronze', 10, 1, 2, 2, 1),
    ('Olympian Owls', 'Olive', 'Indigo', 11, 1, 2, 2, 1),
    ('Twilight Titans', 'Teal', 'Violet', 12, 1, 2, 2, 1);

INSERT INTO match (img, address, state, city, zip, duration, start_datetime, away_team_id, home_team_id, creator_id, player_slots)
VALUES
    ('match_img1.jpg', '123 Main St', 'CA', 'Los Angeles', '90001', 90, '2024-04-10 18:00:00', 1, 2, 1, 12),
    ('match_img2.jpg', '456 Oak Ave', 'NY', 'New York', '10001', 90, '2024-04-11 19:00:00', 3, 4, 2, 12),
    ('match_img3.jpg', '789 Maple Blvd', 'TX', 'Houston', '77001', 90, '2024-04-12 20:00:00', 5, 6, 3, 12),
    ('match_img4.jpg', '101 Elm St', 'FL', 'Miami', '33101', 90, '2024-04-13 21:00:00', 7, 8, 4, 12),
    ('match_img5.jpg', '202 Pine Ave', 'IL', 'Chicago', '60601', 90, '2024-04-14 22:00:00', 9, 10, 5, 12),
    ('match_img6.jpg', '303 Cedar Dr', 'WA', 'Seattle', '98101', 90, '2024-04-15 23:00:00', 11, 12, 6, 12);


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
