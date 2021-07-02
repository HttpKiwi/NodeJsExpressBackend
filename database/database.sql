CREATE DATABASE testing;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users(name, email) VALUES 
    ('Todolopuedoencristo', 'tengofe@ylopuedolograr.com'),
    ('Todoesposible', 'hadicho@elseyor.com');