var quiz = {
	bank: [],
	cor: [],
	resp: [],
};

var quizFlag = 0;

var courses = {
	getQuiz: function(crs, sect, len){
		var bank = this[crs].quizBank[sect];
		bank = shuffle(bank);

		if(len < bank.length){
			bank = bank.slice(0, len);
		}
		
		return bank;
	},
		
	getMidterm: function(crs){
		var bank1 = this.getQuiz(crs, 0, 4);
		var bank2 = this.getQuiz(crs, 1, 4);
		return shuffle(bank1.concat(bank2));
	},
		
	getFinal: function(crs){
		var bank1 = this.getQuiz(crs, 0, 2);
		var bank2 = this.getQuiz(crs, 1, 3);
		var bank3 = this.getQuiz(crs, 2, 5);
		var bank4 = this.getQuiz(crs, 3, 5);
		return shuffle(bank1.concat(bank2.concat(bank3.concat(bank4))));
	},
	
	java:{
		name: "Basic Java",
		id: 1510,
		desc: "Learn Object Orientated programming skills using Java! Use loops and if statements to successfully navigate through this course.",
		pre_req: [],
		term: 1,
		
		
		quizBank:[
			[
				["A Java program is best classified as:", "software", "hardware", "storage", "processor"],
				["An error in a program that results in the program outputting $100 instead of the correct answer, $250 is", "a logical error", "a run-time error", "a syntax error", "a programmer error"],
				["Mistyping “println” as “printn” will result in:", "a syntax error", "a run-time error", "a logical error", "no error at all"],
				["A unique aspect of Java that allows code compiled on one machine to be executed on a machine of a different hardware platform is Java’s:", "bytecodes", "syntax", "use of objects", "all of these"],
				["The main method for a Java program is declared with what?", "public static void main(String[ ] args)", "public static void main( )", "public static void main(String[ ] args);", "private static main(String[ ] args)"]
			],
		
			[
				["The word println is a(n):", "method", "reserved word", "variable", "class"],
				["Of the following types, which one cannot store a numeric value?", "all of these can store numeric values", "char", "int", "float"],
				["What value will z have if we execute the following assignment statement? float z = 5 / 10;", "z will equal 0.0", "runtime-error", "z will equal 0.5", "z will equal 5.0"],
				["If x is an int and y is a float, all of the following are legal except which assignment statement?", "x = y;", "y = x;", "y = (float) x;", "x = (int) y;"],
				["What is output with the statement System.out.println(x+y); if x and y are int values where x=10 and y=5?", "15", "105", "x+y", "An error since neither x nor y is a String"]
			],
		
			[
				["Which of the following is a legal way to declare and instantiate an array of 10 Strings?", "String[ ] s = new String[10];", "String[10] s = new String;", "String s = new String(10);", "String s = new String[10];"],
				["In Java, arrays are", "objects", "primitive data types", "interfaces", "Strings"],
				["Which of the following is an acceptable type for a switch statement?", "char", "Long", "float", "Integer"],
				["Consider the array declaration and instantiation: int[ ] arr = new int[5]; Which of the following is true about arr? ", "It stores 5 elements with legal indices between 0 and 4", "It stores 5 elements with legal indices between 1 and 5", "It stores 4 elements with legal indices between 1 and 4", "It stores 6 elements with legal indices between 0 and 5"],
				["If an int array is passed as a parameter to a method, which of the following would adequately define the parameter list for the method header? ", "(int[ ] a)", "(int a[ ])", "(int[ ])", "(int a)"]
			],
		
			[
				["class Equals{<br/>&nbsp;public static void main(String [] args){<br/>&nbsp; int x = 100;<br/>&nbsp; double y = 100.1;<br/>&nbsp; boolean b = (x = y); /* Line 7 */<br/>&nbsp; System.out.println(b);<br/>&nbsp;}<br/>}<br/><br/>What will be the output of the program?", "Compilation fails", "true", "false", "An Exception is thrown at runtime"],
				["public class Test { }<br/> What is the prototype of it's default constructor?", "public Test( )", "Test()", "Test(void)", "public Test(void)"],
				["You want a class to have access to members of another class in the same package. Which is the most restrictive access that accomplishes this objective?", "default", "public", "private", "protected"],
				["class A{<br/>&nbsp;protected int foo(int a, int b)<br/>&nbsp{<br/>&nbsp; return 0;<br/>&nbsp;}<br/>}<br/><br/> Which is valid in a class that extends class A?", "public int foo(int a, int b) {return 0; }", "private int foo(int a, int b) { return 0; }", "public short foo(int a, int b) { return 0; }", "static protected int foo(int a, int b) { return 0; }"],
				["Which is a valid declaration within an interface?", "public static short stop = 23;", "protected short stop = 23;", "transient short stop = 23;", "final void madness(short stop);"]
			]
		]
		
	},
	
	math:{
		name: "Math",
		id: 1113,
		desc: "Learn about boolean algebra, rules of inference and the design of logic gates.",
		pre_req: [],
		term: 1,
				
		quizBank: [
			[
				["Which of the following is not a basic logic operator? ", "NOR", "AND", "OR", "NOT"],
                ["Which operator has the highest priority in order of operations? ", "NOT", "OR", "AND", "XOR"],
				["Which of the following is an absorption theorem? ", "x(x\'+y) = xy", "x(z+y) = x*z+x*y", "x*x = x", "x*1 = x"],
				["For n input variables, how many possible functions are there? ", "2^2^n", "2^n", "2^(n-", "2^2^(n-"],
				["Which equation is equivalent? ", "0 NOR x = x\'", "0 NAND x = x", "1 XOR x = 0", "1 NOR X = 1"]
			],
		
			[
				["The Sum of Products contains the summation of... ", "the product of inputs who\'s function output 1", "the product of inputs who\'s function output 0", "the summation of inputs who\'s function output 1", "the summation of inputs who\'s function output 0"],
				["The Products of Sums contains the product of... ", "the summation of inputs who\'s function output 0", "the summation of inputs who\'s function output 1", "the product of inputs who\'s function output 0", "the product of inputs who\'s function output 1"],
				["Why are the columns/rows ordered 00/01/11/10 in a Karnaugh map? ", "to have single bit difference to assist in elimination", "to mess with students", "it looked nicer", "to maintain even/odd parity alternation"],
				["What sizes of groupings can be made in a 4 variable Karnaugh map? ", "2,4,8,16", "2,4,8", "2,4,8,16,32", "2,3,4,8"],
				["To form A Product of Sums from a Karnaugh map, you would... ", "group the 0\'s", "group the 1\'s", "group 0/1 pairs", "look for a specific pattern"]
			],
            
			[
				["When building a logical circuit design, after getting an outline of the problem you should... ", "identify the inputs and outputs", "build a truth table", "put the problem in SOP form", "Draw the circuit with logic gates"],
				["How can we get X\' without using an inverter? ", "X NAND X", "X NAND 1", "X NAND 0", "X XNOR X"],
				["What are the outputs of a half adder? ", "Sum, C-out", "Sum", "Sum, C-in", "C-out"],
				["When building a circuit using only NOR gates, which form should you use for the boolean function? ", "Product of Sums", "Sum of Products", "Any form", "K form"],
				["If we\'ve already simplified each function of a multi-output circuit, how can we further reduce the number of gates? ", "Re-use gates common between functions", "You Can't", "Split functions into multiple parts and re-simplify", "Remove outputs"]
			],
		
			[
				["What is 346 in binary? ", "101011010", "101010101", "100101001", "100111010"],
				["What is 237 in Hex? ", "ED", "EC", "E9", "EF"],
				["What is 10110110 in decimal if it is 2\'s compliment form? ", "-74", "182", "-54", "-182"],
				["What is the format of a floating point number? ", "sign, exponent, mantissa", "sign, mantissa, exponent", "exponent, sign, mantissa", "exponent, mantissa, sign"],
				["How do you determine overflow when adding floating point numbers? ", "Overflow in the exponent", "Loss of precision", "Overflow in the mantissa", "Change in sign"]
			]
		]
	},
	
	arch: {
		id: 2721,
		name: "Computer Architecture",
		desc: "Learn about bus speeds, cache fetching and microcode",
		pre_req: [1113, 1510],
		term: 2,
		
		quizBank: [
			[
				["The 3rd level of a contemporary multilevel Machine is: ", "Operating Sys. Level", "Problem Level", "Assembly Level", "Instruction Set Level"],
				["Latency is represented as: ", "Time / Instruction", "Instruction / Time", "Period", "1 / slowest"],
				["2 ^ 37 Bytes is also: ", "128GB", "64MB", "256KB", "128Gb"],
				["Big Endian is: ", "MSB First", "LSB First", "NDS First", "LSD First"],
				["40 k Hz in seconds is: ", "25 micro seconds", "25 milliseconds", "40 micro seconds", "160 mega seconds"]
			],
			[
				["A 5-stage pipeline has stages which take 1ms, 3ms, 10ms, 4ms, and 6ms. The Latency is: ", "24ms", "10ms", "720ms", "1ms"],
				["A code word with 21 bits will have _ parity bits: ", "5", "4", "10", "8"],
				["A certain code has a Hamming distance of 12 bits. It can detect _ bit errors: ", "11", "12", "4", "10"],
				["The codeword 01011 was created with odd parity. The error is on bit: ", "4", "3", "1", "5"],
				["MIPS stands for: ", "Million Instructions Per Second", "Mediocre Instructional Performance Speed", "Manifestation of Interplanetary Protection Squad", "Motherboard Intellect Progress Screen"]
			],
			[
				["In an SR Latch, when S = 0 and R = 1, Q will be: ", "0", "1", "No Change", "Undefined"],
				["If a multiplexor has 3 inputs it will have _ outputs ", "8", "4", "16", "7"],
				["An Asynchronous Bus is controlled by: ", "Both the master and slave devices", "The Clock", "Rising edge", "The master device"],
				["'ADD [R1] R2' means ", "Add the data pointed to by R1 with R2 and store in R2", "Add the data in R1 to the pointer in R2 and store in R1", "Add R1 and R2 and store in R3", "Put the instruction in R1 into R2"],
				["In a timing diagram, the WAIT signal lasts for: ", "At least 1 full Clock Cycle", "More than 1 full clock cycle", "The next falling edge", "Until the data is ready"]
			],
			[
				["In a single-bus Architecture, the first step in Micro Code would be: ", "PCout, MARin, Read, Clear Y, Set Carry-in, Add, Zin", "Zout, PCin, WMFC", "MDRout, IRin, Decode", "MDRout, Add, Zin"],
				["If Main memory has 1 word/cell, 2B/Word, and 256KB total and Cache has 128 lines, 4B/line. The Tag size in bits is: ", "9", "7", "8", "12"],
				["In 4-way Set Associative Mapping using 16 lines, there are _ lines/set ", "4", "16", "12", "3"],
				["Spacial Locality is: ", "Fetch lines of cache around needed word", "keeps words that are used often", "When a word is found in cache", "The mean access time of cache"],
				["In an average computer, there are _ level(s) of cache: ", "3", "5", "1", "4"]
			]
		]
	}
};

$(document).delegate("#course", "pageinit", function() {
	unlockArch();
	unlockQuizzes();
});

function unlockArch(){
	if( student.courseStatus.java.fin.highest >= 50 &&
		student.courseStatus.math.fin.highest >= 50) $("#archCourse").checkboxradio('enable').checkboxradio('refresh');
}

function unlockQuizzes(){
	var crs = $("#courseSel div input[type='radio']:checked").val();
	var status = student.courseStatus[crs];
	var i = 0;
	var tmp1, tmp2;
	for(var x in status){
		tmp1 = parseInt(status[x].highest);
		if(tmp1 >= 50 && i < 5) $("#quiz-"+(i+1)).checkboxradio('enable').checkboxradio('refresh');	
		else if(tmp1 < 50 && i < 5) $("#quiz-"+(i+1)).checkboxradio('disable').checkboxradio('refresh');
		i++;
	}
	
}

function setDesc(){
	var btns = '<a href="#popupDialogStudy" data-rel="popup" data-position-to="window" data-transition="pop" class="ui-btn ui-corner-all ui-btn-inline  ui-btn-a">STUDY</a><a href="#popupDialogTest" data-rel="popup" data-position-to="window" data-transition="pop" class="ui-btn ui-corner-all ui-btn-inline ui-btn-a">TAKE TEST</a>';
	var crs = $("#courseSel div input[type='radio']:checked").val();
	crs = courses[crs];
	$('#courseName').html(crs.name);
	$('#courseDesc').html(crs.desc);
	$('#coursebtn').html(btns);
	$('#quiz-0').prop("checked" , true).checkboxradio("refresh");
	unlockQuizzes();
}

function startQuiz(){
	quizFlag = 1;
	var crs = $("#courseSel div input[type='radio']:checked").val();
	var q = $("#quizSel input[type='radio']:checked").val();
	switch(q){
		case "0": quiz.bank = courses.getQuiz(crs, 0, 5);
			break;
		case "1": quiz.bank = courses.getQuiz(crs, 1, 5);
			break;
		case "2": quiz.bank = courses.getMidterm(crs);
			break;
		case "3": quiz.bank = courses.getQuiz(crs, 2, 5);
			break;
		case "4": quiz.bank = courses.getQuiz(crs, 3, 5);
			break;
		case "5": quiz.bank = courses.getFinal(crs);
			break;
		default: alert("SOMEBODY FUCKED UP");
	}
	$('#btnsub').attr('href', '');
	$('#btnsub').html("Next Question");
	initQuiz();
}

function startStudy(){
	quizFlag = 0;
	var crs = $("#courseSel input[type='radio']:checked").val();
	var sections = $("#studySel input[type=checkbox]:checked");
	var sect;
	var qbank = [];
	for(var i=0; i<sections.length; i++){
		sect = parseInt(sections[i].value);
		qbank = qbank.concat(courses.getQuiz(crs, sect, 5)); 
	}
	quiz.bank = shuffle(qbank);
	initQuiz();
}

function initQuiz(){
	quiz.cur = 0;
	advanceQuiz()
}

function advanceQuiz(){
	if(quiz.cur<quiz.bank.length) displayQuestion();
	if(quiz.cur==quiz.bank.length-1) $('#btnsub').html('FINISH');
	if(quiz.cur==quiz.bank.length){
		$('#btnsub').attr('href', '#results');
		displayResults();
	}
}

function saveResp(){
	quiz.resp[quiz.cur] = parseInt($("#answers input[type='radio']:checked").val());
	++quiz.cur;
	advanceQuiz();
}

function displayQuestion(){
	var quest = makeQuestion();
	$('#qnum').html('Question #'+(quiz.cur+1));
	$('#question').html(quest.text);
	$('#ans-a').html(quest.ans[0].text);
	$('#ans-b').html(quest.ans[1].text);
	$('#ans-c').html(quest.ans[2].text);
	$('#ans-d').html(quest.ans[3].text);
}

function makeQuestion(){
	var tmp = quiz.bank[quiz.cur];
	var q = {
		text: tmp[0],
		ans: [
			{text: tmp[1], correct: true},
			{text: tmp[2], correct: false},
			{text: tmp[3], correct: false},
			{text: tmp[4], correct: false}
		]
	};
	q.ans = shuffle(q.ans);
	for(var i=0; i<q.ans.length; i++){
		if(q.ans[i].correct) quiz.cor[quiz.cur] = i;
	}
	return q;
}

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function finishQuiz() {
	var correct = 0;
	var percent = 0;
	if (quizFlag)
	{
		var crs = $("#courseSel div input[type='radio']:checked").val();
		var q = $("#quizSel input[type='radio']:checked").val();
		for (var x in quiz.cor) {
			if (quiz.resp[x] == quiz.cor[x])
				correct++;
		}
		percent = Math.floor((correct/quiz.resp.length) * 100);
		updateCourse(crs, parseInt(q), percent);
		addPoints(getQuizPoints(courses[crs].term, q, correct));
	}
	cleanup();
}

function getQuizPoints(term, quiz, corr){
	var base;
	if(quiz == 2 || quiz == 5) base = 50;
	else base = 25;
	return base*term*corr;
}

function updateCourse(crs, qNum, percent) {
	var q, tmp;
	switch(qNum){
		case 0: q = "quiz1"; break;
		case 1: q = "quiz2"; break;
		case 2: q = "midterm"; break;
		case 3: q = "quiz3"; break;
		case 4: q = "quiz4"; break;
		case 5: q = "fin"; break;
		default: alert("You Dun Goofed");
	}
	tmp = student.courseStatus[crs][q].lowest
	if(tmp == -1 || percent < tmp) student.courseStatus[crs][q].lowest = percent;
	
	tmp = student.courseStatus[crs][q].highest
	if(tmp == -1 || percent > tmp){
		student.courseStatus[crs][q].highest = percent;
		if(tmp < 50 && percent >= 50){
			if(qNum==5) alert("Congratulations, you've successfully completed the final!");
			else alert("You've unlocked the next test in the course!");
		}
	}
	
	tmp = calcAvg(percent, student.courseStatus[crs][q].attempts++, student.courseStatus[crs][q].average);
	student.courseStatus[crs][q].average = tmp;
	
	if(!debug) $.jStorage.set('pokestud', student);
	loadReport();
}

function calcAvg(percent, tries, avg){
	var total = tries*avg;
	total += percent;
	return total/(tries+1);
}

function cleanup(){
	$('#btnsub').attr("href", "#");
	$('#btnsub').html("Submit");
	$('#resArea').html("");
	quiz = {
		bank: [],
		cor: [],
		resp: []
	};
}