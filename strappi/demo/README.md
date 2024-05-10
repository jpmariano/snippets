# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>


CREATE TABLE users (UserID int, user varchar(255), PhoneNumber LONGTEXT, Address varchar(255), City varchar(255), Postal varchar(255), Country varchar(255));
INSERT INTO users VALUES (1, "Alfred Jones", "704-444-5555 888-3333-4444" "Obere Str.60", "Berlin", "12209", "Germany");
INSERT INTO users VALUES (1, "Alfred Jones", "704-888-5555 777-3333-4444",  "7880 Essex Avenue", "Springfield", "55525", "USA");

CREATE TABLE recipes (id int, title varchar(255), Instuctions LONGTEXT, Ingridients LONGTEXT);
INSERT INTO recipes VALUES (1, "Adobo", "lorem ipsum dolor", "Garlic, Chicken, Vinegar, Soy Sauce" );
INSERT INTO recipes VALUES (2, "Loco Moco", "lorem ipsum dolor", "Beef, Beff gravy, Egg" );

CREATE TABLE users (user_id int NOT NULL PRIMARY KEY, user varchar(255));
INSERT INTO users VALUES (1, "Alfred Jones");
INSERT INTO users VALUES (2, "Kate Smith");
CREATE TABLE phone_numbers (phone_id int NOT NULL PRIMARY KEY, userid_fk int,  phone_number varchar(255));
INSERT INTO phone_numbers VALUES (1, 1, "704-444-5555");
INSERT INTO phone_numbers VALUES (2, 1, "888-3333-4444");
INSERT INTO phone_numbers VALUES (3, 1, "704-888-5555");
INSERT INTO phone_numbers VALUES (4, 1, "777-3333-4444");
INSERT INTO phone_numbers VALUES (5, 2, "999-888-5555");
INSERT INTO phone_numbers VALUES (6, 2, "999-3333-4444");
CREATE TABLE adress (address_id int NOT NULL PRIMARY KEY, userid_fk int, Address varchar(255), City varchar(255), Postal varchar(255), Country varchar(255));

INSERT INTO adress VALUES (1, 1,  "Obere Str.60", "Berlin", "12209", "Germany");
INSERT INTO adress VALUES (2, 1,  "7880 Essex Avenue", "Springfield", "55525", "USA");
INSERT INTO adress VALUES (3, 2,  "8888 Branch Avenue", "Texas", "88889", "USA");

CREATE TABLE CUSTOMERS(
   ID INT NOT NULL,
   NAME VARCHAR (20) NOT NULL,
   AGE INT NOT NULL,
   ADDRESS CHAR (25),
   SALARY DECIMAL (18, 2),       
   CONSTRAINT ck_customers 
   PRIMARY KEY (ID, NAME)
);


CREATE TABLE members (
   id INT NOT NULL,
   membership_type_fk INT NOT NULL,
   name VARCHAR (20) NOT NULL,    
   CONSTRAINT ck_members 
   PRIMARY KEY (id, membership_type_fk)
);

CREATE TABLE membership_type (
   id INT NOT NULL PRIMARY KEY,
   fee INT NOT NULL
);


INSERT INTO members VALUES (1, 1,  "John Doe");
INSERT INTO members VALUES (2, 1,  "Jane Doe");
INSERT INTO members VALUES (3, 2,  "Jack Doe");

INSERT INTO membership_type VALUES (1, 100);
INSERT INTO membership_type VALUES (2, 200);

CREATE TABLE members (
   id INT NOT NULL PRIMARY KEY,
   membership_type INT NOT NULL,
   name VARCHAR (20) NOT NULL,    
   fee INT NOT NULL
);

INSERT INTO members VALUES (1, 1,  "John Doe", 100);
INSERT INTO members VALUES (2, 1,  "Jane Doe", 100);
INSERT INTO members VALUES (3, 2,  "Jack Doe", 200);

CREATE TABLE members (
   id INT NOT NULL PRIMARY KEY,
   membership_type INT NOT NULL,
   name VARCHAR (20) NOT NULL
);

CREATE TABLE membership_type (
   id INT NOT NULL PRIMARY KEY,
   fee INT NOT NULL
);

CREATE TABLE cars (
   model_id INT NOT NULL PRIMARY KEY,
   color VARCHAR (20) NOT NULL,    
   style VARCHAR (20) NOT NULL
);

INSERT INTO cars VALUES (1, "red",  "4 Door sedan");
INSERT INTO cars VALUES (2, "green",  "4 Door sedan");
INSERT INTO cars VALUES (3, "blue",  "pickup");
INSERT INTO cars VALUES (4, "green",  "pickup");
INSERT INTO cars VALUES (5, "red",  "pickup");

CREATE TABLE cars (
   model_id INT NOT NULL PRIMARY KEY,
   name VARCHAR (20) NOT NULL
);
INSERT INTO cars VALUES (1, "Tesla");
INSERT INTO cars VALUES (2, "Toyota");

CREATE TABLE car_colors (
   id INT NOT NULL PRIMARY KEY,
   model_id INT NOT NULL,
   color VARCHAR (20) NOT NULL,
   FOREIGN KEY (model_id) REFERENCES cars(model_id)
);
INSERT INTO car_colors VALUES (1, 1, "red");
INSERT INTO car_colors VALUES (2, 1, "blue");
INSERT INTO car_colors VALUES (3, 1, "silver");
INSERT INTO car_colors VALUES (4, 2, "red");
INSERT INTO car_colors VALUES (5, 2, "blue");

CREATE TABLE car_styles (
   id INT NOT NULL PRIMARY KEY,
   model_id INT NOT NULL,
   styles VARCHAR (20) NOT NULL,
   FOREIGN KEY (model_id) REFERENCES cars(model_id)
);

INSERT INTO car_styles VALUES (1, 1, "4 Door sedan");
INSERT INTO car_styles VALUES (2, 1, "pickup");
INSERT INTO car_styles VALUES (3, 2, "4 Door sedan");

CREATE TABLE cars_colors_and_styles (
   id INT NOT NULL PRIMARY KEY,
   model_id INT NOT NULL,
   name VARCHAR (20) NOT NULL,
   color VARCHAR (20) NOT NULL,
   styles VARCHAR (20) NOT NULL
);

INSERT INTO cars_colors_and_styles VALUES (1, 1, "Tesla", "red", "4 Door sedan");
INSERT INTO cars_colors_and_styles VALUES (2, 1, "Tesla", "blue", "4 Door sedan");
INSERT INTO cars_colors_and_styles VALUES (3, 1, "Tesla", "silver", "pickup");
INSERT INTO cars_colors_and_styles VALUES (4, 2, "Toyota", "red", "4 Door sedan");
INSERT INTO cars_colors_and_styles VALUES (5, 2, "Toyota", "blue", "4 Door sedan");


SELECT DISTINCT
  cars.model_id,
  cars.name,
  car_colors.color,
  car_styles.styles
FROM cars
JOIN car_colors
  ON cars.model_id = car_colors.model_id
JOIN car_styles
  ON cars.model_id = car_styles.model_id
ORDER BY cars.model_id;

SELECT 
  cars.model_id,
  cars.name,
  car_colors.color,
  car_styles.styles
FROM cars
JOIN car_colors
  ON cars.model_id = car_colors.model_id
JOIN car_styles
  ON cars.model_id = car_styles.model_id;


CREATE TABLE colors_and_styles (
   color VARCHAR (20) NOT NULL,
   styles VARCHAR (20) NOT NULL,
   CONSTRAINT ck_colors_and_styles
   PRIMARY KEY (color, styles)
);

INSERT INTO colors_and_styles VALUES ("red", "4 Door sedan");
INSERT INTO colors_and_styles VALUES ("red", "pickup");
INSERT INTO colors_and_styles VALUES ("blue", "4 Door sedan");
INSERT INTO colors_and_styles VALUES ("blue", "pickup");
INSERT INTO colors_and_styles VALUES ("silver", "4 Door sedan");
INSERT INTO colors_and_styles VALUES ("silver", "pickup");
INSERT INTO colors_and_styles VALUES ("green", "4 Door sedan");
INSERT INTO colors_and_styles VALUES ("green", "pickup");

SELECT 
  car_colors.model_id,
  car_colors.color,
  colors_and_styles.styles
FROM car_colors
JOIN car_styles
  ON car_colors.model_id = car_styles.model_id
JOIN colors_and_styles
  ON car_colors.color = colors_and_styles.color AND  car_styles.styles = colors_and_styles.styles;

SELECT 
  cars.model_id,
  cars.name,
  car_colors.color,
  car_styles.styles
FROM cars
JOIN car_colors
  ON cars.model_id = car_colors.model_id
JOIN car_styles
  ON cars.model_id = car_styles.model_id;



SELECT 
  car_colors.model_id,
  car_colors.color
FROM car_colors
JOIN car_styles
  ON car_styles.model_id = car_colors.model_id
JOIN colors_and_styles
  ON colors_and_styles.color = car_colors.color AND colors_and_styles.styles = car_styles.styles;


CREATE TABLE car_colors (
   model_id INT NOT NULL,
   color VARCHAR (20) NOT NULL,
   CONSTRAINT ck_car_colors
   PRIMARY KEY (model_id, color)
);

INSERT INTO car_colors VALUES (1, "red");
INSERT INTO car_colors VALUES (2, "green");
INSERT INTO car_colors VALUES (3, "blue");
INSERT INTO car_colors VALUES (4, "green");
INSERT INTO car_colors VALUES (5, "red");

CREATE TABLE car_styles (
   model_id INT NOT NULL,
   styles VARCHAR (20) NOT NULL,
   CONSTRAINT ck_car_styles
   PRIMARY KEY (model_id, styles)
);

INSERT INTO car_styles VALUES (1, "4 Door sedan");
INSERT INTO car_styles VALUES (2, "4 Door sedan");
INSERT INTO car_styles VALUES (3, "pickup");
INSERT INTO car_styles VALUES (4, "pickup");
INSERT INTO car_styles VALUES (5, "pickup");


SELECT 
  car_colors.model_id,
  car_colors.color,
  colors_and_styles.styles
FROM car_colors
JOIN car_styles
  ON car_colors.model_id = car_styles.model_id
JOIN colors_and_styles
  ON car_colors.color = colors_and_styles.color AND  car_styles.styles = colors_and_styles.styles;


SELECT 
  car_colors.model_id,
  car_colors.color,
  colors_and_styles.styles
FROM car_colors
JOIN colors_and_styles
  ON car_colors.color = colors_and_styles.color;


SELECT 
  cars.model_id,
  cars.name,
  car_colors.color,
  car_styles.styles
FROM cars
JOIN car_styles
  ON cars.model_id = car_styles.model_id
JOIN car_colors
  ON cars.model_id = car_colors.model_id
JOIN colors_and_styles
  ON car_colors.color = colors_and_styles.color AND  car_styles.styles = colors_and_styles.styles;

select 
  users_field_data.name, 
  users_field_data.name 
from users_field_data;

CREATE TABLE <TABLENAME>(
   <fieldname1> <fieldtype> <Constraints>,
   <fieldnam2> <fieldtype> <Constraints>,
   FOREIGN KEY (<fieldname1>) REFERENCES <tablename2>(<fieldname1>)
);

CREATE TABLE <TABLENAME>(
   <fieldname1> <fieldtype> <Constraints>,
   <fieldnam2> <fieldtype> <Constraints>,
   CONSTRAINT <constraint_name>
   PRIMARY KEY (<fieldname1>, <fieldname1>)
);

CREATE TABLE <TABLENAME>(
   <fieldname1> <fieldtype> NOT NULL PRIMARY KEY,
   <fieldnam2> <fieldtype> <Constraints>
);



CREATE TABLE cars_colors_and_styles (
   id INT NOT NULL PRIMARY KEY,
   model_id INT NOT NULL,
   name VARCHAR (20) NOT NULL,
   color VARCHAR (20) NOT NULL,
   styles VARCHAR (20) NOT NULL
);

CREATE TABLE car_styles (
   id INT NOT NULL PRIMARY KEY,
   model_id INT NOT NULL,
   styles VARCHAR (20) NOT NULL,
   FOREIGN KEY (model_id) REFERENCES cars(model_id)
);

SELECT 
  <fieldname1> AS <fieldAlias>, 
  <fieldname2>, 
  <fieldname3>
FROM <tablename>
<INNER | LEFT | RIGHT | JOIN> <tablename2>
  ON <tablename>.<fieldname1> = <tablename2>.<fieldname1>
WHERE <fieldname1> <operator> <testvalue>
GROUP BY <fieldname1>
HAVING <functioname>(<fieldname1>) > <testvalue>
ORDER BY <functioname>(<fieldname2>) <DESC | ASC>;

UPDATE <tablename>
SET
<fieldname1> = <value>,
<fieldname2> = <value>,
WHERE <fieldname_id> <operator> <testvalue>;

DELETE FROM <tablename>
WHERE <fieldname_id> <operator> <testvalue>;

SELECT 
  <listoffields>
FROM <A>
INNER JOIN <B>
  ON <A>.<fieldname1> = <B>.<fieldname1>;

WHERE <fieldname1> <operator> <testvalue>
GROUP BY <fieldname1>
HAVING <functioname>(<fieldname1>) > <testvalue>
ORDER BY <functioname>(<fieldname2>) <DESC | ASC>;

SELECT 
  <listoffields>
FROM <A>
FULL OUTER JOIN <B>
  ON <A>.<fieldname1> = <B>.<fieldname1>
WHERE <A>.<fieldname> IS NULL OR  <B>.<fieldname> IS NULL;

mysqldump -u <username> -p <databasename> > <folderpath>/<filename>.sql

mysql -u <username> -p <databasename> < <folderpath>/<filename>.sql

mysql -u root -p test < /Users/macbookproi932/Documents/topenterpriseusa/topenterpriselocal_02232024.sql

SELECT 
  uid, name
FROM users_field_data
RIGHT JOIN user__roles
  ON users_field_data.uid=user__roles.entity_id
WHERE users_field_data.uid IS NULL;

SELECT uid, name FROM users_field_data LEFT JOIN user__roles ON users_field_data.uid=user__roles.entity_id
UNION
SELECT uid, name FROM users_field_data RIGHT JOIN user__roles ON users_field_data.uid=user__roles.entity_id
WHERE users_field_data.uid IS NULL OR user__roles.entity_id IS NULL;

CREATE TABLE users (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR (30) NOT NULL
);

INSERT INTO users (name) VALUES ("Glenda Sanchez");
INSERT INTO users (name) VALUES ("Jane Doe");
INSERT INTO users (name) VALUES ("John Smith");

CREATE TABLE user_logins (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   user_id INT,
   login_date DATE,
   FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO user_logins (user_id, login_date) VALUES (1, "2024-1-28");
INSERT INTO user_logins (user_id, login_date) VALUES (2, "2024-1-29");
INSERT INTO user_logins (user_id, login_date) VALUES (3, "2024-1-29");
INSERT INTO user_logins (user_id, login_date) VALUES (1, "2024-2-01");
INSERT INTO user_logins (user_id, login_date) VALUES (1, "2024-2-01");
INSERT INTO user_logins (user_id, login_date) VALUES (3, "2024-2-10");
INSERT INTO user_logins (user_id, login_date) VALUES (1, "2024-2-11");
INSERT INTO user_logins (user_id, login_date) VALUES (2, "2024-2-12");
INSERT INTO user_logins (user_id, login_date) VALUES (3, "2024-2-25");

SELECT 
  *
FROM users
LEFT JOIN user_logins
  ON users.id=user_logins.user_id;

SELECT 
  *
FROM users
LEFT JOIN user_logins
  ON users.id=user_logins.user_id
WHERE user_logins.login_date >= '2024-02-01';

SELECT 
  *
FROM users
FULL OUTER JOIN user_logins
  ON users.id=user_logins.user_id;

SELECT * FROM users LEFT JOIN user_logins ON users.id=user_logins.user_id
UNION
SELECT * FROM users RIGHT JOIN user_logins ON users.id=user_logins.user_id;

SELECT * FROM users LEFT JOIN user_logins ON users.id=user_logins.user_id
UNION
SELECT * FROM users RIGHT JOIN user_logins ON users.id=user_logins.user_id
WHERE users.id = 1 AND user_logins.user_id = 1;

(SELECT * FROM users LEFT JOIN user_logins ON users.id=user_logins.user_id)
UNION
(SELECT * FROM users RIGHT JOIN user_logins ON users.id=user_logins.user_id)
WHERE users.id = 2 AND user_logins.user_id >= '2024-02-01';

((SELECT * FROM users LEFT JOIN user_logins ON users.id=user_logins.user_id)
UNION
(SELECT * FROM users RIGHT JOIN user_logins ON users.id=user_logins.user_id)
WHERE users.id = 1 OR user_logins.user_id = 1);

SELECT *
  FROM (SELECT id, name FROM users
        UNION
        SELECT user_id, login_date  FROM user_logins
       ) AS users_logins;

SELECT *
  FROM (SELECT users.id, users.name FROM users
        UNION
        SELECT user_id, login_date  FROM user_logins
       ) AS users_logins;

SELECT *
  FROM (SELECT id, name FROM users
        UNION
        SELECT user_id, login_date  FROM user_logins
       ) AS users_logins
 WHERE users_logins.id = 1;

 SELECT *
  FROM (SELECT * FROM users
        UNION
        SELECT user_id, login_date  FROM user_logins
       ) AS users_logins;
 WHERE users_logins.name  >= '2024-02-01';



SELECT 
  *
FROM users
INNER JOIN user_logins
  ON users.id=user_logins.user_id;

SELECT 
  users.id, users.name, user_logins.login_date
FROM users
RIGHT JOIN user_logins
  ON users.id=user_logins.user_id;

SELECT 
  users.id, users.name, user_logins.login_date
FROM users
RIGHT JOIN user_logins
  ON users.id=user_logins.user_id
WHERE users.id = 3;

SELECT 
  *
FROM users
RIGHT JOIN user_logins
  ON users.id=user_logins.user_id
WHERE users.id = 3;

SELECT 
  users.id, users.name, user_logins.login_date
FROM users
INNER JOIN user_logins
  ON users.id=user_logins.user_id;

SELECT 
  users.id, users.name, user_logins.login_date
FROM users
LEFT JOIN user_logins
  ON users.id=user_logins.user_id
 WHERE user_logins.login_date  >= '2024-02-01';

 SELECT 
  users.id, users.name, user_logins.login_date
FROM users
LEFT JOIN user_logins
  ON users.id=user_logins.user_id;

SELECT 
  users.id, users.name, user_logins.login_date
FROM users
LEFT JOIN user_logins
  ON users.id=user_logins.user_id
INTO OUTFILE '<folderpath>/<filename.txt>';

mysql -u root -p -e "SELECT 
  users.id, users.name, user_logins.login_date
FROM users
LEFT JOIN user_logins
  ON users.id=user_logins.user_id" > '/Users/macbookproi932/Documents/jmarianogithub/snippets/strappi/test.csv';

mysql -u root -p -e example "SELECT 
  users.id, users.name, user_logins.login_date
FROM users
LEFT JOIN user_logins
  ON users.id=user_logins.user_id;" > '/Users/macbookproi932/Documents/jmarianogithub/snippets/strappi/test.txt';

CREATE TABLE member_infos (
   id INT NOT NULL,
   phone VARCHAR (30) NOT NULL,
   UNIQUE (id),
   FOREIGN KEY (id) REFERENCES members(id)
);

INSERT INTO member_infos (id, phone) VALUES (1, "777-858-7777");
INSERT INTO member_infos (id, phone) VALUES (2, "787-858-7777");
INSERT INTO member_infos (id, phone) VALUES (3, "787-859-7777");

CREATE TABLE students (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR (30) NOT NULL
);


INSERT INTO students (name) VALUES ("John Doe");
INSERT INTO students (name) VALUES ("Jane Doe");
INSERT INTO students (name) VALUES ("Jack Doe");



CREATE TABLE classes (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR (30) NOT NULL
);

INSERT INTO classes (title) VALUES ("Chemistry");
INSERT INTO classes (title) VALUES ("Math");
INSERT INTO classes (title) VALUES ("English");

CREATE TABLE students_classes (
   sid INT NOT NULL,
   cid INT NOT NULL,
   FOREIGN KEY (sid) REFERENCES students(id),
   FOREIGN KEY (cid) REFERENCES classes(id),
   PRIMARY KEY (sid, cid)
);

INSERT INTO students_classes (sid, cid) VALUES (1,1);
INSERT INTO students_classes (sid, cid) VALUES (1,2);
INSERT INTO students_classes (sid, cid) VALUES (1,3);
INSERT INTO students_classes (sid, cid) VALUES (2,1);
INSERT INTO students_classes (sid, cid) VALUES (2,2);
INSERT INTO students_classes (sid, cid) VALUES (2,3);
INSERT INTO students_classes (sid, cid) VALUES (3,1);
INSERT INTO students_classes (sid, cid) VALUES (3,2);
INSERT INTO students_classes (sid, cid) VALUES (3,3);


CREATE TABLE persons (
   color VARCHAR (20) NOT NULL,
   styles VARCHAR (20) NOT NULL,
   CONSTRAINT ck_colors_and_styles
   PRIMARY KEY (color, styles)
);