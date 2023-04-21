CREATE DATABASE todoapp;
CREATE TABLE todos(
    id VARCHAR(255) Primary key,
    user_email VARCHAR(255),
    title VARCHAR (30),
    progress int,
    data VARCHAR(300)
);


create table users(
    email VARCHAR(255) primary key,
    hashed_password varchar(255)
);