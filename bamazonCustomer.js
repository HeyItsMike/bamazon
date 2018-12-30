//After I have finished creating the MySQL database with all approrpiate tables and information this is where I will write the function to pull from the database and populate this function

// Pull in required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'lkjhg098',
	database: 'Bamazon'
});

// connect to the mysql server and sql database
connection.connect(function(err) {
	if (err) throw err;
	// run the start function after the connection is made to prompt the user
	start();
  });

  //Stumped on this next step as this is where I would write out a function that would respond to user requests such as purchase.
  //MySQL database doesnt connect with the javascript application. 
  //If the application connects to the MySQL databse then it should be able to handle the user requests and update tabhle with relevant customer information.
  