# bamazon
Week 12 Node.js &amp; MySQL homework.


Overview

In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.


Steps taken and obstacles encountered:
Created MySQL database with proper tables and mock inventory.

--------Code used in MySQL database--------------------
CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
    unique_id INTEGER(0000) NOT NULL,
	PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity, unique_id)
VALUES  ('Beef Jerky', 'Grocery', 4.65, 400, 0123),
		('Old Spice body wash', 'Cosmetics', 5.25, 344, 0124),
		('Lil Smokies', 'Grocery', 2.99, 800, 0125),
		('Febreeze', 'Grocery', 3.25, 200, 0126),
		('Grapes', 'Produce', 0.25, 500, 0127),
		('Coconuts', 'Produce', 4.00, 900, 0128),
		('Twinkies', 'Grocery', 3.45, 125, 0129),
		('Coffee', 'Grocery', 5.50, 5200, 0131),
		('Xbox One', 'Electronics', 299.00, 15, 0132),
		('Bacon', 'Grocery', 4.00, 100, 0133)
		
--------------------------------------------------------    

At this point the database would not connect to the localhost:3000

Upon creating the bamazonCustomer.js file and coding all neccessary functions and creating the bamazonCustomerSchema.SQL file I am still running into the problem of getting it to connect to the database and update the table.
This is all I have coded until this point. Upon completion of the coding course I intend to go back and reconnect and finish assignemtn.
