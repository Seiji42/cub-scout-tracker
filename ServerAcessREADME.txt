/registeradult:

	Server Recieves:
{"first_name" : "James", 
"last_name" : "Watts",
"username" : "jwatts3",
"password" : "mypass",
"pack_number" : "855",
"leader_type" : "adult",
"rank_type" : "BearWolforNull",
"phone_number" : "1112223333",
"email" : "myemail"}

	Client Recieves in Response:
	{"first_name":"James","last_name":"Watts","username":"jwatts3","leader_type":"adult","rank_type":"BearWolforNull",parent_id : 4, "status":"OK"}

/scoutinfo

	Server Recieves:
{"scout_id" : 3}

	Client Recieves in response:
first_name, last_name, rank, and a list of all achievements for his rank

/registerscout

	Server Recieves:
{"first_name" : "James", 
"last_name" : "Watts",
"birth_date" : "12/30/1988",
"pack_number" : "855",
"rank_type" : "Wolf"}

	Client Recieves in Response:

{"status":"OK"}

/addparent_id

	Server Recieves
{"first_name" : "Jameaas2", 
"last_name" : "Watts2",
"birth_date" : "12/30/19882",
"pack_number" : "8552",
"rank_type" : "Wolf2",
"parent_id" : 2,
"scout_id" : 2}

	Client Recieves in Response:

{"status":"OK"}

/scoutstoselect

	Server Recieves: //if leader type is leader uses rank_type and pack_number else uses parent id

{"leader_type" : "leader", 
"rank_type" : "Wolf",
"pack_number" : "8552",
"parent_id" : 2
}

	Client Recieves in Response:
{"scout":[{"first_name":"Jameaas2","last_name":"Watts2","birth_date":"12/30/19882","pack_number":"8552","rank_type":"Wolf","parent_id":2,"leader_id":null,"scout_id":1}],"status":"OK"}

/verifypassword

	Server Recieves:
{"username" : "jwatts2", 
"password" : "mypass"
}
	Client Recieves in response:
{"adult":{"first_name":"James","last_name":"Watts","username":"jwatts2","password":"mypass","pack_number":"undefined","leader_type":"adult","rank_type":"BearWolforNull","phone_number":"1112223333","email":"myemail","adult_id":4},"status":"OK"}

/addrecord

	Server Recieves:

{"rank_type" : "Wolf", 
"date_done" : "12/10/2014",
"req_id" : 50,
"scout_id" : 1
}

	Client Recieves in response:
{"status":"OK"}

/scoutswithnoparent

	Server Recieves: Nothing

	Client Recieves in response:
{"scout":[{"first_name":"Bruce","last_name":"Wayne","birth_date":"12/30/1988","pack_number":"855","rank_type":"Wolf","parent_id":null,"leader_id":null,"scout_id":2}],"status":"OK"}

