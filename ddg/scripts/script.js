$(document).ready(function(){ 
	$("#herolist").html(getHeroList());
	$("#herolist:visible").listview( "refresh" );
	$('.hero').click(function() {
		var i = $(this).index();
		var	hero = heroes[i];
		var src = '"heroes/hero ('+i+').png"';
		var str = '<tr><td><img src='+src+'/></td><td><h1>'+hero.name+'</h1></td></tr>';
		$("#hero-label").html(str);
		$("#name-label").html(hero.ulti.name);
		if(hero.ulti.setup)	$("#setup-label").html("Setup: "+hero.ulti.setup);
		else $("#setup-label").hide();
		$("#skill-label").html(hero.ulti.skill);
		if(hero.ulti.uses) $("#uses-label").html("You may use this skill "+hero.ulti.uses+" time(s) per life");
		else $("#uses-label").html("This skill is always active");
		if(hero.ulti.transform) $("#transform-label").show();
		else $("#transform-label").hide();
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
	{//Abaddon	
		name:"Abaddon", 
		ulti:{
			name:"Borrowed Time", 
			skill:"The next 4/5/6 drinks against you instead fill your cup", 
			uses:1
		}
	},
	{//Alchemist
		name:"Alchemist", 
		ulti:{
			name:"Chemical Rage", 
			skill:"Draw an ogre on your transformation cup, you may fill it to the top. Drinks you inflict count for an extra 1/2/3", 
			transform:1,
			uses:1
		}
	},
	{//Ancient Apparition
		name:"Ancient Apparition",
		ulti:{
			name:"Ice Blast", 
			skill:"For each person sitting between you and target enemy (shortest path), place 2 ice cubes in their drink. When their drink comes to below the level of ice, they must waterfall.", 
			setup:"You will need a cup full of ice",
			uses:1
		}
	},
	{//Anti-Mage
		name:"Anti-Mage",
		ulti:{
			name:"Mana Void", 
			skill:"For each 1/4 missing from the cup of the target enemy, they and their adjacent allies take 1/2/3 drinks", 
			uses:1
		}
	},
	{//Axe
		name:"Axe", 
		ulti:{
			name:"Culling Blade", 
			skill:"Target enemy takes 4/5/6 drinks. If this would kill them, this skill ignores any affects that would otherwise block it and does not go on cooldown.", 
			uses:1
		}
	},
	{//Bane
		name:"Bane", 
		ulti:{
			name:"Fiends Grip",
			skill:"Stare an enemy in the eyes and repeatedly whisper 'bane of your existence'. They must drink every time you do so. 6/8/10 times.",
			scaling:1,			
			uses:1
		}
	},
	{//Batrider
		name:"Batrider", 
		ulti:{
			name:"Flaming Lasso",
			skill:"Target enemy takes 3/4/5 drinks and you may drag them to a new seat and sit next to them.", 
			uses:2
		}
	},
	{//Beastmaster
		name:"Beastmaster", 
		ulti:{
			name:"Primal Roar",
			skill:"Pick an enemy and yell 'DRINK!' or 'ROAR!' or 'PENIS!' at them. They must waterfall, and any enemies sitting next to them must take 1/2/3 drinks and edge away awkwardly.", 
			uses:1
		}
	},
	{//Bloodseeker
		name:"Bloodseeker", 
		ulti:{
			name:"Rupture",
			skill:"Target enemy must stay completely still for 8/10/12 seconds, if they move, they must waterfall", 
			timed:[8,10,12], 
			uses:1
		}
	},
	{//Bounty Hunter
		name:"Bounty Hunter", 
		ulti:{
			name:"Track",
			skill:"When target enemy dies, all of their allies drink 1/2/3. Track ends when you die.", 
			uses:5
		}
	},
	{//Brewmaster
		name:"Brewmaster", 
		ulti:{
			name:"Primal Split",
			skill:"all enemies pour 3/4/5 drinks from theirs into a single cup, you and target player split the cup.",
			setup:"You'll need an extra (empty) cup",
			uses:1
		}
	},
	{//Bristleback
		name:"Bristleback",
		ulti:{
			name:"Warpath",
			skill:"Draw a porcupine on your transformation cup. Each drink you inflict increases the amount your next drink inflicts by 1. To a maximum of 2/3/4.",
			transform:1,
			uses:1
		}
	},
	{//Centaur Warrunner
		name:"Centaur Warrunner", 
		ulti:{
			name:"Stampede",
			skill:"All allies may get up and pick a new seat. Any enemies they pass by on the way take 3/4/5 drinks (maximum once per enemy).",
			uses:1
		}	
	},
	{//Chaos Knight
		name:"Chaos Knight", 
		ulti:{
			name:"Phantasm",
			skill:"Split the remainder of your cup into thirds. Any damage inflicted by you or upon you, instead cause the target to waterfall one of the thirds. The target who finishes the final third must also take a penalty shot.",	
			setup:"You'll need 2 extra empty cups",
			uses:1
		}
	},
	{//Chen
		name:"Chen",
		ulti:{
			name:"Hand of God",
			skill:"All allies may Pour 3/4/5 drinks worth into their cups.",		
			uses:1
		}	
	},
	{//Clinkz
		name:"Clinkz", 
		ulti:{
			name:"Death Pact",
			skill:"Pour 3/4/5 drinks worth into your cup. As long as you have this extra amount, drinks you inflict count for 1/2/3 extra",
			uses:1
		}
	},
	{//Clockwerk
		name:"Clockwerk", 
		ulti:{
			name:"Hookshot",
			skill:"Target player takes 3/4/5 drinks and you sit next to them.",
			uses:3
		}
	},
	{//Crystal Maiden
		name:"Crystal Maiden", 
		ulti:{
			name:"Freezing Field",
			skill:"Put some ice in the cups of enemies adjacent to you. They must waterfall.",
			uses:1
		}
	},
	{//Dark Seer
		name:"Dark Seer", 
		ulti:{
			name:"Wall of Replica",
			skill:"Target group of enemies must waterfall and refill their cup it's previous level. (no penalty shot)",
			uses:1
		}
	},
	{//Dazzle
		name:"Dazzle", 
		ulti:{
			name:"Weave",
			skill:"Yell 'DAZZLE!'. Any enemy (or ally) who drinks within the next 20/40/60 seconds, must drink one extra (or fewer) drink for every 5 seconds since you yelled 'DAZZLE!'",
			timed:[20,40,60],
			uses:1
		}
	},
	{//Death Prophet
		name:"Death Prophet", 
		ulti:{
			name:"Exorcism",
			skill:"Draw a ghost on your transformation cup. Any drinks you inflict count for 1/2/3 extra. When the transformation ends, you may fill your cup by half.",
			transform:1,
			uses:1
		}
	},
	{//Disruptor
		name:"Disruptor", 
		ulti:{
			name:"Static Storm",
			skill:"Group of enemies takes 3/4/5 drinks. Immediately ends any transformations or ultimates (such as DOOM)",
			uses:1
		}
	},
	{//DOOM
		name:"DOOM", 
		ulti:{
			name:"DOOM",
			skill:"Point to target enemy and yell 'YOU ARE.... DOOOOOOOOOOOMED' in your best devil voice. They take 5/6/7 drinks and cannot use their ultimate ability until their next cup.",
			uses:1
		}
	},
	{//Dragon Knight
		name:"Dragon Knight", 
		ulti:{
			name:"Elder Dragon Form",
			skill:"Draw a dragon on your transformation cup. Drinks you inflict cause their neighbouring allies to drink as well.",
			transform:1,
			uses:1
		}
	},
	{//Drow
		name:"Drow", 
		ulti:{
			name:"Marksmanship",
			skill:"As long as you are adjacent to no enemies, drinks you inflict count for 1/2/3 extra",
			uses:0
		}
	},
	{//Earthshaker
		name:"Earthshaker", 
		ulti:{
			name:"Echo Slam",
			skill:"Target group of enemies must each take n/2n/3n drinks, where n = the size of the group.",
			uses:1
		}	
	},
	{//Elder Titan
		name:"Elder Titan", 
		ulti:{
			name:"Earth Splitter",
			skill:"Target group of enemies drink half of what is in their cup (waterfall if less than 1/4).",
			uses:1
		}	
	},
	{//Ember Spirit
		name:"Ember Spirit", 
		ulti:{
			name:"Fire Remnant",
			skill:"Instead of taking a set of drinks you may move seats and 'dodge' them. Any enemies you sit next to must take 2/3/4 drinks.",
			uses:1
		}
	},
	{//Enchantress
		name:"Enchantress", 
		ulti:{
			name:"Impetus",
			skill:"Target enemy takes 1/2/3 drinks for each seat between you.",
			uses:1
		}
	},
	{//Enigma
		name:"Enigma", 
		ulti:{
			name:"Black Hole",
			skill:"Stand up and do the black hole channel at target enemy, all their allies move to sit next to them. All enemies take 3/4/5 drinks.",
			uses:1
		}
	},
	{//Faceless Void
		name:"Faceless Void", 
		ulti:{
			name:"Chronosphere",
			skill:"Yell 'STOP, CHRONO TIME'. All players (except you) must stand completely still for 10/15/20 seconds. Drinks you inflict from kills for this duration count for quadruple.",
			uses:1
		}	
	},
	{//Gyrocopter
		name:"Gyrocopter", 
		ulti:{
			name:"Calldown",
			skill:"Make a falling bomb noise (whistle for at least a second or two, followed by a crash) all enemies who stand up before the crash take 1/2/3 drinks; all enemies who do not, drink triple that amount.",
			uses:1
		}	
	},
	{//Huskar
		name:"Huskar", 
		ulti:{
			name:"Life Break",
			skill:"Sit next to target enemy and take as many drinks as you choose. Target enemy drinks the same amount plus 2/3/4 drinks",
			uses:1
		}
	},
	{//Invoker
		name:"Invoker", 
		ulti:{
			name:"Invoke",
			skill:"Pick an invoker spell and invoke it at target enemy. They must give the correct combination of reagents (Quas, Wex, Exort) in 9/6/3 seconds or take 1/2/3 drinks. Each invoker spell can only be used once per cup.",
			timed:[9,6,3],
			setup:"<ul><li>Cold Snap: QQQ</li><li>Ice Wall: QQE</li><li>Ghost Walk: QQW</li><li>EMP: WWW</li><li>Tornado: WWQ</li><li>Alacrity: WWE</li><li>Sun Strike: EEE</li><li>Chaos Meteor: EEW</li><li>Forge Spirit: EEQ</li><li>Deafening Blast: QWE</li></ul>",
			uses:1
		}
	},
	{//Io
		name:"Io", 
		ulti:{
			name:"Relocate",
			skill:"You (and, if you wish, a target ally) get up and sit next to target enemy. The next drink inflicted on the target by either of you counts for triple. You must return to the location you moved from after these drinks are taken.",
			uses:3
		}
	},
	{//Jakiro
		name:"Jakiro", 
		ulti:{
			name:"Macropyre",
			skill:"Group of enemies take 4/5/6 drinks",
			uses:2
		}
	},
	{//Juggernaught
		name:"Juggernaught", 
		ulti:{
			name:"Omnislash",
			skill:"You must drink up to 8/10/12 drinks from the cups of target enemy group",
			uses:1
		}
	},
	{//Keeper of the Light
		name:"Keeper of the Light",
		ulti:{
			name:"Spirit Form",
			skill:"Draw a horse on your transformation cup. You may bring any number of allies to sit next to you. Drinks inflicted on you that are worth more than 3 miss you",
			transform:1,
			uses:1
		}
	},
	{//Kunkka
		name:"Kunkka", 
		ulti:{
			name:"Ghost Ship",
			skill:"Group of enemies take 2/3/4 drinks. Group of allies ignore the next 2/3/4 drinks inflicted on them, but the next subsequent drink counts for an additional 2/3/4",
			uses:1
		}
	},
	{//Leshrac
		name:"Leshrac", 
		ulti:{
			name:"Pulse Nova",
			skill:"Take a drink and say 'PULSE' enemies adjacent to you must also take a drink. Can be used up to 5/10/15 times.",
			uses:1
		}
	},
	{//Lich
		name:"Lich", 
		ulti:{
			name:"Chain Frost",
			skill:"Target enemy takes a drink and calls the name of another enemy who then drinks. This must be done 2n/3n/4n times, where n = the number of enemies",
			uses:1
		}
	},
	{//Lifestealer
		name:"Lifestealer", 
		ulti:{
			name:"Infest",
			skill:"Pour your remaining drink into an ally's cup. You have 'infested' them. Any drinks inflicted upon you must be taken by that ally instead. When you choose to 'uninfest', deal 2/3/4 damage to enemies adjacent to the infested ally, sit next to them and take their cup as your own, allowing them to fill a new cup to half. If the cup is emptied before you do this, you must both take a penalty shot.",
			uses:1
		}	
	},
	{//Lina
		name:"Lina", 
		ulti:{
			name:"Laguna Blade",
			skill:"Target enemy takes 5/6/7 drinks.",
			uses:2
		}
	},
	{//Lion
		name:"Lion", 
		ulti:{
			name:"Finger of Death",
			skill:"Target enemy takes 4/5/6 drinks",
			uses:3
		}
	},
	{//Lone Druid
		name:"Lone Druid", 
		ulti:{
			name:"True Form",
			skill:"Draw a bear on your transformation cup. You may fill it to the top. You inflict 1/2/3 additional drinks.",
			uses:1
		}
	},
	{//Luna
		name:"Luna",
		ulti:{
			name:"Eclipse",
			skill:"Secretly choose an enemy. One member of the enemy team must yell 'NOVA'. If it is not the enemy you chose, then that person must take 2 drinks. Do this 4/6/8 times.",
			uses:1
		}
		
	},
	{//Lycanthrope
		name:"Lycanthrope", 
		ulti:{
			name:"Shapeshift",
			skill:"Draw a wolf on your transformation cup. Lasts until your cup reaches half full or empties, whichever comes first.",
			uses:1
		}
	},
	{//Magnus
		name:"Magnus", 
		ulti:{
			name:"Reverse Polarity",
			skill:"All enemies must sit together. They all take 3/4/5 drinks.",
			uses:2
		}		
	},
	{//Medusa
		name:"Medusa", 
		ulti:{
			name:"Stone Gaze",
			skill:"Can only be used after you make eye contact with an enemy. That enemy cannot inflict drinks on you, and drinks you inflict on them count for an extra 1/2/3. Ends when either of you dies",
			uses:1
		}	
	},
	{//Meepo
		name:"Meepo", 
		ulti:{
			name:"Divided we stand",
			skill:"instead of filling 1 cup, pour 2, divided between 3 cups (each must contain at least 1 drink). When a drink is inflicted upon you, they must choose which cup you drink from (dont let them know how full each cup is). When one cup is emptied, you must waterfall the other 2 and take your penalty shot.",
			setup:"You start with 2 full drinks split between 3 cups",
			uses:1
		}	
	},
	{//Mirana
		name:"Mirana", 
		ulti:{
			name:"Moonlight Shadow",
			skill:"Enemy team closes their eyes for 15s, during which you and your allies may move to any new seat. After 15s, the enemy team must pick somebody to waterfall their drink (no penalty shot).",
			timed:[15],
			uses:1
		}	
	},
	{//Morphling
		name:"Morphling", 
		ulti:{
			name:"Replicate",
			skill:"Pour a drink the size of target player's. At any point you may waterfall your drink (without penalty shot) and use that drink as your own.",
			setup:"You'll need an extra empty cup",
			uses:1
		}
	},
	{//Naga Siren
		name:"Naga Siren", 
		ulti:{
			name:"Song of the Siren",
			skill:"Sing the verse of a song and point to an enemy, they must sing the next verse and point to their ally, who does the same. This continues until all enemies have sung. If an enemy drops the song, they waterfall (with penalty shot)",
			uses:2
		}
	},
	{//Nature's Prophet
		name:"Nature's Prophet", 
		ulti:{
			name:"Wrath of Nature",
			skill:"Pick an enemy, they must take 1 drink, and the enemy to their left must take 2 drinks, next then takes 3 drinks and so on, until each member of the enemy team has drank.",
			uses:1
		}
	},
	{//Necrophos
		name:"Necrophos", 
		ulti:{
			name:"Reaper's Scythe",
			skill:"Target enemy drinks based on the amount left in their cup.<br/><li>Full: 3 drinks</li><li>2/3rds full: 5 drinks</li><li>1/3rd full: waterfall</li>",
			uses:1
		}
	},
	{//Nightstalker
		name:"Nightstalker", 
		ulti:{
			name:"Darkness",
			skill:"Turn off the lights. The next enemy to drink must waterfall (no penalty shot) and turn on the lights.",
			uses:2
		}
	},
	{//Nyx Assassin
		name:"Nyx Assassin", 
		ulti:{
			name:"Vendetta",
			skill:"Move next to target enemy, they waterfall their drink",
			uses:1
		}
	},
	{//Outworld Devourer
		name:"Outworld Devourer", 
		ulti:{
			name:"Sanity's Eclipse",
			skill:"Enemy team drinks an amount equal to the amount in your cup subtracted by the amount in their cup.",
			uses:1
		}
	},
	{//Ogre Magi
		name:"Ogre Magi", 
		ulti:{
			name:"Multicast",
			skill:"When you inflict a drink on somebody roll a die. 1-2 = double, 2-3 = triple, 3-4 = quadruple",
			setup:"You'll need a die",
			uses:1
		}	
	},
	{//Omniknight
		name:"Omniknight", 
		ulti:{
			name:"Guardian Angel",
			skill:"Pour 1/2/3 drinks worth into the cups of all allies, allies ignore the next 2/4/6 drinks against them",
			uses:1
		}
	},
	{//Phantom Assassin
		name:"Phantom Assassin", 
		ulti:{
			name:"Coup de Grace",
			skill:"Draw a skull on your transformation cup. Roll a die when you inflict a drink, if it's a 5 or 6, deal triple/quadruple/quintuple damage",
			transform:1,
			uses:1
		}	
	},
	{//Phantom Lancer
		name:"Phantom Lancer", 
		ulti:{
			name:"Phantom Edge",
			skill:"When you inflict damage, you may pour some of your drink into one of your 3 extra cups. Whenever you take damage you may waterfall that cup instead",
			unique:"You'll need 3 extra empty cups",
			uses:0
		}
	},
	{//Puck
		name:"Puck", 
		ulti:{
			name:"Dream Coil",
			skill:"Enemy group drink 1/2/3, if they move seats before their next penalty shot, they must take an additional 2/3/4",
			uses:1
		}
	},
	{//Pudge
		name:"Pudge", 
		ulti:{
			name:"Dismember",
			skill:"Waterfall the drink of an adjacent enemy, they take the penalty shot",
			uses:2
		}
	},
	{//Pugna
		name:"Pugna", 
		ulti:{
			name:"Life Drain",
			skill:"Pour 3/4/5 drinks from the cup of target enemy into your cup.",
			uses:3
		}
	},
	{//Queen of Pain
		name:"Queen of Pain", 
		ulti:{
			name:"Sonic Wave",
			skill:"Do your best opera singer impression. Enemy team drinks 2/3/4, if any of them cover their ears then they must waterfall (with penalty shot).",
			uses:1
		}
	},
	{//Razor
		name:"Razor", 
		ulti:{
			name:"Eye of the storm",
			skill:"The 1/2/3 lowest health enemies take 2/3/4 drinks, and the next drink against them counts for an extra 2",
			uses:1
		}		
	},
	{//Riki
		name:"Riki", 
		ulti:{
			name:"Permanent Invisibility",
			skill:"You are immune to every second drink inflicted upon you from kills",
			uses:0
		}
	},
	{//Rubick
		name:"Rubick", 
		ulti:{
			name:"Spell Steal",
			skill:"Use after an enemy uses an ultimate, you may use that ultimate",
			uses:3
		}
	},
	{//Sand King
		name:"Sand King", 
		ulti:{
			name:"Epicenter",
			skill:"Enemies adjacent to you take 3/4/5 drinks, other enemies take 2/3/4",
			uses:1		
		}		
	},
	{//Shadow Demon
		name:"Shadow Demon", 
		ulti:{
			name:"Demonic Purge",
			skill:"If target enemy is transformed, they waterfall. Else they take 2/3/4 drinks",
			uses:3
		}
	},
	{//Shadow Fiend
		name:"Shadow Fiend", 
		ulti:{
			name:"Requiem of Souls",
			skill:"Whenever you inflict drinks on a hero, they instead pour the drinks into a cup. When you choose, add a penalty shot to the cup and force target group of enemies to split the cup",
			unique:"You'll need an extra cup",
			tip:"The 'soul' cup can get pretty raunchy. Use it well"
		}
		
	},
	{//Shadow Shaman
		name:"Shadow Shaman", 
		ulti:{
			name:"Mass Serpent Wards",
			skill:"Enemy team splits 10/15/20 drinks",
			uses:1
		}
	},
	{//Silencer
		name:"Silencer", 
		ulti:{
			name:"Global Silence",
			skill:"Enemy team cant speak for 20/40/60 seconds, at the end of which they take 1/2/3 drinks. Anyone who breaks the silence must waterfall (with penalty shot)",
			timed: [20,40,60],
			uses:1
		}
	},
	{//Skywrath Mage
		name:"Skywrath Mage", 
		ulti:{
			name:"Mystic Flare",
			skill:"Enemy group splits 6/9/12 drinks",
			uses:3
		}	
	},
	{//Slardar
		name:"Slardar", 
		ulti:{
			name:"Amplify Damage",
			skill:"The next 3 drinks the target enemy takes counts for an extra 1/2/3.",
			uses:5	
		}	
	},
	{//Slark
		name:"Slark", 
		ulti:{
			name:"Shadow Dance",
			skill:"If no enemy is adjacent to you, you may refill your cup",
			uses:3
		}
	},
	{//Sniper
		name:"Sniper", 
		ulti:{
			name:"Assassinate",
			skill:"Target enemy takes 6/9/12 drinks",
			uses:1
		}		
	},
	{//Spectre
		name:"Spectre", 
		ulti:{
			name:"Haunt",
			skill:"Enemy team takes 2/3/4 drinks, and you sit next to one of them. They take an additional 2/3/4 drinks",
			uses:1
		}		
	},
	{//Spirit Breaker
		name:"Spirit Breaker", 
		ulti:{
			name:"Nether Strike",
			skill:"Sit next to target enemy, they take 4/5/6 drinks",
			uses:1
		}
	},
	{//Storm Spirit
		name:"Storm Spirit", 
		ulti:{
			name:"Ball Lightning",
			skill:"Stand up and change seats, any enemies you sit next to take drink for the number of seats you moved",
			uses:6
		}
	},
	{//Sven
		name:"Sven", 
		ulti:{
			name:"God's Strength",
			skill:"Draw a BIG sword on your transformation cup. Drinks you inflict count for triple",
			uses:1
		}		
	},
	{//Templar Assassin
		name:"Templar Assassin", 
		ulti:{
			name:"Psionic Trap",
			skill:"Target 1 or 2 adjacent enemies take 1 drink",
			uses:10
		}
	},
	{//Tidehunter
		name:"Tidehunter", 
		ulti:{
			name:"Ravage",
			skill:"Enemy team takes 5/6/7 drinks",
			uses:1
		}		
	},
	{//Timbersaw
		name:"Timbersaw", 
		ulti:{
			name:"Chakram",
			skill:"Toss your 'chakram' at an enemy, if they catch it they take 1/2/3 drinks. If they don't they take an 2/3/4. In either case, they throw it back, and you are subject to the same rules",
			setup:"You'll need something to use as a 'chakram'",
			uses:5
		}
	},
	{//Tinker
		name:"Tinker", 
		ulti:{
			name:"Rearm",
			skill:"You may waterfall your drink (and take the penalty shot) to refresh the ultimate ability of an ally. You can do this at most 2/3/4 times in a row",
			uses:1
		}
	},
	{//Tiny
		name:"Tiny", 
		ulti:{
			name:"Grow",
			skill:"Draw a rock on your transformation cup. You take 1 less drink from attacks (minimum 1). drinks you inflict count for an extra 1/2/3",
			transform:1,
			uses:1
		}
	},
	{//Treant Protector
		name:"Treant Protector", 
		ulti:{
			name:"Overgrowth",
			skill:"Enemy team takes 1/2/3 drinks, allies ignore the next 1/2/3 drinks against them",
			uses:3
		}		
	},
	{//Troll Warlord
		name:"Troll Warlord", 
		ulti:{
			name:"Battle Trance",
			skill:"The next drink inflicted by each player on your team counts for an extra 1/2/3",
			uses:3
		}
	},
	{//Tusk
		name:"Tusk", 
		ulti:{
			name:"WALRUS PUNCH",
			skill:"Punch target enemy in the arm, they take 2/3/4 drinks",
			uses:5
		}
	},
	{//Undying
		name:"Undying", 
		ulti:{
			name:"Flesh Golem",
			skill:"Draw a zombie on your transformation cup. Enemies take an extra drink when they take damage. You may pour 2/3/4 drinks into your cup when an enemy dies",
			transform:1,
			uses:1
		}		
	},
	{//Ursa
		name:"Ursa", 
		ulti:{
			name:"Enrage",
			skill:"The next time you inflict damage, it counts for an extra amount based on your current health<br/><li>1/3rd: double</li><li>2/3rds: triple</li><li>full: quadruple</li>",
			uses: 1
		}
	},
	{//Vengeful Spirit
		name:"Vengeful Spirit", 
		ulti:{
			name:"Nether Swap",
			skill:"Swap seats with ally or enemy. Can be used before an ally has to drink, in which case you take the drinks instead. If used on an enemy, they take 2/3/4 drinks",
			uses:3
		}		
	},
	{//Venomancer
		name:"Venomancer", 
		ulti:{
			name:"Poison Nova",
			skill:"Pour a penalty shot in the cup of every enemy",
			uses:1
		}		
	},
	{//Viper
		name:"Viper", 
		ulti:{
			name:"Viper strike",
			skill:"Pour 1 penalty shot in target enemy's cup. They take 2 drinks",
			uses:3
		}
	},
	{//Visage
		name:"Visage", 
		ulti:{
			name:"Summon Familiars",
			skill:"pour 2 cups 1/3rd full each. At any time, you may make an enemy waterfall one of them",
			setup:"You'll need 2 extra cups",
			uses: 1
		}
	},
	{//Warlock
		name:"Warlock", 
		ulti:{
			name:"Chaotic Offering",
			skill:"Take 3 drinks and pour a full cup, you may force an enemy group to split it.",
			setup:"You'll need an extra cup (Draw a golem on it)",
			uses:1
		}
	},
	{//Weaver
		name:"Weaver", 
		ulti:{
			name:"Time Lapse",
			skill:"You may refill your cup",
			uses:2
		}
	},
	{//Windranger
		name:"Windranger", 
		ulti:{
			name:"Focus Fire",
			skill:"Every drink you inflict upon target enemy counts for an extra 1/2/3",
			uses:3
		}		
	},
	{//Witch Doctor
		name:"Witch Doctor", 
		ulti:{
			name:"Death Ward",
			skill:"Pour a full cup, all enemies within 2 seats of you must split it",
		}
	},
	{//Wraith King
		name:"Wraith King", 
		ulti:{
			name:"Reincarnation",
			skill:"You can only transform upon emptying your cup. Draw a skeleton on your transformation cup, You may fill it to full. When you do this, the enemy team takes 3 drinks, and you do not take the penalty shot until your transformation cup is emptied",
			transform:1,
			uses:1
		}
	},
	{//Zeus
		name:"Zeus", 
		ulti:{
			name:"Thundergod's Wrath",
			skill:"Enemy team takes 3/4/5 drinks",
			uses:2
		}
	},
];