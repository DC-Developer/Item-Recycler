DROP DATABASE IF EXISTS recycle_db; 
CREATE DATABASE recycler_db; 
USE recycler_db;

CREATE TABLE recycle(
    id int NOT NULL AUTO_INCREMENT,
    item varchar(255) NOT NULL,
    recycled BOOLEAN DEFAULT false,
    toRecycle BOOLEAN DEFAULT true,
    PRIMARY KEY(id)
);