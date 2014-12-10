var debug = true;

function createAchievements()
{
	var achieve = { wolf : [], bear : []};

	achievement0 = {name: "Feats of Skill", num : 1, requirements : [], 			numelec: 1};
	
	ra = {name : "a", description : "Play catch with someone 10 steps away. Play until you can throw and catch.", required : true, date : "", dbID : 1};
	rb = {name : "b", description : "Walk a line back and forth. Do it side-ways, too. Then walk the edge of a board six steps each way.", required : true, date : "" , dbID : 2};
	rc = {name : "c", description : "Do a front roll.", required : true, date : "", dbID : 3};
	rd = {name : "d", description : "Do a back roll.", required : true, date : "",  dbID : 4};
	re = {name : "e", description : "Do a falling forward roll.", required : true, date : "", dbID : 5};
	rf = {name : "f", description : "See how high you can jump.", required : false, date : "", dbID : 6};
	rg = {name : "g", description : "Do the elephant walk, frog leap, and crab walk.", required : false, date : "", dbID : 7};
	rh = {name : "h", description : "Using a basic swim stroke swim 25 feet", required : false, date : "", dbID : 8};
	ri = {name : "i", description : "Tread water for 15 seconds or as long as you can. Do your best.", required : false, date : "", dbID : 9};
	rj = {name : "j", description : "Using a basketball do a chest pass, bounce pass, and overhand pass.", required : false, date : "", dbID : 10};
	rk = {name : "k", description : "Do a frog stand.", required : false, date : "", dbID : 11};
	rl = {name : "l", description : "Run or jog in place for 5 minutes", required : false, date : "", dbID : 12};

	achievement0.requirements = [ra, rb, rc, rd, re, rf, rg, rh, ri, rj, rk, rl];

	achievement1 = {name: "Your Flag", num : 2, requirements :[], 			numelec: 0};

	ra = {name : "a", description : "Give the Pledge of Allegiance to the flag of the United States of America. Tell what it means.", required : true, date : "", dbID : 13};
	rb = {name : "b", description : "Lead a flag ceremony in your den. Here are some ideas.", required : true, date : "", dbID : 14};
	rc = {name : "c", description : "Tell how to respect and take care of the U.S. flag. Show three ways to display it.", required : true, date : "", dbID : 15};
	rd = {name : "d", description : "Learn about the flag of your state or territory and how to display it.", required : true, date : "", dbID : 16};
	re = {name : "e", description : "Learn how to raise a U.S. flag properly for an outdoor ceremony", required : true, date : "", dbID : 17};
	rf = {name : "f", description : "Participate in an outdoor flag ceremony.", required : true, date : "", dbID : 18};
	rg = {name : "g", description : "With the help of another person fold the U.S. flag.", required : true, date : "", dbID : 19};

	achievement1.requirements = [ra, rb, rc, rd, re, rf, rg];

	achievement2 = {name: "Keep Your Body Healthy", num : 3, requirements :[], 			numelec: 0};

	ra = {name : "a", description : "Make a chart and keep track of your health habits for two weeks.", required : true, date : "", dbID : 20};
	rb = {name : "b", description : "Tell four ways to stop the spread of colds", required : true, date : "", dbID : 21};
	rc = {name : "c", description : "Show what to do for a small cut on your finger", required : true, date : "", dbID : 22};


	achievement2.requirements = [ra, rb, rc];

	achievement3 = {name: "Know Your Home and Community", num : 4, requirements :[], 			numelec: 0};

	ra = {name : "a", description : "Make a list of phone numbers you need in case of an emergency. Put a copy of this list by each phone or in a central place in your home. Update it often.", required : true, date : "", dbID : 23};
	rb = {name : "b", description : "Tell what to do if someone comes to the door and wants to come in.", required : true, date : "", dbID : 24};
	rc = {name : "c", description : "Tell what to do if someone calls on the phone", required : true, date : "", dbID : 25};
	rd = {name : "d", description : "When you and your family leave home, remember to...", required : true, date : "", dbID : 26};
	re = {name : "e", description : "Talk with your family members. Agree on the household jobs you will be responsible for. Make a list of your jobs and mark off when you have finished them.  Do this for one month.", required : true, date : "", dbID : 27};
	rf = {name : "f", description : "Visit an important place in your community, such as a historic or government location.  Explain why it is important.", required : true, date : "", dbID : 28};
	achievement3.requirements = [ra, rb, rc, rd, re, rf];

	achievement4 = {name: "Tools for Fixing and Building", num : 5, requirements :[], 			numelec: 0};

	ra = {name : "a", description : "Point out and name seven tools. Do this at home, or go to a hardware store with an adult. Tell what each tool does.", required : true, date : "", dbID : 29};
	rb = {name : "b", description : "Show how to use pliers", required : true, date : "", dbID : 30};
	rc = {name : "c", description : "Identify a Phillips head and a standard screw.  Then use the right tool to drive and then remove one from a board.", required : true, date : "", dbID : 31};
	rd = {name : "d", description : "Show how to use a hammer", required : true, date : "", dbID : 32};
	re = {name : "e", description : "Make a birdhouse, a set of bookends, or something else useful.", required : true, date : "", dbID : 33};

	achievement4.requirements = [ra, rb, rc, rd, re];

	achievement5 = {name: "Start a Collection", num : 6, requirements:[], 			numelec: 0};

	ra = {name : "a", description : "Complete the Character Connection for Positive Attitude", required : true, date : "", dbID : 34};
	rb = {name : "b", description : "Make a collection of anything you like.  Start with 10 things. Put them together in a neat way.", required : true, date : "", dbID : 35};
	rc = {name : "c", description : "Show and explain your collection to another person.", required : true, date : "", dbID : 36};

	achievement5.requirements = [ra, rb, rc];

	achievement6 = {name: "Your Living World", num : 7, requirements:[], 			numelec: 0};

	ra = {name : "a", description : "Complete the Character Connection for Respect", required : true, date : "", dbID : 37};
	rb = {name : "b", description : "Land, air, and water can get dirty. Discuss with your family ways this can happen.", required : true, date: "", dbID : 38};
	rc = {name : "c", description : "Find out how recycling is done where you live. Find out what items you can recycle.", required : true, date : "", dbID : 39};
	rd = {name : "d", description : "With an adult, pick up litter in your neighborhood.  Wear gloves to protect your hands against germs and cuts from sharp objects.", required : true, date : "", dbID : 40};
	re = {name : "e", description : "With an adult, find three stories that tell how people are protecting our world. Read and discuss them together.", required : true, date : "", dbID : 41};
	rf = {name : "f", description : "Besides recycling, there are other ways to save energy. List three ways you can save energy, and do them.", required : true, date : "", dbID : 42};

	achievement6.requirements = [ra, rb, rc, rd, re, rf];

achievement7 = {name: "Cooking and Eating", num : 8, requirements:[], 			numelec: 0};

	ra = {name : "a", description : "Study the Food Guide Pyramid.  Name some foods from each of the food groups.", required : true, date : "", dbID : 43};
	rb = {name : "b", description : "Plan the meals you and your family should have for one day. List things your family should have from the food groups shown in the Food Guide Pyramid. At each meal, you should have foods from at least three food groups.", required : true, date : "", dbID : 44};
	rc = {name : "c", description : "Help fix at least one meal for your family. Help set the table, cook the food, and wash the dishes.", required : true, date : "", dbID : 45};
	rd = {name : "d", description : "Fix your own breakfast. Wash and put away the dishes.", required : true, date : "", dbID : 46};
	re = {name : "e", description : "With an adult, help to plan, prepare, and cook and outdoor meal.", required : true, date : "", dbID : 47};
	
	achievement7.requirements = [ra, rb, rc, rd, re];

achievement8 = {name: "Be Safe at Home and on the Street", num : 9, requirements:[], 			numelec: 0};

	ra = {name : "a", description : "Complete the Character Connection for Responsibility", required : true, date : "", dbID : 48};
	rb = {name : "b", description : "With an adult, check your home for hazards and know how to make your home safe.", required : true, date : "", dbID : 49};
	rc = {name : "c", description : "With an adult, check your home for danger from fire.", required : true, date : "", dbID : 50};
	rd = {name : "d", description : "Practice good rules of street and road safety.", required : true, date : "", dbID : 51};
	re = {name : "e", description : "Know the rules of bike safety.", required : true, date : "", dbID : 52};

	achievement8.requirements = [ra, rb, rc, rd, re];


achievement9 = {name: "Family Fun", num : 10, requirements:[], 			numelec: 0};

	ra = {name : "a", description : "Complete the Character Connection for Cooperation", required : true, date : "", dbID : 53};
	rb = {name : "b", description : "Make a game like on of these. Play it with your family.", required : true, date : "", dbID : 54};
	rc = {name : "c", description : "Plan a walk. Go to a park or a wooded area, or visit a zoo or museum with your family.", required : true, date : "", dbID : 55};
	rd = {name : "d", description : "Read a book or Boys' Life magazine with your family. Take turns reading aloud.", required : true, date : "", dbID : 56};
	re = {name : "e", description : "Decide with Akela what you will watch on television or listen to on the radio.", required : true, date : "", dbID : 57};
	rf = {name : "f", description : "Attend a concert, a play, or other live program with your family.", required : true, date : "", dbID : 58};
	rg = {name : "g", description : "Have a Family Board Game Night at home with members of your family.", required : true, date : "", dbID : 59};

	achievement9.requirements = [ra, rb, rc, rd, re, rf, rg];

achievement10 = {name: "Duty to God", num : 11, requirements:[], 			numelec: 0};

	ra = {name : "a", description : "Complete the Character Connection for Faith.", required : true, date : "", dbID : 60};
	rb = {name : "b", description : "Talk with your family about what they believe is their duty to God.", required : true, date : "", dbID : 61};
	rc = {name : "c", description : "Give two ideas on how you can practice or demonstrate your religious beliefs.  Choose one and do it.", required : true, date : "", dbID : 62};
	rd = {name : "d", description : "Find out how you can help your church, synagogue, mosque, temple, or religious fellowship.", required : true, date : "", dbID : 63};

	achievement10.requirements = [ra, rb, rc, rd];

achievement11 = {name: "Making Choices", num : 12, requirements:[], 			numelec: 0};

	ra = {name : "a", description : "Complete the Character Connection for Courage.", required : true, date : "", dbID : 64};
	rb = {name : "b", description : "There is an older boy who hangs around Jason's school.  He tries to give drugs to the children. What would you do if you were Jason?", required : true, date : "", dbID : 65};
	rc = {name : "c", description : "Lee is home alone. The phone rings. When Lee answers, a stranger asks whether Lee's mother is home. She is not. Lee is alone.  What would you do if you were Lee?", required : true, date : "", dbID : 66};
	rd = {name : "d", description : "Justin is new to your school. He has braces on his legs and walks with a limp.  Some of the kids at school tease him.  They want you to tease him, too. What would you do?", required : true, date : "", dbID : 67};
	re = {name : "e", description : "Juan is on a walk with his little sister.  A car stops and a man asks them to come over to the car. What would you do if you were Juan?", required : true, date : "", dbID : 68};
	rf = {name : "f", description : "Matthew's grandmother gives him money to buy an ice-cream cone.  On the way to the store, a bigger boy asks for money and threatens to hit Matthew if he does not give him some money. If you were Matthew, what would you do?", required : true, date : "", dbID : 69};
	rg = {name : "g", description : "Chris and his little brother are home alone in the afternoon. A woman knocks on the door and says she wants to read the meter. She is not wearing a uniform. What would you do if you were Chris?", required : true, date : "", dbID : 70};
	rh = {name : "h", description : "Sam is home alone. He looks out the window and sees a man trying to break into a neighbor's back door. What would you do if you were Sam?", required : true, date : "", dbID : 71};
	ri = {name : "i", description : "Mr. Palmer is blind. He has a guide dog. One day as he is crossing the street, some kids whistle and call to the dog. They want you and your friends to call the dog, too. What would you do?", required : true, date : "", dbID : 72};
	rj = {name : "j", description : "Some kids who go to Bob's school want him to steal candy and gum from a store, which they can share later. Bob knows this is wrong, but he wants to be popular with these kids. What would you do if you were Bob?", required : true, date : "", dbID : 73};
	rk = {name : "k", description : "Paul and his little sister are playing outdoors. A very friendly, elderly woman stops and watches the children for a while.  Paul doesn't know the woman. She starts to talk with them and offers to take Paul's little sister on a walk around the block.  What would you do?", required : true, date : "", dbID : 74};

	achievement11.requirements = [ra, rb, rc, rd, re, rf, rg, rh, ri, rj, rk];


	achieve.wolf = [achievement0, achievement1, achievement2, achievement3, 	   achievement4, achievement5, achievement6, achievement7, achievement8, achievement9, achievement10, achievement11];

	//console.log(achieve.wolf[0].requirements[0].description);

	return achieve;
	
	
}

function insertScout(f_name, l_name, birthdate, packnumber, ranktype, connection, cb)
{
	console.log("BEFORE SCOUT");
	var strQuery = "INSERT INTO scout VALUES('"+f_name+"', '" +  l_name + "', '" + birthdate + "', '" + packnumber + "', '" + ranktype + "', NULL, NULL, NULL)";
	connection.query( strQuery, function(err, rows)
		{if(err) {
			throw err;
		}else{
			//console.log(rows);
			cb({status: "OK"});
		}
	});
}

function insertAdult2(f_name, l_name, username, password, packnumber, leader_type,  ranktype, phonenumber, connection)
{

	var strQuery = "INSERT INTO adult VALUES ('" + f_name + "', '" + l_name + 
"', '" + username + "', '" + password + "', '" + packnumber + "', '" + leader_type + "', '" + ranktype + "', '" + phonenumber + "', NULL)";

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

function hashPassword(username, password)
{
	var hash=0;

	for (i=0;i<username.length;i++)
	{
		hash+=username[i].charCodeAt()*51;
	}
	
	for (i=0;i<password.length;i++)
	{
		hash+=password[i].charCodeAt()*37;
	}
	

	return hash;
}

function selectAdult(username, connection, cb)
{
	var strQuery = "SELECT * FROM adult WHERE username = '" + username + "'";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				temp= rows[0];
				if(temp != undefined)
				{
					console.log("TEMP EXISTS");
					temp.password="";
				}
				if(debug)
				{
					//console.log(rows);
				}
				
				cb(null,temp);
			}
			});
}

function selectScoutList(leader_type, rank_type, pack_number, parent_id, connection, cb)
{
	var strQuery;
	if(leader_type == "parent")
	{
		console.log("parent");
		strQuery = "SELECT * FROM scout WHERE parent_id = " + parent_id;
	}
	else
	{
		console.log("leader");
		strQuery = "SELECT * FROM scout WHERE pack_number = '" + pack_number + "' AND rank_type = '" + rank_type + "'";
	}

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				var ans;
				console.log(rows);
				if(rows[0] == undefined)
				{
					ans = {scout : [], status: "No Scout Exists"};
				}
				else
				{
					ans = {scout : rows, status: "OK"};
				}
				cb(ans);
			}
			});
}

function selectBatman(connection, cb)
{
	strQuery = "SELECT * FROM scout WHERE parent_id is null";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				var ans;
				console.log(rows);
				if(rows[0] == undefined)
				{
					ans = {scout : [], status: "No Scout Exists"};
				}
				else
				{
					ans = {scout : rows, status: "OK"};
				}
				cb(ans);
			}
			});
}

function verifyPassword(username, password, connection, cb)
{
	var strQuery;

		console.log("leader");
	strQuery = "SELECT * FROM adult WHERE username = '" + username + "' AND password = '" + password + "'";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				var ans;
				console.log(rows);
				if(rows[0] == undefined)
				{
					ans = {status: "USERNAME OR PASSWORD INCORRECT"};
				}
				else
				{
					ans = {adult : rows[0], status: "OK"};
				}
				cb(ans);
			}
			});
}


function insertAdult(firstName, lastName, username, password, packNumber, 
		leaderType, rankType, phoneNumber, email, connection, cb)
{
	selectAdult(username, connection, function(err, temp){
		if(temp != undefined)
		{
			if(debug)
			{
				console.log("ALREADY EXISTS");
			}
			returnme = {first_name : firstName, last_name : lastName, username : username, pack_number : packNumber, leader_type : leaderType, rank_type : rankType, status : "ALREADY EXISTS"}
			cb(returnme);
		}
		else
		{
			console.log("Doesn't exist");
			connection.query( strQuery, function(err, rows)
				{if(err) {
					throw err;
				}else{
					//temp= new Adult(row[0]);
					if(debug)
					{
						console.log("insertAdult");
						//console.log(rows);
					}
			console.log("Checking insertid: " + rows.insertID);
					returnme = {first_name : firstName, last_name : lastName, username : username, pack_number : packNumber, leader_type : leaderType, rank_type : rankType, parent_id : rows.insertId, status : "OK"}
					cb(returnme);
				}
			});
		}
	});



		/*var strQuery = "INSERT INTO adult VALUES ('" + f_name + "', '" + l_name + 
"', '" + username + "', '" + password + "', '" + packnumber + "', '" + leader_type + "', '" + ranktype + "', '" + phonenumber + "', NULL)";*/

	var strQuery = "INSERT INTO adult VALUES('"+
	firstName     +"', '"+
	lastName      +"', '"+
	username      +"', '"+
	password       +"', '"+ 
	packNumber    +"', '"+	
	leaderType    +"', '"+ 
	rankType      +"', '"+
	phoneNumber   +"', '"+
	email         +"', NULL)";
	
}

function updateScout(firstName, lastName, birthDate,packNumber, 
		rankType, parentID, scoutID, connection, cb)
{
	console.log(firstName + " " + lastName + " " + birthDate + " " + packNumber + " " + rankType);
	console.log(parentID + " " + scoutID);
	var strQuery = "UPDATE scout SET "+
	"first_name= '"     + firstName  +
	"', last_name='"    + lastName   +
	"', birth_date='"   + birthDate  + 
	"', pack_number='"  + packNumber + 
	"', rank_type='"    + rankType  +
	"', parent_id='"    + parentID   +
	"', leader_id= NULL"    + 
	" WHERE scout_id="+ scoutID;
	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				console.log(rows);
				/*if(rows[0] == undefined)
				{
					cb({status: "SCOUTNOEXIST"});
				}
				else
				{
					cb({status: "OK"});
				}*/
				cb({status:"OK"});
			}
			});
}

function insertRecord(recordRankType, dateDone,requirementID, 
		scoutID, connection, cb)
{
	var strQuery = "INSERT INTO record  VALUES('"+
	recordRankType            +"', '"+  
	dateDone                  +"', '"+
	requirementID             +"', '"+
	scoutID                   +"', 'NULL')";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				
				cb({status : "OK"});
			}
			});
}

function selectScout(id, connection, achievements, cb)
{
	var strQuery = "SELECT * FROM scout WHERE scout_id = " + id;
	var strQuery2 = "SELECT * FROM record";
	//rows2 = {};
	connection.query( strQuery + "; " + strQuery2, function(err, rows)
	{
		if(err) {
			throw err;
		}else
		{

			if(rows[0][0] == undefined)
			{
				console.log("No SCOUT EXISTS");
				ans = {status : "ScoutNoExists"}
				cb(null, ans)
			}
			else
			{
				s_result = rows[0];
				r_result = rows[1];

				//console.log(s_result[0].first_name);
				//console.log(r_result[0].record_rank_type);

				//console.log(r_result);
				rank_id = 1;
				if(s_result.rank_type == 'Bear')
				{
					//rank_id = 2;
				}
				
				if(r.result == undefined)
				{
				}
				else if(rank_id == 1)
				{
					//GET WOLF RECORD DATES
					for(var i = 0; i < r_result.length; i++)
					{
						if(r_result[i].requirement_id < 13)
						{
							achievements.wolf[0].requirements[r_result[i].requirement_id].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 20)
						{
							achievements.wolf[1].requirements[r_result[i].requirement_id-13].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 23)
						{
							achievements.wolf[2].requirements[r_result[i].requirement_id-20].date = r_result[i].date_done;
						
						}
						else if(r_result[i].requirement_id < 29)
						{
							achievements.wolf[3].requirements[r_result[i].requirement_id-23].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 34)
						{
							achievements.wolf[4].requirements[r_result[i].requirement_id-29].date = r_result[i].date_done;
						
						}
						else if(r_result[i].requirement_id < 37)
						{
							achievements.wolf[5].requirements[r_result[i].requirement_id-34].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 43)
						{
							achievements.wolf[6].requirements[r_result[i].requirement_id-37].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 48)
						{
							achievements.wolf[7].requirements[r_result[i].requirement_id-43].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 53)
						{
							achievements.wolf[8].requirements[r_result[i].requirement_id-48].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 60)
						{
							achievements.wolf[9].requirements[r_result[i].requirement_id-53].date = r_result[i].date_done;
						
						}
						else if(r_result[i].requirement_id < 64)
						{
							achievements.wolf[10].requirements[r_result[i].requirement_id-60].date = r_result[i].date_done;
						
						}
						else if(r_result[i].requirement_id < 75)
						{
							achievements.wolf[11].requirements[r_result[i].requirement_id-64].date = r_result[i].date_done;
						
						}

					}
				}
				else
				{
					//GET BEAR RECORDS
				}

				//console.log(s_result);

				ans = {first_name : s_result[0]. first_name, last_name : s_result[0].last_name, rank : s_result[0].rank_type, ach : achievements, status : "OK"};
				
				/*
				console.log(ans.ach.wolf[0].requirements[0].description);
				console.log("PRINTING SELECT SCOUT RESULTS");
				console.log(ans.first_name + ans.last_name + ans.rank);

				
				for(var x = 0; x < ans.ach.wolf.length; x++)
				{
					console.log(ans.ach.wolf[x].name + " " + ans.ach.wolf[x].num);
					console.log("--------------------");
					for(var z = 0; z < ans.ach.wolf[x].requirements.length; z++)
					{
						//console.log(ans.ach.wolf[x].requirements[z].description + " " + ans.ach.wolf[x].requirements[z].date);
						console.log(ans.ach.wolf[x].requirements[z].date)
					}
				}
				*/
				cb(null, ans);

				
			}				
		}
	});

	//console.log(rows2);

	
}

//MAIN
//Initialize achievements
achieve = createAchievements();

//Initialize mysql database
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password: "lildude1",
	multipleStatements: true
});

console.log("HELLO WORLD");
//connection.connect();
connection.query("USE scoutdb");

//function insertAdult(firstName, lastName, username, password, packNumber, 
	//	leaderType, rankType, phoneNumber, email, connection)

//set up webserver
var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res)
{
	var uri = url.parse(req.url).pathname;
	console.log(uri);

	if(uri == "/registeradult")
	{
		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);

			insertAdult(info.first_name, info.last_name, info.username, info.password, info.pack_number, info.leader_type, info.rank_type, info.phone_number, info.email, connection, function(sendjson){
				console.log("PRINTING INSERT ADULT RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
			});
			
		});
	}
	else if (uri == "/registerscout")
	{
		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			//function insertScout(f_name, l_name, birthdate, packnumber, ranktype, connection)
			insertScout(info.first_name, info.last_name, info.birth_date, info.pack_number, info.rank_type, connection, function(sendjson){
				console.log("PRINTING INSERT SCOUT RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
			});
			
		});
	}
	else if (uri == "/addparent_id")
	{

		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			updateScout(info.first_name, info.last_name, info.birth_date, info.pack_number, info.rank_type, info.parent_id, info.scout_id, connection, function(sendjson){
				console.log("PRINTING UPDATE SCOUT RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
			});
			
		});
	}
	else if (uri == "/scoutstoselect")
	{
		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			selectScoutList(info.leader_type, info.rank_type, info.pack_number, info.parent_id, connection, function(sendjson){
				console.log("PRINTING SCOUTLIST RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
			});
			
		});
	}
	else if (uri == "/scoutswithnoparent")
	{

		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			selectBatman(connection, function(sendjson){
				console.log("PRINTING SCOUTLIST RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
			});
			
		});
	}
	else if (uri == "/addrecord")
	{
		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			insertRecord(info.rank_type, info.date_done, info.req_id, info.scout_id, connection, function(ans)
			{
			console.log("PRINTING ADDRECORD RESULTS");
			console.log(ans.status);
			ans2 = ans;
			res.end(JSON.stringify(ans2));
			});

			
		});
	}
	else if (uri == "/scoutinfo")
	{
		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			selectScout(info.id, connection, a, function(err, ans)
			{
			console.log("PRINTING SELECT SCOUT RESULTS");
			console.log(ans.first_name + ans.last_name + ans.rank);
			ans2 = ans;
			res.end(JSON.stringify(ans2));
			});

			
		});
		//console.log(ans2.first_name + ans2.last_name + ans2.rank);
		
			
	}
	else if (uri == "/verifypassword")
	{
		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			verifyPassword(info.username, info.password, connection, function(sendjson){
				console.log("PRINTING VERIFY RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
			});
			
		});
	}
	else
	{
		res.writeHead(200);
		res.end('Hello Http');
	}

	
});
server.listen(8080);

//console.log("AFTER SCOUT");

//connection.end(function(err){
//});
