/**
 * New node file
 */

function Adult(firstName, lastName, username, packNumber, 
		leaderType, rankType, phoneNumber, rowID)
{
	this.firstName=firstName;
	this.lastName=lastName;
	this.username=username;
	this.packNumber=packNumber;
	this.leaderType=leaderType;
	this.rankType=rankType;
	this.phoneNumber=phoneNumber;
	this.rowID=rowID;
	this.scouts=[];
}

function hashPassword(password)
{
	var hash=0;

	for (i=0;i<password.length;i++)
	{
		hash+=password[i].charCodeAt()*37;
	}
	return hash;
}

function selectAdult(username, password, connection)
{
	var strQuery = "SELECT * FROM adult WHERE username= '" +connection.escape(username)+"'" +"AND password= '"
	+ hashPassword(password)+"'";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				var temp = new Adult();
				for(i=0; i<rows.length;i++)
				{
					var row=rows[i].split();
					Object.keys(temp)[i]=row[row.length-1];
				}
				if(temp.rowID<1)
				{temp.rowID=-1;}
				return temp;
			}
			});
}

function insertAdult(firstName, lastName, username, password, packNumber, 
		leaderType, rankType, phoneNumber, connection)
{
	var temp= selectAdult(username, connection);

	if(temp.rowID<0)
	{
		temp= new Adult(firstName, lastName, username, packNumber, 
				leaderType, rankType, phoneNumber,-1);
		return temp;
	}



	var strQuery = "INSERT INTO adult VALUES('"+firstName+"', '"+lastName+"', '"+
	username + "', '" +hashPassword(password) + "', '" + packNumber+"', '"+
	leaderType +"', '"+ rankType+"', '"+phoneNumber+ "', 'NULL')";
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				temp= new Adult(firstName, lastName, username, packNumber, 
						leaderType, rankType, phoneNumber,rows.insertid);
				return addScoutsToParent(temp);
			}
			});
}

function updateAdult(firstName, lastName, username, password, packNumber, 
		leaderType, rankType, phoneNumber,adultID, connection)
{
	var temp= selectAdult(username, connection);

	if(temp.rowID<0)
	{
		temp= new Adult(firstName, lastName, username, packNumber, 
				leaderType, rankType, phoneNumber,-1);
		return temp;
	}



	var strQuery = "UPDATE adult SET first_name="+firstName+", last_name="+lastName+", username="+
	username + ", password=" +hashPassword(password) + ", pack_number=" + packNumber+", leader_type="+
	leaderType +", rank_type="+ rankType+", phone_number="+phoneNumber+ "WHERE adult_id="+id;
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				temp= new Adult(firstName, lastName, username, packNumber, 
						leaderType, rankType, phoneNumber,rows.insertid);
				return temp;
			}
			});
}

function insertAchievement(name, description, categoryID, numElectives, connection)
{
	var strQuery = "INSERT INTO activity  VALUES('"+name+"', '" +  description + "', '" + categoryID
	+"', '"+ numElectives+ "', 'NULL')";
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function insertCategory(name, description, rankID, numAchievments, connection)
{
	var strQuery = "INSERT INTO category VALUES('"+name+"', '" +  description + "', '" 
	+ rankID+"', '"+numAchievments+ "', 'NULL')";
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

function insertRecord(recordRankType, dateDone,requirementID, 
		scoutID, connection)
{
	var strQuery = "INSERT INTO record  VALUES('"+recordRankType+"', '" +  
	dateDone + "', '" +requirementID+"', '"+scoutID+"', 'NULL')";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function insertRequirement(name, description, achievementID, reqElec, connection)
{
	var strQuery = "INSERT INTO requirement VALUES('"+name+"', '" +  description + 
	"', '" + achievementID+"', '"+reqElec+ "', 'NULL')";
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function scout(firstName, lastName, birthDate, packNumber, rankType, parentID, leaderId, rowID)
{
	this.firstName=firstName;
	this.lastName=lastName;
	this.birthDate=birthDate;
	this.packNumber=packNumber;
	this.rankType=rankType;
	this.parentID=parentID;
	this.leaderID=leaderID;
	this.rowID=rowID;
}
function insertScout(firstName, lastName, birthDate, 
		packNumber, rankType, parentID, leaderID, connection)
{
	var strQuery = "INSERT INTO scout VALUES('"+firstName+"', '" +lastName+"', '"+
	birthDate + "', '" + packNumber + "', '"+ rankType+"', '"+parentID+", "+leaderID+"', 'NULL')";
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				//console.log(rows);
				return rows.insertid;
			}
			});
}

function addScoutsToParent(adult, connection)
{
	var strQuery = "SELECT * FROM scout WHERE parent_id= '" +adult.rowID+"'";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				var temp = new Scout();

				for(k=0;k<rows.length ;k++)
				{
					for(i=0; i<Object.keys(temp).length;i++)
					{
						var row=rows[i].split();
						Object.keys(temp)[i]=row[row.length-1];
					}
					if(temp.rowID<1)
					{temp.rowID=-1;}
					adult.add(temp);
				}
				return adult;
			}
			});
}
