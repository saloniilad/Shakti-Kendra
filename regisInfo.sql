create database regisInfo;
GRANT ALL PRIVILEGES ON regisInfo.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
USE regisInfo;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);
SELECT * FROM users;

