$(document).ready(function(){ 
	$("#herolist").html(getHeroList());
	$("#herolist:visible").listview( "refresh" );
	$('.hero').click(function() {
		var i = $(this).index();
		var	hero = heroes[i];
		var src = '"heroes/hero ('+i+').png"';
		var str = '<tr><td><img src='+src+'/></td><td><h1>'+hero.name+'</h1></td></tr>';
		$("#hero-label").html(str);
		$("#skill-label").html(hero.ulti);
	});
});



function getHeroList(){
	var str = '';
	var src, name;
	for(var i=0; i<heroes.length; i++){
		name = heroes[i].name;
		src = '"heroes/hero ('+i+').png"';
		str += '<li class="hero"><a href="#hero"><img src='+src+'/><div>'+name+'</div></a></li>';
	}
	return str;
}


var heroes = [
		{	
			name:'Abaddon', 
			ulti:'Borrowed Time: The next 3 drinks inflicted against you instead fill your cup'
		},
		{
			name:'Alchemist', 
			ulti:'Chemical Rage: Drinks you inflict count for double, lasts for your next 3 drinks'
		},
		{
			name:'Ancient Apparition',
			ulti:'Ice Blast: For each person sitting between you and target enemy (longest path), place an ice cube in their drink. If the amount of ice is larger than what is left in their cup, they must finish their drink.'
		},
		{
			name:'Anti-Mage',
			ulti:'Mana Void: Target enemy takes 3 drinks, if they die their neighbours must also take 3 drinks.'
		},

		{
			name:'Axe', 
			ulti:'Culling Blade: Target enemy takes 4 drinks. If this would kill them, this skill ignores any affects that would otherwise block it and does not go on cooldown.'
		},
		{
			name:'Bane', 
			ulti:'Fiends Grip: Stare an enemy in the eyes and repeatedly whisper "bane of your existence". They must waterfall for as long as you do so (up to 4 seconds).'
		},
		{
			name:'Batrider', 
			ulti:'Flaming Lasso: Target enemy takes 3 drinks and you may drag them to a new seat and sit next to them.'
		},
		{
			name:'Beastmaster', 
			ulti:'Primal Roar: Yell a single word at target enemy. They take 5 drinks, and all enemies sitting near them must edge away awkwardly.'
		},
		{
			name:'Bloodseeker', 
			ulti:'Rupture: Target enemy must stay completely still for 10s, taking a drink for any movement they make'
		},
		{
			name:'Bounty Hunter', 
			ulti:'Track: When target enemy dies, all of the enemy team drinks. No cooldown, new target cannot be chosen until tracked target dies.'
		},
		{
			name:'Brewmaster', 
			ulti:'Primal Split: 3 enemies pour 2 drinks from theirs into a single cup, you and target player split the cup.'
		},
		{
			name:'Bristleback',
			ulti:'Warpath: The next 3 drinks you take increases the drinks you inflict by 1 (to a max of 4). The 4th drink ends the affect.'
		},
		{
			name:'Centaur Warrunner', 
			ulti:'Stampede: The next drink inflicted by each person on your team causes the target to take an extra drink.'
		},
		{
			name:'Chaos Knight', 
			ulti:'Phantasm: Split your cup into thirds. Any drinks you inflict, or are inflicted on you, instead cause the target to waterfall one of the thirds. The target who finishes the final third must take the penalty shot.'
		},
		{	
			name:'Chen',
			ulti:'Hand of God: Pour 3 drinks worth into the cups of every ally (including yourself).'
		},
		{	
			name:'Clinkz', 
			ulti:'Death Pact: Pour 3 drinks worth into your cup. As long as you have this extra amount, drinks you inflict count for double.'
		},
		{	
			name:'Clockwerk', 
			ulti:'Hookshot: Target player takes 3 drinks and you sit next to them. '
		},
		{	
			name:'Crystal Maiden', 
			ulti:'Freezing Field: Your 3 closest enemies must take 2 drinks, and their next drink inflicts 1 less'
		},
		{
			name:'Dark Seer', 
			ulti:'Wall of Replica: Pour target enemy a drink the size of their own. They must waterfall it. '
		},
		{
			name:'Dazzle', 
			ulti:'Weave: Count: "1 Dazzle!... 2 Dazzle!... 3 Dazzle!..." . Your allies take n less drinks and your enemies take n/2 less drinks, where n = the number you last counted (up to a max of 14).'
		},
		{
			name:'Death Prophet', 
			ulti:'Exorcism: Pour a full cup with an extra shot. Enemies must pass it between them taking drinks until it is finished. During this time it is recommended you yell something like "GO MY SWEET SISTERS" while they do this.'
		},
		{
			name:'Disruptor', 
			ulti:'Static Storm: Yell "STORMS A BREWIN" and point to 2 enemies. They must waterfall for 2 seconds.'
		},
		{
			name:'DOOM', 
			ulti:'DOOM: Point to target enemy and yell "YOURE.... DOOOOOOOOOOOMED". They must waterfall as long as you are yelling "DOOOOOM" (no maximum).'
		},
		{
			name:'Dragon Knight', 
			ulti:'Elder Dragon Form: Draw a dragon on your cup. Drinks you inflict cause the their neighbours to drink as well. Lasts until your cup reaches half full or empties, whichever comes first.'
		},
		{
			name:'Drow', 
			ulti:'Marksmanship: Drinks inflicted by you on the two furthest enemies from you count for +1 (always active).'
		},
		{
			name:'Earthshaker', 
			ulti:'Echo Slam: Target a group of enemies who are adjacent to each other. They must each take n drinks, where n = the size of the group.'
		},
		{
			name:'Elder Titan', 
			ulti:'Earth Splitter: Target group of enemies waterfall half of what is in their cup.'
		},
		{
			name:'Ember Spirit', 
			ulti:'Fire Remnant: Instead of taking a set of drinks you may move seats and "dodge" the drink. Can be done up to 3 times.'
		},
		{
			name:'Enchantress', 
			ulti:'Impetus: Each enemy drinks for how far away they are from you (up to a max of 4).'
		},
		{
			name:'Enigma', 
			ulti:'Black Hole: Stand up and do the black hole channel for 3 seconds, all enemies waterfall for the duration.'
		},
		{
			name:'Faceless Void', 
			ulti:'Chronosphere: Yell "CHRONOSPHERE". All players (except you) must stand completely still for 10s. Drinks you inflict from kills for this duration count for quadruple.'
		},
		{
			name:'Gyrocopter', 
			ulti:'Calldown: Make a falling bomb noise (whistle for at least a second, followed by a crash) all enemies who stand up before the crash take 1 drink, all enemies who do not take 3.'
		},
		{
			name:'Huskar', 
			ulti:'Life Break: Sit next to target enemy and waterfall for as long as you wish. Target waterfalls for the same length + 2s.'
		},
		{
			name:'Invoker', 
			ulti:'Invoke: Pick an invoker spell and yell it at target enemy. They must give the correct combination of reagents (Quas, Wex, Exort) or drink. Each invoker spell can only be used once (so up to maximum of 9).'
		},
		{
			name:'Io', 
			ulti:'Relocate: You (and, if you wish, a target ally) get up and sit next to target enemy for 12s. For the duration, any drinks either of you inflict cause the chosen enemy to take 2 drinks, and any drinks they inflict on either of you count for double.'
		},
		{
			name:'Jakiro', 
			ulti:'Macropyre: Group of enemies waterfall for 3s.'
		},
		{
			name:'Juggernaught', 
			ulti:'Omnislash: Stand up and jump (safely!) next to an enemy and drink from their cup. You may only use this ability once but can jump up to 12 times.'
		},
		{
			name:'Keeper of the Light',
			ulti:'Spirit Form: Draw a horse on your cup. Group of enemies cannot inflict drinks from kills. You may bring any ally to sit next to you. Lasts until your cup reaches half full or empties, whichever comes first.'
		},
		{
			name:'Kunkka', 
			ulti:'Ghost Ship: Group of enemies take 2 drinks. Group of allies do not take the next 2 drinks inflicted on them, but the third drink counts for +2.'
		},
		{
			name:'Leshrac', 
			ulti:'Pulse Nova: Take a drink and yell "PULSE" enemies must all take a drink. Can be used up to 5 times.'
		},
		{
			name:'Lich', 
			ulti:'Chain Frost: Target enemy takes a drink and yells the name of another enemy who has not yet been hit by this chain frost. This continues until the enemy team cycles through their members three times or an enemy calls the wrong name. If the latter, that enemy must waterfall to finish.'
		},
		{
			name:'Lifestealer', 
			ulti:'Infest: Pour your remaining drink into an allies cup. Drinks inflicted on either of you can be drunk by the other until such time as you either choose to uninfest and pour a drink the size of the joint-cup or the joint-cup is finished. If the latter, you must each take the penalty shot.'
		},
		{
			name:'Lina', 
			ulti:'Laguna Blade: Target enemy takes 8 drinks.'
		},
		{
			name:'Lion', 
			ulti:'Finger of Death: Target enemy takes 6 drinks, or target enemy group takes 4 drinks each.'
		},
		{
			name:'Lone Druid', 
			ulti:'True Form: Draw a bear on your cup. Double the amount in your cup, you inflict +1 drinks. Lasts until your cup reaches half full or empties, whichever comes first.'
		},
		{
			name:'Luna',
			ulti:'Eclipse: Secretly choose an enemy. One member of the enemy team must yell "NOVA". If it is not the enemy you chose, then that person must take 2 drinks. Do this 4 times.'
		},
		{
			name:'Lycanthrope', 
			ulti:'Shapeshift: Draw a wolf on your cup. Lasts until your cup reaches half full or empties, whichever comes first.'
		},
		{
			name:'Magnus', 
			ulti:'Reverse Polarity: All enemies must sit together. They all take 2 drinks.'
		},
		{
			name:'Medusa', 
			ulti:'Stone Gaze: Can only be used after you make eye contact with an enemy. That enemy cannot inflict drinks on you, and drinks you inflict on them count for double.'
		},
		{
			name:'Meepo', 
			ulti:'Divided we stand: On spawn: split your drink between 3 cups (each must contain at least 1 drink). When a drink is inflicted upon you, they must choose which cup you drink from (dont let them know how full each cup is). When one cup is emptied, you must waterfall the other 2 and take your penalty shot.'
		},
		{
			name:'Mirana', 
			ulti:'Moonlight Shadow: For 20s, all allies take no drinks, and all enemies take +1.'
		},
		{
			name:'Morphling', 
			ulti:'Replicate: Pour a drink the size of target player. At any point you may waterfall your drink (without penalty) and use that drink as your own.'
		},
		{
			name:'Naga Siren', 
			ulti:'Song of the Siren: Sing a song. Enemies and allies must drink for each verse (up to 5).'
		},
		{
			name:"Nature's Prophet", 
			ulti:'Wrath of Nature: Pick an enemy, they must take 1 drink, and the enemy to their left must take 2 drinks, next then takes 3 drinks and so on, until each member of the enemy team has drank.'
		}

	];