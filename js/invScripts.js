//START OF INVENTORY SCRIPT

$(document).delegate("#inventory", "pageinit", function() {
	equip();
	unlocked();
});
		
function equipHead(src, id){
	var icon = "assets/Icons/head/" + src;
	student.head.img = src;
	student.head.id = id;
	$.jStorage.set('pokestud', student);
	equip();
}
		
function equipBody(src, id){
	var icon = "assets/Icons/body/" + src;
	student.body.img = src;
	student.body.id = id;
	$.jStorage.set('pokestud', student);
	equip();
}

function equipLegs(src, id){
	var icon = "assets/Icons/legs/" + src;
	student.legs.img = src;
	student.legs.id = id;
	$.jStorage.set('pokestud', student);
	equip();
}
		
function equipHands(src, id){
	var icon = "assets/Icons/hands/" + src;
	student.hands.img = src;
	student.hands.id = id;
	$.jStorage.set('pokestud', student);
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



