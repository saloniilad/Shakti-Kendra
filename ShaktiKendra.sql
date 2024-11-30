create database ShaktiKendra;
GRANT ALL PRIVILEGES ON ShaktiKendra.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
USE ShaktiKendra;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);


SELECT * FROM users;



