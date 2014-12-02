function insertAdult(name, user, passw, leadertype, connection)
{
	var strQuery = "INSERT INTO adult VALUES('"+name+"', '" +  user + "', '" + passw + "', '" + leadertype + "', 'NULL')";
	connection.query( strQuery, function(err, rows)
		{if(err) {
			throw err;
		}else{
			//console.log(rows);
		}
	});
}

function selectAdults(connection)
{
	var strQuery = "select * from adult";
	
	connection.query( strQuery, function(err, rows)
		{if(err) {
			throw err;
		}else{
			console.log(rows);
		}
	});
}
	

var mysql = require('mysql');
var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password: "lildude1"
});

connection.connect();
connection.query("USE scoutdb");

//insertAdult('Bob', 'Bob2', 'Bob3', 'adult', connection);

selectAdults(connection);

/*var strQuery = "INSERT INTO adult VALUES('Tim', 'Joe', 'mypass', 'leader', 'NULL')";
connection.query( strQuery, function(err, rows)
	{if(err) {
		throw err;
	}else{
		console.log(rows);
	}
});*/

//strQuery = "select * from adult";

/*connection.query( strQuery, function(err, rows)
	{if(err) {
		throw err;
	}else{
		console.log(rows);
	}
});*/

connection.end(function(err){
});
