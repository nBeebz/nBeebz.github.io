
//Function sets the inner HTML of the id given to the variable given,
// If the variable given is not 'set', the inner HTML is set to a '-'
function set(id, variable) {
	if (variable == -1) {
		document.getElementById(id).innerHTML="-";
	} else {
		document.getElementById(id).innerHTML=variable;
	}
}

function topGun(crs) {
	var course = student.courseStatus[crs];
	var average = 0;
	if (course.quiz1.highest != -1)	{
		var quiz1 = Math.floor(course.quiz1.highest / 10);
	} else quiz1 = 0;
	if (course.quiz2.highest != -1)	{
		var quiz2 = Math.floor(course.quiz2.highest / 10);
	} else quiz2 = 0;
	if (course.quiz3.highest != -1)	{
		var quiz3 = Math.floor(course.quiz3.highest / 10);
	} else quiz3 = 0;
	if (course.quiz4.highest != -1) {
		var quiz4 = Math.floor(course.quiz4.highest / 10);
	} else quiz4 = 0;
	if (course.midterm.highest != -1) {
		var midterm = Math.floor(course.midterm.highest / 4);
	} else midterm = 0;
	if (course.fin.highest != -1) {
		var fin = Math.floor((course.fin.highest * 7) / 20); 
	} else fin = 0;
	if (quiz1+quiz2+quiz3+quiz4+midterm+fin >= 86) {
		return 1;
	} else
		return 0;
}

function calculateClass(crs) {
	var quiz1 = student.courseStatus[crs].quiz1.highest;
	var quiz2 = student.courseStatus[crs].quiz2.highest;
	var midterm = student.courseStatus[crs].midterm.highest;
	var quiz3 = student.courseStatus[crs].quiz3.highest;
	var quiz4 = student.courseStatus[crs].quiz4.highest;
	var fin = student.courseStatus[crs].fin.highest;
	
	if (quiz1 == -1)
		return "-";
	if (quiz2 == -1)
		return quiz1;
	if (midterm == -1) {
		quiz1 /= 2;
		quiz2 /= 2;
		return Math.floor(quiz1+quiz2);
	}	
	if (quiz3 == -1) {
		quiz1 /= 4;		
		quiz2 /= 4;		
		midterm /= 2;	
		return Math.floor(quiz1+quiz2+midterm);
	}
	if (quiz4 == -1) {
		quiz1 = (quiz1/100)*(50/3);
		quiz2 = (quiz2/100)*(50/3);
		midterm /= 2;
		quiz3 = (quiz3/100)*(50/3); 
		return Math.floor(quiz1+quiz2+midterm+quiz3);
	}
	
	if (fin == -1) {
		quiz1 /= 8;
		quiz2 /= 8;
		midterm /= 2;
		quiz3 /= 8;
		quiz4 /= 8;
		return Math.floor(quiz1+quiz2+midterm+quiz3+quiz4);
	} else {	
		quiz1 /= 10;
		quiz2 /= 10;
		quiz3 /= 10;
		quiz4 /= 10;
		midterm /= 4
		fin = (fin*7)/20
		return Math.floor(quiz1+quiz2+midterm+quiz3+quiz4+fin);
	}
}

$(document).delegate("#report", "pageinit", function() {
	loadReport();
});

function loadReport() {
	//The variables in the array are '-', '+', and '%' in that order
	var quiz1_1 = student.courseStatus.java.quiz1;
	var quiz1_2 = student.courseStatus.java.quiz2;
	var midterm1 = student.courseStatus.java.midterm;
	var quiz1_3 = student.courseStatus.java.quiz3;
	var quiz1_4 = student.courseStatus.java.quiz4;
	var final1 = student.courseStatus.java.fin;
	var class1 = calculateClass("java");
	
	
	var quiz2_1 = student.courseStatus.math.quiz1;
	var quiz2_2 = student.courseStatus.math.quiz2;
	var midterm2 = student.courseStatus.math.midterm;
	var quiz2_3 = student.courseStatus.math.quiz3;
	var quiz2_4 = student.courseStatus.math.quiz4;
	var final2 = student.courseStatus.math.fin;
	var class2 = calculateClass("math");
	
	
	var quiz3_1 = student.courseStatus.arch.quiz1;
	var quiz3_2 = student.courseStatus.arch.quiz2;
	var midterm3 = student.courseStatus.arch.midterm;
	var quiz3_3 = student.courseStatus.arch.quiz3;
	var quiz3_4 = student.courseStatus.arch.quiz4;
	var final3 = student.courseStatus.arch.fin;
	var class3 = calculateClass("arch");
	
	//Placing the variables for class1
	set("class1", class1);
	document.getElementById("class1").innerHTML+="%";
	set("quiz1_1-", quiz1_1.lowest);
	set("quiz1_1+", quiz1_1.highest);
	set("quiz1_1%", quiz1_1.average);
	set("quiz1_2-", quiz1_2.lowest);
	set("quiz1_2+", quiz1_2.highest);
	set("quiz1_2%", quiz1_2.average);
	set("midterm1-", midterm1.lowest);
	set("midterm1+", midterm1.highest);
	set("midterm1%", midterm1.average);
	set("quiz1_3-", quiz1_3.lowest);
	set("quiz1_3+", quiz1_3.highest);
	set("quiz1_3%", quiz1_3.average);
	set("quiz1_4-", quiz1_4.lowest);
	set("quiz1_4+", quiz1_4.highest);
	set("quiz1_4%", quiz1_4.average);
	set("final1-", final1.lowest);
	set("final1+", final1.highest);
	set("final1%", final1.average);
	//Placing the variables for class2
	set("class2", class2);
	document.getElementById("class2").innerHTML+="%";
	set("quiz2_1-", quiz2_1.lowest);
	set("quiz2_1+", quiz2_1.highest);
	set("quiz2_1%", quiz2_1.average);
	set("quiz2_2-", quiz2_2.lowest);
	set("quiz2_2+", quiz2_2.highest);
	set("quiz2_2%", quiz2_2.average);
	set("midterm2-", midterm2.lowest);
	set("midterm2+", midterm2.highest);
	set("midterm2%", midterm2.average);
	set("quiz2_3-", quiz2_3.lowest);
	set("quiz2_3+", quiz2_3.highest);
	set("quiz2_3%", quiz2_3.average);
	set("quiz2_4-", quiz2_4.lowest);
	set("quiz2_4+", quiz2_4.highest);
	set("quiz2_4%", quiz2_4.average);
	set("final2-", final2.lowest);
	set("final2+", final2.highest);
	set("final2%", final2.average);
	//Placing the variables for class3
	set("class3", class3);
	document.getElementById("class3").innerHTML+="%";
	set("quiz3_1-", quiz3_1.lowest);
	set("quiz3_1+", quiz3_1.highest);
	set("quiz3_1%", quiz3_1.average);
	set("quiz3_2-", quiz3_2.lowest);
	set("quiz3_2+", quiz3_2.highest);
	set("quiz3_2%", quiz3_2.average);
	set("midterm3-", midterm3.lowest);
	set("midterm3+", midterm3.highest);
	set("midterm3%", midterm3.average);
	set("quiz3_3-", quiz3_3.lowest);
	set("quiz3_3+", quiz3_3.highest);
	set("quiz3_3%", quiz3_3.average);
	set("quiz3_4-", quiz3_4.lowest);
	set("quiz3_4+", quiz3_4.highest);
	set("quiz3_4%", quiz3_4.average);
	set("final3-", final3.lowest);
	set("final3+", final3.highest);
	set("final3%", final3.average);
}