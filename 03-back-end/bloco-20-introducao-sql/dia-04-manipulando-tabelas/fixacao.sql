INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.staff;
    
SELECT * FROM sakila.staff;

#Fixacao 1

#01
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES
('teste', 'Iveldo', 3, 1, 'italoO13');

#02
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES
('Alessandra', 'Raysa', 4,2, 'Alê'),
('Rodolpho', 'Martins', 5,1, 'Dofila');

#03
SELECT * FROM sakila.customer;
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username, `active`)
	SELECT first_name, last_name, address_id, store_id, first_name, `active` FROM sakila.customer
    ORDER BY first_name, last_name 
    LIMIT 5;
    
#04
INSERT INTO sakila.category (`name`) VALUES
('categoria1'), ('categoria2');

SELECT * FROM sakila.category;

#05
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES 
	(3,3);
SELECT * FROM sakila.store;

#Bonus Fixacao 1
SET SQL_SAFE_UPDATES = 0;

#01
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

#02
UPDATE sakila.category
SET `name` = 'SCIENCE FICTION'
WHERE `name`  = 'Sci-fi';

#03
UPDATE sakila.film 
SET rental_rate = 25
WHERE rating IN ('G','PG','PG-13') AND replacement_cost > 20;

#04
UPDATE sakila.film
SET rental_rate = (
	CASE 
		WHEN length BETWEEN 0 AND 100 THEN 10
        WHEN length >100 THEN 20
	END
);

#Fixacao 2

#01
SELECT actor_id FROM sakila.actor
WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

#02
SELECT actor_id FROm sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

#03
DELETE FROM sakila.film_text
WHERE `description` LIKE '%saga%';

#04
TRUNCATE sakila.film_actor;

#05
