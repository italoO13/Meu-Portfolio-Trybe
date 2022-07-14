# 1 
SELECT 'this is SQL';

#2
SELECT 1,2,3;

#3
SELECT 1+5;

#4
SELECT * FROM Scientists.Scientists;

#5
SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho FROM Scientists.Projects;

#6
SELECT name FROM Scientists.Scientists
ORDER BY name;

#8
SELECT name FROM Scientists.Projects
ORDER BY name DESC;

#9
SELECT CONCAT('O projeto ',name,' ','de ', hours) FROM Scientists.Projects;

#10
SELECT name, hours FROM Scientists.Projects
ORDER BY hours DESC LIMIT 3;

#11
SELECT DISTINCT (project) FROM Scientists.AssignedTo; 

#12
SELECT name FROM Scientists.Projects
ORDER BY hours DESC 
LIMIT 1;

#13
SELECT name FROm Scientists.Projects
ORDER BY hours ASC 
LIMIT 1 
OFFSET 1;

#14
SELECT name FROM Scientists.Projects
order by hours ASC
LIMIT 5;

#15
SELECT CONCAT('Existem ', COUNT(SSN), ' cientistas na tabela Scientist') AS Q15SSN FROM Scientists.Scientists;

#Bonus

#1
SELECT * FROM PiecesProviders.Provides
WHERE provider = 'RBT';

#2
SELECT * FROm PiecesProviders.Provides
ORDER BY price ASC
LIMIT 5;

#3
SELECT * FROM PiecesProviders.Provides
ORDER BY price DESC
LIMIT 5
OFFSET 3;

#4
SELECT * FROM PiecesProviders.Provides
WHERE provider = 'HAL'
ORDER BY price DESC;

#5
SELECT COUNT(provider) FROm PiecesProviders.Provides
where piece = 1;