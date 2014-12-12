var debug = true;
var achieve;

function createAchievements()
{
	achieve = { wolf : [], bear : []};

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

	
	
	
	
	
	achievementB1 = {name: "Ways We Worship", num : 1, requirements : [],numelec:0 };
	
	ra = {name : "a", description : "Complete the Character Connection for Faith", required :true , date : "", dbID : 75};
	rb = {name : "b", description : "Make a list of things you can do this week to practice your religion as you are taught in your home, church, synagogue, mosque, or other religious community. Check them off your list as you complete them.", required :true , date : "", dbID : 76};
	achievementB1.requirements = [ra, rb];
	
	achievementB2 = {name: "Emblems of Faith", num : 2, requirements : [],numelec:0 };
	ra = {name : "a", description : "Earn the religious emblem of your faith.", required :true , date : "", dbID : 77};
	achievementB2.requirements = [ra];
	
	achievementB3 = {name: "What Makes America Special", num : 3, requirements : [],numelec:2 };
	ra = {name : "a", description : "Write or tell what makes America special to you.", required :true , date : "", dbID : 78};
	rb = {name : "b", description : "With the help of your family or den leader, find out about two famous Americans. Tell the things they did or are doing to improve our way of life.", required :false , date : "", dbID : 79};
	rc = {name : "c", description : "Find out something about the old homes near where you live. Go and see two of them.", required :false , date : "", dbID : 80};
	rd = {name : "d", description : "Find out where places of historical interest are located in or near your town or city. Go and visit one of them with your family or den.", required :false , date : "", dbID : 81};
	re = {name : "e", description : "Choose a state; it can be your favorite one or your home state. Name its state bird, tree, and flower. Describe its flag. Give the date it was admitted to the Union.", required :false , date : "", dbID : 82};
	rf = {name : "f", description : "Be a member of the color guard in a flag ceremony for your den or pack.", required :false , date : "", dbID : 83};
	rg = {name : "g", description : "Display the U.S. flag in your home or fly it on three national holidays.", required :false , date : "", dbID : 84};
	rh = {name : "h", description : "Learn how to raise and lower a U.S. flag properly for an outdoor ceremony.", required :false , date : "", dbID : 85};
	ri = {name : "i", description : "Participate in an outdoor flag ceremony.", required :false , date : "", dbID : 86};
	rj = {name : "j", description : "Complete the Character Connection for Citizenship.", required :true , date : "", dbID : 87};
	achievementB3.requirements = [ra, rb, rc, rd, re, rf, rg, rh, ri, rj];
	
	achievementB4 = {name: "Tall Tales", num : 4, requirements : [],numelec:0 };
	ra = {name : "a", description : "Tell in your own words what folklore is. List some folklore stories, folk songs, or historical legends from your own state or part of the country. Play the Folklore Match Game on page 48.", required :true , date : "", dbID : 88};
	rb = {name : "b", description : "Name at least five stories about American folklore. Point out on a United States map where they happened.", required :true , date : "", dbID : 89};
	rc = {name : "c", description : "Read two folklore stories and tell your favorite one to your den.", required :true , date : "", dbID : 90};
	achievementB4.requirements = [ra,rb,rc];
	
	achievementB5 = {name: "Sharing Your World With Wildlife", num : 5, requirements : [],numelec:4 };
	ra = {name : "a", description : "Choose a bird or animal that you like and find out how it lives. Make a poster showing what you have learned.", required :false , date : "", dbID : 91};
	rb = {name : "b", description : "Build or make a bird feeder or birdhouse and hang it in a place where birds can visit safely.", required :false , date : "", dbID : 92};
	rc = {name : "c", description : "Explain what a wildlife conservation officer does.", required :false , date : "", dbID : 93};
	rd = {name : "d", description : "Visit one of the following: Zoo, Nature center, Aviary, Wildlife refuge, Game preserve.", required :false , date : "", dbID : 94};
	re = {name : "e", description : "Name one animal that has become extinct in the last 100 years. Tell why animals become extinct. Name one animal that is on the endangered species list.", required :false , date : "", dbID : 95};
	achievementB5.requirements = [ra, rb, rc, rd, re];
	
	achievementB6 = {name: "Take Care of Your Planet", num : 6, requirements : [],numelec:3 };
	ra = {name : "a", description : "Save 5 pounds of glass or aluminum, or 1 month of daily newspapers. Turn them in at a recycling center or use your community's recycling service.", required :false , date : "", dbID : 96};
	rb = {name : "b", description : "Plant a tree in your yard, or on the grounds of the group that operates your Cub Scout pack, or in a park or other public place. Be sure to get permission first.", required :false , date : "", dbID : 97};
	rc = {name : "c", description : "Call city or county officials or your trash hauling company and find out what happens to your trash after it is hauled away.", required :false , date : "", dbID : 98};
	rd = {name : "d", description : "List all the ways water is used in your home. Search for dripping faucets or other ways water might be wasted. With an adult, repair or correct those problems.", required :false , date : "", dbID : 99};
	re = {name : "e", description : "Discuss with an adult in your family the kinds of energy your family uses.", required :false , date : "", dbID : 100};
	rf = {name : "f", description : "Find out more about your family's use of electricity.", required :false , date : "", dbID : 101};
	rg = {name : "g", description : "Take part in a den or pack neighborhood clean-up project.", required :false , date : "", dbID : 102};
	achievementB6.requirements = [ra, rb, rc, rd, re, rf, rg];
	
	achievementB7 = {name: "Law Enforcement is a Big Job", num : 7, requirements : [],numelec:0 };
	ra = {name : "a", description : "Practice one way police gather evidence: by taking fingerprints, or taking shoeprints, or taking tire track casts.", required :true , date : "", dbID : 103};
	rb = {name : "b", description : "Visit your local sheriff's office or police station or talk with a law enforcement officer visiting your den or pack to discuss crime prevention.", required :true , date : "", dbID : 104};
	rc = {name : "c", description : "Help with crime prevention for your home.", required :true , date : "", dbID : 105};
	rd = {name : "d", description : "Be sure you know where to get help in your neighborhood.", required :true , date : "", dbID : 106};
	re = {name : "e", description : "Learn the phone numbers to use in an emergency and post them by each phone in your home.", required :true , date : "", dbID : 107};
	rf = {name : "f", description : "Know what you can do to help law enforcement.", required :true , date : "", dbID : 108};
	achievementB7.requirements = [ra, rb, rc, rd, re, rf];
	
	achievementB8 = {name: "The Past is Exciting and Important", num : 8, requirements : [],numelec:2 };
	ra = {name : "a", description : "Visit your library or newspaper office. Ask to see back issues of newspapers or an almanac.", required :false , date : "", dbID : 109};
	rb = {name : "b", description : "Find someone who was a Cub Scout a long time ago. Talk with him about what Cub Scouting was like then.", required :false , date : "", dbID : 110};
	rc = {name : "c", description : "Start or add to an existing den or pack scrapbook.", required :false , date : "", dbID : 111};
	rd = {name : "d", description : "Trace your family back through your grandparents or great-grandparents; or, talk to a grandparent about what it was like when he or she was younger.", required :false , date : "", dbID : 112};
	re = {name : "e", description : "Find out some history about your community.", required :false , date : "", dbID : 113};
	rf = {name : "f", description : "Start your own history: keep a journal for 2 weeks.", required :false , date : "", dbID : 114};
	rg = {name : "g", description : "Complete the Character Connection for Respect.", required :true , date : "", dbID : 115};
	achievementB8.requirements = [ra, rb, rc, rd, re, rf, rg];
	
	achievementB9 = {name: "What's Cooking", num : 9, requirements : [],numelec:4 };
	ra = {name : "a", description : "With an adult, bake cookies.", required :false , date : "", dbID : 116};
	rb = {name : "b", description : "With an adult, make snacks for the next den meeting.", required :false , date : "", dbID : 117};
	rc = {name : "c", description : "With an adult, prepare one part of your breakfast, one part of your lunch, and one part of your supper.", required :false , date : "", dbID : 118};
	rd = {name : "d", description : "Make a list of the junk foods you eat. Discuss junk food with a parent or teacher.", required :false , date : "", dbID : 119};
	re = {name : "e", description : "Make some trail food for a hike.", required :false , date : "", dbID : 120};
	rf = {name : "f", description : "With an adult, make a dessert for your family.", required :false , date : "", dbID : 121};
	rg = {name : "g", description : "With an adult, cook something outdoors.", required :false , date : "", dbID : 122};
	achievementB9.requirements = [ra, rb, rc, rd, re, rf, rg];
	
	achievementB10 = {name: "Family Fun", num :10 , requirements : [],numelec:0 };
	ra = {name : "a", description : "Go on a day trip or evening out with members of your family.", required :true , date : "", dbID : 123};
	rb = {name : "b", description : "Have a family fun night at home.", required :true , date : "", dbID : 124};
	achievementB10.requirements = [ra, rb];
	
	achievementB11 = {name: "Be Ready!", num :11 , requirements : [],numelec:1 };
	ra = {name : "a", description : "Tell what to do in case of an accident in the home. A family member needs help. Someone's clothes catch on fire.", required :true , date : "", dbID : 125};
	rb = {name : "b", description : "Tell what to do in case of a water accident.", required :true , date : "", dbID : 126};
	rc = {name : "c", description : "Tell what to do in case of a school bus accident.", required :true , date : "", dbID : 127};
	rd = {name : "d", description : "Tell what to do in case of a car accident.", required :true , date : "", dbID : 128};
	re = {name : "e", description : "With your family, plan escape routes from your home and have a practice drill.", required :true , date : "", dbID : 129};
	rf = {name : "f", description : "Have a health checkup by a physician.", required :false , date : "", dbID : 130};
	rg = {name : "g", description : "Complete the Character Connection for Courage.", required :true , date : "", dbID : 131};
	achievementB11.requirements = [ra, rb, rc, rd, re, rf, rg];
	
	achievementB12 = {name: "Family Outdoor Adventure", num :12 , requirements : [],numelec:3 };
	ra = {name : "a", description : "Go camping with your family.", required :false , date : "", dbID : 132};
	rb = {name : "b", description : "Go on a hike with your family.", required :false , date : "", dbID : 133};
	rc = {name : "c", description : "Have a picnic with your family.", required :false , date : "", dbID : 134};
	rd = {name : "d", description : "Attend an outdoor event with your family.", required :false , date : "", dbID : 135};
	re = {name : "e", description : "Plan your outdoor family day.", required :false , date : "", dbID : 136};
	achievementB12.requirements = [ra, rb, rc, rd, re];
	
	achievementB13 = {name: "Saving Well, Spending Well", num :13 , requirements : [],numelec:4 };
	ra = {name : "a", description : "Go grocery shopping with a parent or other adult member of your family.", required :false , date : "", dbID : 137};
	rb = {name : "b", description : "Set up a savings account.", required :false , date : "", dbID : 138};
	rc = {name : "c", description : "Keep a record of how you spend money for 2 weeks.", required :false , date : "", dbID : 139};
	rd = {name : "d", description : "Pretend you are shopping for a car for your family.", required :false , date : "", dbID : 140};
	re = {name : "e", description : "Discuss family finances with a parent or guardian.", required :false , date : "", dbID : 141};
	rf = {name : "f", description : "Play a board game with your family that involves the use of play money.", required :false , date : "", dbID : 142};
	rg = {name : "g", description : "With an adult, figure out how much it costs for each person in your home to eat one meal.", required :false , date : "", dbID : 143};
	achievementB13.requirements = [ra, rb, rc, rd, re, rf, rg];
	
	achievementB14 = {name: "Ride right", num :14 , requirements : [],numelec: 3};
	ra = {name : "a", description : "Know the rules for bike safety. If your town requires a bicycle license, be sure to get one.", required :true , date : "", dbID : 144};
	rb = {name : "b", description : "Learn to ride a bike, if you haven't by now. Show that you can follow a winding course for 60 feet doing sharp left and right turns, a U-turn, and an emergency stop.", required :false , date : "", dbID : 145};
	rc = {name : "c", description : "Keep your bike in good shape. Identify the parts of a bike that should be checked often.", required :false , date : "", dbID : 146};
	rd = {name : "d", description : "Change a tire on a bicycle.", required :false , date : "", dbID : 147};
	re = {name : "e", description : "Protect your bike from theft. Use a bicycle lock.", required :false , date : "", dbID : 148};
	rf = {name : "f", description : "Ride a bike for 1 mile without rest. Be sure to obey all traffic rules.", required :false , date : "", dbID : 149};
	rg = {name : "g", description : "Plan and take a family bike hike.", required :false , date : "", dbID : 150};
	achievementB14.requirements = [ra, rb, rc, rd, re, rf, rg];
	
	achievementB15 = {name: "Games, Games, Games!", num :15 , requirements : [],numelec: 2};
	ra = {name : "a", description : "Set up the equipment and play any two of these outdoor games with your family or friends. (Backyard golf, Badminton, Croquet, Sidewalk shuffleboard, Kickball, Softball, Tetherball, Horseshoes, Volleyball)", required :false , date : "", dbID : 151};
	rb = {name : "b", description : "Play two organized games with your den.", required :false , date : "", dbID : 152};
	rc = {name : "c", description : "Select a game that your den has never played. Explain the rules. Tell them how to play it, and then play it with them.", required :false , date : "", dbID : 153};
	achievementB15.requirements = [ra, rb, rc];
	
	achievementB16 = {name: "Building Muscles", num :16 , requirements : [],numelec: 0};
	ra = {name : "a", description : "Do physical fitness stretching exercises. Then do curl-ups, push-ups, the standing long jump, and the softball throw.", required :true , date : "", dbID : 154};
	rb = {name : "b", description : "With a friend about your size, compete in at least six different two-person contests. (Many examples in book.)", required :true , date : "", dbID : 155};
	rc = {name : "c", description : "Compete with your den or pack in the crab relay, gorilla relay, 30-yard dash, and kangaroo relay.", required :true , date : "", dbID : 156};
	achievementB16.requirements = [ra, rb, rc];
	
	achievementB17 = {name: "Information Please", num :17 , requirements : [],numelec: 3};
	ra = {name : "a", description : "With an adult in your family, choose a TV show. Watch it together.", required :true , date : "", dbID : 157};
	rb = {name : "b", description : "Play a game of charades at your den meeting or with your family at home.", required :false , date : "", dbID : 158};
	rc = {name : "c", description : "Visit a newspaper office, or a TV or radio station and talk to a news reporter.", required :false , date : "", dbID : 159};
	rd = {name : "d", description : "Use a computer to get information.  Write, spell-check, and print out a report on what you learned.", required :false , date : "", dbID : 160};
	re = {name : "e", description : "Write a letter to a company that makes something you use.  Use e-mail or the U.S. Postal Service.", required :false , date : "", dbID : 161};
	rf = {name : "f", description : "Talk with a parent or other family member about how getting and giving facts fits into his or her job.", required :false , date : "", dbID : 162};
	achievementB17.requirements = [ra, rb, rc, rd, re, rf];
	
	achievementB18 = {name: "Jot it Down", num :18 , requirements : [],numelec: 4 };
	ra = {name : "a", description : "Make a list of the things you want to do today. Check them off when you have done them.", required :false , date : "", dbID : 163};
	rb = {name : "b", description : "Write two letters to relatives or friends.", required :false , date : "", dbID : 164};
	rc = {name : "c", description : "Keep a daily record of your activities for 2 weeks.", required :false , date : "", dbID : 165};
	rd = {name : "d", description : "Write an invitation to someone.", required :false , date : "", dbID : 166};
	re = {name : "e", description : "Write a thank-you note.", required :false , date : "", dbID : 167};
	rf = {name : "f", description : "Write a story about something you have done with your family.", required :false , date : "", dbID : 168};
	rg = {name : "g", description : "Write about the activities of your den.", required :false , date : "", dbID : 169};
	rh = {name : "h", description : "Complete the Character Connection for Honesty.", required :true , date : "", dbID : 170};
	achievementB18.requirements = [ra, rb, rc, rd, re, rf, rg, rh];
	
	achievementB19 = {name: "Shaving and Chips", num :19 , requirements : [],numelec:0 };
	ra = {name : "a", description : "Know the safety rules for handling a knife.", required :true , date : "", dbID : 171};
	rb = {name : "b", description : "Show that you know how to take care of and use a pocketknife.", required :true , date : "", dbID : 172};
	rc = {name : "c", description : "Make a carving with a pocketknife. Work with your den leader or other adult when doing this.", required :true , date : "", dbID : 173};
	rd = {name : "d", description : "Earn the Whittling Chip card.", required :true , date : "", dbID : 174};
	achievementB19.requirements = [ra, rb, rc, rd];
	
	achievementB20 = {name: "Sawdust and Nails", num :20 , requirements : [],numelec: 0};
	ra = {name : "a", description : "Show how to use and take care of four of these tools. (Hammer, Hand saw, Hand drill, C-clamp, Wood plane, Pliers, Crescent wrench, Screwdriver, Bench vise, Coping saw, Drill bit)", required :true , date : "", dbID : 175};
	rb = {name : "b", description : "Build your own tool box.", required :true , date : "", dbID : 176};
	rc = {name : "c", description : "Use at least two tools listed in requirement (a) to fix something.", required :true , date : "", dbID : 177};
	achievementB20.requirements = [ra, rb, rc];
	
	achievementB21 = {name: "Build a Model", num :21 , requirements : [],numelec: 2};
	ra = {name : "a", description : "Build a model from a kit.", required :false , date : "", dbID : 178};
	rb = {name : "b", description : "Build a display for one of your models.", required :false , date : "", dbID : 179};
	rc = {name : "c", description : "Pretend you are planning to change the furniture layout in one of the rooms in your home.", required :false , date : "", dbID : 180};
	rd = {name : "d", description : "Make a model of a mountain, a meadow, a canyon, or a river.", required :false , date : "", dbID : 181};
	re = {name : "e", description : "Go and see a model of a shopping center or new building that is on display somewhere.", required :false , date : "", dbID : 182};
	rf = {name : "f", description : "Make a model of a rocket, boat, car, or plane.", required :false , date : "", dbID : 183};
	rg = {name : "g", description : "Complete the Character Connection for Resourcefulness.", required :true , date : "", dbID : 184};
	achievementB21.requirements = [ra, rb, rc, rd, re, rf, rg];
	
	achievementB22 = {name: "Tying it All Up", num :22 , requirements : [],numelec: 5};
	ra = {name : "a", description : "Whip the ends of a rope.", required :false , date : "", dbID : 185};
	rb = {name : "b", description : "Tie a square knot, bowline, sheet bend, two half hitches, and slip knot.  Tell how each knot is used.", required :false , date : "", dbID : 186};
	rc = {name : "c", description : "Learn how to keep a rope from tangling.", required :false , date : "", dbID : 187};
	rd = {name : "d", description : "Coil a rope. Throw it, hitting a 2-foot square marker 20 feet away.", required :false , date : "", dbID : 188};
	re = {name : "e", description : "Learn a magic rope trick.", required :false , date : "", dbID : 189};
	rf = {name : "f", description : "Make your own rope.", required :false , date : "", dbID : 190};
	achievementB22.requirements = [ra, rb, rc, rd, re, rf];
	
	achievementB23 = {name: "Sports, Sports, Sports", num :23 , requirements : [],numelec: 0};
	ra = {name : "a", description : "Learn the rules of and how to play three team sports.", required :true , date : "", dbID : 191};
	rb = {name : "b", description : "Learn the rules of and how to play two sports in which only one person is on each side.", required :true , date : "", dbID : 192};
	rc = {name : "c", description : "Take part in one team and one individual sport.", required :true , date : "", dbID : 193};
	rd = {name : "d", description : "Watch a sport on TV with a parent or some other adult member of your family.", required :true , date : "", dbID : 194};
	re = {name : "e", description : "Attend a high school, college, or professional sporting event with your family or your den.", required :true , date : "", dbID : 195};
	achievementB23.requirements = [ra, rb, rc, rd, re];
	
	achievementB24 = {name: "Be a Leader", num :24 , requirements : [],numelec: 2};
	ra = {name : "a", description : "Help a boy join Cub Scouting, or help a new Cub Scout through the Bobcat trail.", required :false , date : "", dbID : 196};
	rb = {name : "b", description : "Serve as a denner or assistant denner.", required :false , date : "", dbID : 197};
	rc = {name : "c", description : "Plan and conduct a den activity with the approval of your den leader.", required :false , date : "", dbID : 198};
	rd = {name : "d", description : "Tell two people they have done a good job.", required :false , date : "", dbID : 199};
	re = {name : "e", description : "Leadership means choosing a way even when not everybody likes your choice.", required :false , date : "", dbID : 200};
	rf = {name : "f", description : "Complete the Character Connection for Compassion.", required :true, date : "", dbID : 201};
	achievementB24.requirements = [ra, rb, rc, rd, re, rf];
	
	array_BearAchievements1=[achievementB1, achievementB2];
	array_BearAchievements2=[achievementB3, achievementB4,achievementB5,achievementB6,achievementB7];
	array_BearAchievements3=[achievementB8,achievementB9,achievementB10,achievementB11,achievementB12,achievementB13];
	array_BearAchievements4=[achievementB14,achievementB15,achievementB16,achievementB17,achievementB18,achievementB19,achievementB20,achievementB21,achievementB22,achievementB23,achievementB24];
	CategoryB1 = {Name: "GOD",     achievements: array_BearAchievements1,numelec: 1};
	CategoryB2 = {Name: "COUNTRY", achievements: array_BearAchievements2,numelec: 3};
	CategoryB3 = {Name: "FAMILY",  achievements: array_BearAchievements3,numelec: 4};
	CategoryB4 = {Name: "SELF",    achievements: array_BearAchievements4,numelec: 4};
	
	categories=[CategoryB1,CategoryB2,CategoryB3,CategoryB4];
	
	achieve.bear=categories;
	
	
	
	
	
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
			console.log("Checking insertid: " + rows.insertId);
			//console.log(rows);
			cb({status: "OK", scout_id: rows.insertId});
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
		console.log("I am in noparetns");
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
					returnme = {first_name : firstName, last_name : lastName, username : username, pack_number : packNumber, leader_type : leaderType, rank_type : rankType, adult_id : rows.insertId, status : "OK"}
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
		rankType, parentID, scoutID, leaderID, connection, cb)
{
	console.log(firstName + " " + lastName + " " + birthDate + " " + packNumber + " " + rankType);
	console.log(parentID + " " + scoutID + " " + leaderID);
	if(leaderID == null)
		leaderID = "NULL";
	else
		leaderID = "'" + leaderID + "'";
	if(parentID == null)
		parentID = "NULL";
	else
		parentID = "'" + parentID + "'";
	var strQuery = "UPDATE scout SET "+
	"first_name= '"     + firstName  +
	"', last_name='"    + lastName   +
	"', birth_date='"   + birthDate  + 
	"', pack_number='"  + packNumber + 
	"', rank_type='"    + rankType  +
	"', parent_id="    + parentID   +
	", leader_id="    + leaderID  + 
	" WHERE scout_id="+ scoutID;
	console.log(strQuery);
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
	var strQuery = "INSERT INTO record(record_rank_type, date_done, requirement_id, scout_id) VALUES('"+
	recordRankType            +"', '"+  
	dateDone                  +"', '"+
	requirementID             +"', '"+
	scoutID                   +"')";

	connection.query( strQuery, function(err, rows)
			{if(err) {
				throw err;
			}else{
				
				cb({status : "OK"});
			}
			});
}

function getleader(rank, packNum, connection, cb)
{
	var strQuery = "SELECT adult_id FROM adult WHERE rank_type = '" + rank + "' AND pack_number = '" + packNum + "'";
	connection.query(strQuery, function(err, rows)
	{
		if(err) {
			throw err;
		}
		else {
			var ans;
			console.log(rows);
			if(rows[0] == undefined)
			{
				ans = {leaders : [], status: "No Leader Exists"};
			}
			else
			{
				ans = {leaders : rows, status: "OK"};
			}
			cb(ans);
		}
	});
}

function selectScout(id, connection, achievements, cb)
{
	console.log(id);
	var strQuery = "SELECT * FROM scout WHERE scout_id = " + id;
	var strQuery2 = "SELECT * FROM record WHERE scout_id = " + id;
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

				console.log(r_result);
				//console.log(s_result[0].first_name);
				//console.log(r_result[0].record_rank_type);

				//console.log(r_result);
				var rank_id = "";
				if(s_result[0].rank_type === 'Bear')
				{
					rank_id = 2;
				}
				else if(s_result[0].rank_type === 'Wolf')
				{
					rank_id = 1;
				}
				var achievements2 = {};
				
				if(r_result === undefined)
				{
					if(rank_id == 1)
					{
						achievements2 = achievements.wolf;
					}
					else if(rank_id == 2)
					{
						achievements2 = achievements.bear;
					}
				}
				else if(rank_id == 1)
				{
					//GET WOLF RECORD DATES
					for(var i = 0; i < r_result.length; i++)
					{
						
						if(r_result[i].requirement_id < 13)
						{
							achievements.wolf[0].requirements[r_result[i].requirement_id-1].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 20)
						{
							achievements.wolf[1].requirements[r_result[i].requirement_id-14].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 23)
						{
							achievements.wolf[2].requirements[r_result[i].requirement_id-21].date = r_result[i].date_done;
						
						}
						else if(r_result[i].requirement_id < 29)
						{
							achievements.wolf[3].requirements[r_result[i].requirement_id-24].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 34)
						{
							achievements.wolf[4].requirements[r_result[i].requirement_id-30].date = r_result[i].date_done;
						
						}
						else if(r_result[i].requirement_id < 37)
						{
							achievements.wolf[5].requirements[r_result[i].requirement_id-35].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 43)
						{
							achievements.wolf[6].requirements[r_result[i].requirement_id-38].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 48)
						{
							achievements.wolf[7].requirements[r_result[i].requirement_id-44].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 53)
						{
							achievements.wolf[8].requirements[r_result[i].requirement_id-49].date = r_result[i].date_done;
						}
						else if(r_result[i].requirement_id < 60)
						{
							achievements.wolf[9].requirements[r_result[i].requirement_id-54].date = r_result[i].date_done;
						
						}
						else if(r_result[i].requirement_id < 64)
						{
							achievements.wolf[10].requirements[r_result[i].requirement_id-61].date = r_result[i].date_done;
						
						}
						else if(r_result[i].requirement_id < 75)
						{
							achievements.wolf[11].requirements[r_result[i].requirement_id-65].date = r_result[i].date_done;
						
						}

					}

					achievements2 = achievements.wolf;
				}
				else if (rank_id == 2)
				{
					//GET BEAR RECORD DATES
					for(var i = 0; i < r_result.length; i++)
					{
						if(r_result[i].requirement_id < 75)
						{
						}
						else if(r_result[i].requirement_id < 77)
						{
							achievements.bear[0].achievements[0].requirements[r_result[i].requirement_id-75].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 78)
						{
							achievements.bear[0].achievements[1].requirements[r_result[i].requirement_id-77].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 88)
						{
							achievements.bear[1].achievements[0].requirements[r_result[i].requirement_id-78].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 91)
						{
							achievements.bear[1].achievements[1].requirements[r_result[i].requirement_id-88].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 96)
						{
							achievements.bear[1].achievements[2].requirements[r_result[i].requirement_id-91].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 103)
						{
							achievements.bear[1].achievements[3].requirements[r_result[i].requirement_id-96].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 109)
						{
							achievements.bear[1].achievements[4].requirements[r_result[i].requirement_id-103].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 116)
						{
							achievements.bear[2].achievements[0].requirements[r_result[i].requirement_id-109].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 123)
						{
							achievements.bear[2].achievements[1].requirements[r_result[i].requirement_id-116].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 125)
						{
							achievements.bear[2].achievements[2].requirements[r_result[i].requirement_id-123].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 132)
						{
							achievements.bear[2].achievements[3].requirements[r_result[i].requirement_id-125].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 137)
						{
							achievements.bear[2].achievements[4].requirements[r_result[i].requirement_id-132].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 144)
						{
							achievements.bear[2].achievements[5].requirements[r_result[i].requirement_id-137].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 151)
						{
							achievements.bear[3].achievements[0].requirements[r_result[i].requirement_id-144].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 154)
						{
							achievements.bear[3].achievements[1].requirements[r_result[i].requirement_id-151].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 157)
						{
							achievements.bear[3].achievements[2].requirements[r_result[i].requirement_id-154].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 163)
						{
							achievements.bear[3].achievements[3].requirements[r_result[i].requirement_id-157].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 171)
						{
							achievements.bear[3].achievements[4].requirements[r_result[i].requirement_id-163].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 175)
						{
							achievements.bear[3].achievements[5].requirements[r_result[i].requirement_id-171].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 178)
						{
							achievements.bear[3].achievements[6].requirements[r_result[i].requirement_id-175].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 185)
						{
							achievements.bear[3].achievements[7].requirements[r_result[i].requirement_id-178].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 191)
						{
							achievements.bear[3].achievements[8].requirements[r_result[i].requirement_id-185].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 197)
						{
							achievements.bear[3].achievements[9].requirements[r_result[i].requirement_id-191].date = r_result[i].date_done;

						}
						else if(r_result[i].requirement_id < 202)
						{
							achievements.bear[3].achievements[10].requirements[r_result[i].requirement_id-197].date = r_result[i].date_done;

						}

					}

					achievements2 = achievements.bear;
		
				}
				ans = {first_name : s_result[0]. first_name, last_name : s_result[0].last_name, rank : s_result[0].rank_type, ach : achievements2, status : "OK"};
				
							//console.log(ans.ach.wolf[0].requirements[0]);
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
	user : "scoutTest",
	password: "scoutTest",
	multipleStatements: true
});

console.log("HELLO WORLD");
//connection.connect();
connection.query("USE scoutTest");

//function insertAdult(firstName, lastName, username, password, packNumber, 
	//	leaderType, rankType, phoneNumber, email, connection)

//set up webserver
var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res)
{
	if(req.method == 'OPTIONS'){
	
	res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', false);
    res.setHeader('Access-Control-Max-Age', '86400');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
		res.writeHead(200);
		res.end();
	}
	else
	{
	 res.setHeader("Access-Control-Allow-Origin", "*");
	 res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//res.header('Access-Control-Allow-Origin', req.headers.origin);
    //res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    //res.header('Access-Control-Allow-Credentials', false);
    //res.header('Access-Control-Max-Age', '86400');
    //res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
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

			console.log(chunk.toString());
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
			
			console.log(info.leader_id);
			res.writeHead(200);
			updateScout(info.first_name, info.last_name, info.birth_date, info.pack_number, info.rank_type, info.parent_id, info.scout_id, info.leader_id, connection, function(sendjson){
				console.log("PRINTING UPDATE SCOUT RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
			});
			
		});
	}
	else if (uri == "/updatescoutleader")
	{
		var info;
		var ans2;
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			console.log(info);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			updateScout(info.first_name, info.last_name, info.birth_date, info.pack_number, info.rank_type, info.parent_id, info.scout_id, info.leader_id, connection, function(sendjson){
				console.log("PRINTING UPDATE SCOUT RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
			});
			
		});
	}
	else if(uri == "/getleader")
	{
		var info;
		var ans2;
		console.log("Got here");
		a = achieve;
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			getleader(info.rank_type, info.pack_number, connection, function(sendjson){
				console.log("PRINTING GET LEADER RESULTS");
				console.log(sendjson);

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
		console.log("in function for no parent");
		var info;
		var ans2;
		a = achieve;
			//console.log(chunk.toString());
			//console.log("CHECK: " + info.id);
			
			res.writeHead(200);
			console.log("in function for no parent");

			selectBatman(connection, function(sendjson){
				console.log("PRINTING SCOUTLIST RESULTS");
				console.log(sendjson.status);

				res.end(JSON.stringify(sendjson));
						
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
		createAchievements();
		a = achieve;
		console.log(achieve.bear[0].achievements[0].requirements[0]);
		req.on('data' , function(chunk){
			//console.log(chunk.toString());
			info = JSON.parse(chunk);
			//console.log("CHECK: " + info.id);
			
			//console.log(info);
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

	}
});
server.listen(8084);

//console.log("AFTER SCOUT");

//connection.end(function(err){
//});
