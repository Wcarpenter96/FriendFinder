-- ONLY RUN THIS ONCE
DROP DATABASE IF EXISTS FriendFinder_db;
CREATE DATABASE FriendFinder_db;
USE FriendFinder_db;
CREATE TABLE friends (
  id INT NOT NULL AUTO_INCREMENT,
  friend_name VARCHAR(30) NOT NULL,
  friend_img VARCHAR(300) NOT NULL,
  scores VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
-- RUN THIS CODE TO VIEW TABLE
USE FriendFinder_db;
SELECT
  *
FROM
  friends;