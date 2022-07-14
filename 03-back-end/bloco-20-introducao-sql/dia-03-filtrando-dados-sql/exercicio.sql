# Exercicio
USE PecasFornecedores;

#01
SELECT * FROM Pecas
WHERE name LIKE 'GR%';

#02
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;

#03
SELECT peca, fornecedor, preco FROM Fornecimentos
Where fornecedor LIKE '%N%';

#04
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

#05
SELECT COUNT(code) FROM Fornecedores
WHERE code LIKE '%F%';

#06
SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco ASC;

#07
SELECT COUNT(code) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018/04/15' AND '2019/07/30';

#Bonus
USE Scientists;

#01
SELECT * FROM Scientists
WHERE name LIKE '%e%';

#02
SELECT * FROM Projects
WHERE name LIKE 'A%'
ORDER BY name;

#03
SELECT * FROM Projects
WHERE code LIKE '%3%'
ORDER BY name;

#04
SELECT name FROM Projects
WHERE code IN ('AeH3', 'Ast3', 'Che1');

#05
SELECT * FROM Projects
WHERE hours > 500;

#06
SELECT * FROM Projects
WHERE hours BETWEEN 250 AND 800;

#07
SELECT code, name FROM Projects
WHERE name NOT LIKE ('A%');

#08
SELECT name FROM Projects
WHERE code LIKE ('%H%');