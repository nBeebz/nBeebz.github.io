var student;

function removePoints(val){
	student.score -= val;
	if(!debug) $.jStorage.set('pokestud', student);
	updateScore();
}
		
function addPoints(val){
	student.score += val;
	if(!debug) $.jStorage.set('pokestud', student);
	updateScore();
}

function clearStud(){
	if(confirm("Are you sure you want to permanently delete all of your progress?")){
		if(!debug){
			student =  getDefaultStud();
			$.jStorage.set('pokestud', student);	
		}
		else student = getDebugStud();
		equip();
		updateScore();
		unlocked();
		window.location.reload();
	}
}

function unlocked(){
	var id;
	var btnid;
	var i;
	for(i=0; i<student.unlocked.length; i++){
		id = student.unlocked[i];
		btnid = id + 'bb';
		$(id).checkboxradio('enable').checkboxradio('refresh');
		$(btnid).remove();
	}
}

function getDebugStud(){
	var stud = {
		unlocked : [],
		score: 50000,
		gender: {url:'Male Avatar/', id:"male"},
		head: {img:'Head.png', id:'head-0'},
		body: {img:'Body.png',  id:'body-0'},
		hands: {img:'Hands.png', id: 'hands-0'},
		legs: {img:'Legs.png', id: 'legs-0'},
		
		
		courseStatus: {
			java : {
				quiz1 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz2 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 midterm : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz3 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz4 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 fin : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				}
				
			},
			
			math : {
				quiz1 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz2 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 midterm : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz3 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz4 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 fin : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				}
			},
			
			arch : {
				quiz1 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz2 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 midterm : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz3 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 quiz4 : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				},
				 fin : {
					lowest: 0,
					highest: 100,
					average: 50,
					attempts: 10
				}
			}
		}
	};
	
	return stud;

}

function getDefaultStud(){
	var stud = {
		unlocked : [],
		score: 500,
		gender: {url:'Male Avatar/', id:'male'},
		head: {img:'Head.png', id:'head-0'},
		body: {img:'Body.png',  id:'body-0'},
		hands: {img:'Hands.png', id: 'hands-0'},
		legs: {img:'Legs.png', id: 'legs-0'},
		
		
		courseStatus: {
			java : {
				quiz1 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz2 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 midterm : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz3 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz4 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 fin : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				}
			},
			
			math : {
				 quiz1 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz2 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 midterm : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz3 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz4 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 fin : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				}
			},
			
			arch : {
				 quiz1 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz2 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 midterm : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz3 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 quiz4 : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				},
				 fin : {
					lowest: -1,
					highest: -1,
					average: -1,
					attempts: 0
				}
			}	
		}	
	};
	
	return stud;
}