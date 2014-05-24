//START OF INVENTORY SCRIPT

$(document).delegate("#inventory", "pageinit", function() {
	equip();
	unlocked();
});
		
function equipHead(src, id){
	var icon = "assets/icons/head/" + src;
	student.head.img = src;
	student.head.id = id;
	if(!debug) $.jStorage.set('pokestud', student);
	equip();
}
		
function equipBody(src, id){
	var icon = "assets/icons/body/" + src;
	student.body.img = src;
	student.body.id = id;
	if(!debug) $.jStorage.set('pokestud', student);
	equip();
}

function equipLegs(src, id){
	var icon = "assets/icons/legs/" + src;
	student.legs.img = src;
	student.legs.id = id;
	if(!debug) $.jStorage.set('pokestud', student);
	equip();
}
		
function equipHands(src, id){
	var icon = "assets/icons/hands/" + src;
	student.hands.img = src;
	student.hands.id = id;
	if(!debug) $.jStorage.set('pokestud', student);
	equip();
}

function unlock(id, pts){
	if(confirm("Are you sure you'd like to buy this item?")){
		if(student.score >= pts){
			removePoints(pts);
			student.unlocked.push(id);
			if(!debug) $.jStorage.set('pokestud', student);
			unlocked();
		}
		else alert("You dont have enough points!");
	}
}



