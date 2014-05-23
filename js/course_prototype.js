var courses = {
	java:{
		id: 1510,
		desc: "Java's Course Description",
		pre_req: [],
		term: 1,

		getQuiz: function(sect, len){
			var bank = quizBank[sect-1];
			var quiz = [];

			for(var i=0; i<len || i<bank.length; i++){
				quiz.push(bank.splice(Math.random()*bank.length, 1);
			}
			
			return quiz;
		},
		
		getMidterm: function(){
			var bank = quizBank[0].concat(quizBank[1]);
			var midterm = [];
			
			for(var i=0; i<10; i++){
				midterm.push(bank.splice(Math.random()*bank.length, 1);
			}
			
			return midterm;
		},
		
		getFinal: function(){
			var bank1 = quizBank[0].concat(quizBank[1]);
			var bank2 = quizBank[2].concat(quizBank[3]);
			var fin = [];
			
			for(var i=0; i<5; i++){
				fin.push(bank1.splice(Math.random()*bank1.length, 1);
			}
			
			for(var i=0; i<10; i++){
				fin.push(bank2.splice(Math.random()*bank2.length, 1);
			}
			
			return fin;
		},
		
		get
		
		quizBank:[
			[
				["JAVA: Question to be asked (1.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (1.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (1.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (1.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (1.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
			],
		
			[
				["JAVA: Question to be asked (2.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (2.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (2.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (2.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (2.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
			],
		
			[
				["JAVA: Question to be asked (3.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (3.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (3.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (3.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (3.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
			],
		
			[
				["JAVA: Question to be asked (4.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (4.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (4.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (4.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
				["JAVA: Question to be asked (4.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
			]
		]
		
	}
};

var math = {
	id: 1113,
	desc: "Math's Course Description",
	pre_req: [],
	term: 1,
	
	quizBank: [
		[
		["MATH: Question to be asked (1.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (1.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (1.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (1.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (1.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
		],
	
	quiz2: [
		["MATH: Question to be asked (2.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (2.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (2.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (2.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (2.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
	],
	
	quiz3: [
		["MATH: Question to be asked (3.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (3.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (3.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (3.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (3.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
	],
	
	quiz4: [
		["MATH: Question to be asked (4.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (4.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (4.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (4.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["MATH: Question to be asked (4.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
	]
};

var arch = {
	id: 2721,
	desc: "Arch's Course Description",
	pre_req: [1113, 1510],
	term: 2,

	quiz1: [
		["ARCH: Question to be asked (1.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (1.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (1.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (1.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (1.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
	],
	
	quiz2: [
		["ARCH: Question to be asked (2.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (2.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (2.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (2.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (2.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
	],
	
	quiz3: [
		["ARCH: Question to be asked (3.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (3.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (3.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (3.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (3.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
	],
	
	quiz4: [
		["ARCH: Question to be asked (4.1)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (4.2)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (4.3)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (4.4)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"],
		["ARCH: Question to be asked (4.5)", "Correct Answer", "Incorrect Answer 1", "Incorrect Answer 2", "Incorrect Answer 3"]
	]
};