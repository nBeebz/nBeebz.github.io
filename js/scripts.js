var width = 11;
var height = 11;

$(document).ready(function(){ 
	var board = $(".board");
	var sq;
	for(var y=0; y<height; y++){
		board.append("<tr>");
		for(var x=0; x<width; x++){
			sq = $("<td></td>", {"data-pos": x+','+y, "class": "grass"});
			board.last().append(sq);
		}
		board.append("</tr>");
	}
	loadBoard();
});

function loadBoard(){
	var path = [[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5]];
	var x, y, sq;
	for(var i=0; i<path.length; i++){
		x = path[i][0];
		y = path[i][1];
		sq = $("td[data-pos='"+x+','+y+"']")
		sq.css("background-color", "grey");
	}
}