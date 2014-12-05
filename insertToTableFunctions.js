/**
 * New node file
 */
function insertAdult(name, user, passw, leadertype, connection)
{
	var strQuery = "INSERT INTO adult VALUES('"+name+"', '" +  user + "', '" + passw + "', '" + leadertype + "', 'NULL')";
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function insertActivity(name, description, requirementID, connection)
{
	var strQuery = "INSERT INTO activity  VALUES('"+name+"', '" +  description + "', '" + requirementID
	+ "', 'NULL')";
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function insertCategory(name, description, rankID, connection)
{
	var strQuery = "INSERT INTO category VALUES('"+name+"', '" +  description + "', '" + rankID + "', 'NULL')";
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function insertRank(name, description, connection)
{
	var strQuery = "INSERT INTO rank  VALUES('"+name+"', '" +  description + "', 'NULL')";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function insertRecord(recordType, typeID, scoutID, connection)
{
	var strQuery = "INSERT INTO record  VALUES('"+recordType+"', '" +  typeID + "', '" 
	+ scoutID + "', 'NULL')";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function insertRequirement(name, description, categoryID, connection)
{
	var strQuery = "INSERT INTO requirement VALUES('"+name+"', '" +  description + "', '" + categoryID 
	+ "', 'NULL')";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function insertScout(name, birthDate, groupName, parentID, leaderID, connection)
{
	var strQuery = "INSERT INTO scout VALUES('"+name+"', '" +  birthDate + "', '" + groupName + "', '" 
	+ parentID + ", " + leaderID+ "', 'NULL')";
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}