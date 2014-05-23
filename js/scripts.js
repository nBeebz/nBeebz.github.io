debug = false;

$(document).ready(function(){
	if(!$.jStorage.storageAvailable()){
		alert("Local storage not availiable! Entering debug mode");
		debug = true
	}

	if(debug) student = getDebugStud();
	else student = $.jStorage.get('pokestud', getDefaultStud());
	
	
	$('#clouds').pan({fps: 30, speed: 0.5, dir: 'right'}); 
	$('#'+student.gender.id).attr('checked', true);
	equip();
	updateScore();
});

$(document).delegate("#home", "pageinit", function() {
	if(!topGun("java")) $('#chien').hide();
	if(!topGun("math")) $('#steve').hide();
	if(!topGun("arch")) $('#aman').hide();
});

function updateGender(){
	student.gender.url = $("#sex input[type='radio']:checked").attr('value');
	student.gender.id =  $("#sex input[type='radio']:checked").attr('id');
	if(!debug) $.jStorage.set('pokestud', student);
	equip();
}

function updateScore(){
	$('div.score').html(student.score);
}

function equip(){
	$('#'+student.gender.id).attr('checked', true);
	var sex = 'assets/' + student.gender.url;
	var icon = 'assets/Icons/';
	var hat =  'head/' + student.head.img;
	var shirt = 'body/' + student.body.img;
	var pants = 'legs/' + student.legs.img;
	var acc = 'hands/' + student.hands.img;
	
	$('img.avatar_head').attr('src', sex+hat);
	$('#headslot').attr('src', icon+hat);
	$('#'+student.head.id).attr('checked', true);
	
	$('img.avatar_body').attr('src', sex+shirt);
	$('#bodyslot').attr('src', icon+shirt);
	$('#'+student.body.id).attr('checked', true);
	
	$('img.avatar_legs').attr('src', sex+pants);
	$('#legslot').attr('src', icon+pants);
	$('#'+student.legs.id).attr('checked', true);
	
	$('img.avatar_hands').attr('src', sex+acc);
	$('#handslot').attr('src', icon+acc);
	$('#'+student.hands.id).attr('checked', true);
}

