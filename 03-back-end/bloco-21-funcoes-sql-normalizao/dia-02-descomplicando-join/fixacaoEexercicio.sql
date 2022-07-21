#Fixacao - INNER JOIN

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

#01
SELECT A.actor_id, A.first_name, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;

#02
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT S.first_name, S.last_name, A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

#03
SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

#04
SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

#05
SELECT 
	c.first_name, COUNT(a.address_id) AS qtd
FROM 
	sakila.customer AS c
INNER JOIN 
	sakila.address AS a
	ON c.address_id = a.address_id
WHERE 
	c.active = 1
GROUP BY c.first_name
ORDER BY qtd DESC;

#06 // DUVIDA - IMPORTANTE
SELECT s.first_name, s.last_name, AVG(p.amount) AS media
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
GROUP BY p.staff_id
HAVING YEAR(p.payment_date) = 2006;

#07
SELECT a.actor_id, a.first_name,
fa.film_id, f.title FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f
ON fa.film_id = f.film_id;

#TEstes

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

#SELF JOIN
SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS "Nome Pessoa Colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente"
FROM 
hr.employees AS employee
INNER JOIN
	hr.employees AS manager
    ON employee.manager;
    
#Exercicio
USE pixar;
#01
SELECT 
	m.title,
    b.domestic_sales,
    b.international_sales
FROM movies AS m
INNER JOIN 
	box_office AS b
	ON m.id = b.movie_id;
    
#02
SELECT 
	m.title,
    b.domestic_sales,
    b.international_sales
FROM movies AS m
INNER JOIN
	box_office AS b
    ON m.id = b.movie_id
WHERE b.domestic_sales < b.international_sales;

#03
SELECT
	m.title,
    b.rating
FROM movies AS m
INNER JOIN 
	box_office AS b
	ON b.movie_id = m.id
ORDER BY b.rating DESC;

#04
SELECT 
	t.name,
    m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM theater AS t
LEFT JOIN 
	movies AS m
	ON m.theater_id = t.id
ORDER BY t.name;

#05
SELECT 
	t.name,
     m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM theater AS t
RIGHT JOIN
	movies AS m
    ON m.theater_id = t.id
ORDER BY t.name;

#06
SELECT 
    m.id, m.title, m.director, m.year, m.length_minutes, b.rating
FROM theater AS t
INNER JOIN 
	movies AS m
    ON m.theater_id = t.id
INNER JOIN 
	box_office AS b
    ON b.movie_id = m.id
WHERE b.rating > 8;