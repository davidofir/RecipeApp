
--Add column to a table
ALTER TABLE recipe
ADD creation_date DATETIME
DEFAULT NOW();

--create recipe table
CREATE TABLE recipe (
recipeID INT NOT NULL AUTO_INCREMENT,
title VARCHAR(255),
rating float,
cooktime INT,
instructions VARCHAR(255),
creation_time DATETIME DEFAULT current_timestamp,
primary key(recipeID));

--INSERT
INSERT INTO recipe(title,rating,cooktime,instructions) VALUES("FOOD 1","5","30","COOK THEM!");