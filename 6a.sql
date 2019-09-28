CREATE DATABASE devs;
USE devs;
-- The Schema

CREATE TABLE Nama (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    id_work int(5),
    id_salary int(5),
    FOREIGN KEY (id_work) 
        REFERENCES Work(id)
        ON DELETE CASCADE,
	FOREIGN KEY (id_salary) 
        REFERENCES Kategori(id)
        ON DELETE CASCADE
);


CREATE TABLE Work (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    id_salary INT(5),
    FOREIGN KEY (id_salary) 
        REFERENCES Kategori(id)
        ON DELETE CASCADE
);

CREATE TABLE Kategori (
	id INT AUTO_INCREMENT PRIMARY KEY,
    salary VARCHAR(1000)
);

-- The Starter Data

INSERT INTO Kategori (salary) VALUES 
('10.000.000'), 
('12.000.000');

INSERT INTO Work (name, id_salary ) VALUES
('Frontend Dev',1),
('Backend Dev',2);

INSERT INTO Nama (name, id_work, id_salary ) VALUES
('Bintang', 1, 1),
('Tasya', 2, 2);


-- Tampilkan hasil query 
SELECT n.name, w.name, k.salary FROM Nama n JOIN Work w JOIN Kategori k ON n.id_work=w.id AND w.id_salary=k.id;