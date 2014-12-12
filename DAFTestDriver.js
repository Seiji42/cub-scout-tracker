/**
 * New node file
 */

var mysql = require('mysql');

//var daf = require('./databaseAccessFunctions.js');

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password: "lildude1",
	multipleStatements: true
});

connection.query("USE scoutdb");

console.log("Starting Tests \n");
insertAdult("bob", "jefferson", "bob's username", "bob's password", 10359, 
		"type1", "rank1", "490-51576", connection);

selectAdult("notInDatabase",connection);
selectAdult("bob's username",connection);

validateAdult("bob's username", "password", connection);
validateAdult("bob's username", "bob's password", connection);

updateAdult("bob2", "jefferson2", "bob's username2", "bob's password2", 103592, 
		"type2", "rank2", "777-7777", connection);

insertAchievement("achievement1", "do something", 1, 2,connection);

insertCategory("category1", "some category",1,5,connection);

insertRank("rank1", "some rank", connection);

insertRecord("some RankType", "8-15-2066",1,1,connection);

insertRequirement("requirement1", "some requirement", 1,"some elective", connection);

insertScout("jeff", "gordon", "3-17-1950", 1,"asjf",1,1,connection);

updateScout("tim", "somethingson", "4-8-2016", 2,"poiy",2,2,connection);
