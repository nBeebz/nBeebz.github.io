function displayResults(){
    var num = 0;
	var pts = 0;
    for (var i=0; i < quiz.cor.length; i++)
    {
        if(quiz.resp[i] == quiz.cor[i]) num++;
    }
    $('#total').html(num+'/'+quiz.cor.length);
    resultArea();
}

function resultArea(){
    var details, grid, barA, barC, right, wrong, block;

    details = document.getElementById('result-details');
    details.innerHTML = "";
    
	grid = document.createElement('div');
	grid.className = 'ui-grid-c resultGrid';
	
	block =  document.createElement('div');
	block.className = 'ui-block-a';

	var block =  document.createElement('div');
	block.className = 'ui-block-a';
	var barA = document.createElement('div');
	barA.className = 'ui-bar ui-bar-a';
	barA.style.height = '50px';
	
	var barC = document.createElement('div');
	barC.className = 'ui-bar ui-bar-c';
	barC.style.height = '50px';
	
	barA.innerHTML = 'Q';
	block.appendChild(barA);
	grid.appendChild(block);
	
	var block =  document.createElement('div');
	block.className = 'ui-block-b';
	var barA = document.createElement('div');
	barA.className = 'ui-bar ui-bar-a';
	barA.style.height = '50px';
	
	barA.innerHTML = 'You';
	block.appendChild(barA);
	grid.appendChild(block);
		
	var block =  document.createElement('div');
	block.className = 'ui-block-c';
	var barA = document.createElement('div');
	barA.className = 'ui-bar ui-bar-a';
	barA.style.height = '50px';
	
	barA.innerHTML = 'Ans';
	block.appendChild(barA);
	grid.appendChild(block);
	
	var block =  document.createElement('div');
	block.className = 'ui-block-d';
	var barA = document.createElement('div');
	barA.className = 'ui-bar ui-bar-a';
	barA.style.height = '50px';
	
	barA.innerHTML = 'Rslt';
	block.appendChild(barA);
	grid.appendChild(block);
	
	
	for(var i=0; i<quiz.cor.length; i++)
	{
		var block =  document.createElement('div');
		block.className = 'ui-block-a';
		var barA = document.createElement('div');
		barA.className = 'ui-bar ui-bar-a';
		barA.style.height = '50px';

		barA.innerHTML = i+1;
		block.appendChild(barA);
		grid.appendChild(block);
		
		var block =  document.createElement('div');
		block.className = 'ui-block-b';
		var barC = document.createElement('div');
		barC.className = 'ui-bar ui-bar-c';
		barC.style.height = '50px';

		barC.innerHTML = getLetter(quiz.resp[i]);
		block.appendChild(barC);
		grid.appendChild(block);
		
		var block =  document.createElement('div');
		block.className = 'ui-block-c';
		var barC = document.createElement('div');
		barC.className = 'ui-bar ui-bar-c';
		barC.style.height = '50px';
		
		barC.innerHTML = getLetter(quiz.cor[i]);
		block.appendChild(barC);
		grid.appendChild(block);
	
		var block =  document.createElement('div');
		block.className = 'ui-block-d';
		var barC = document.createElement('div');
		barC.className = 'ui-bar ui-bar-c';
		barC.style.height = '50px';
		if(quiz.resp[i] == quiz.cor[i])
		{
            var right = document.createElement('img');
            right.src = 'assets/check.png';
            barC.appendChild(right);
        }
		else
		{
			var str = quiz.bank[i][0]+"\n\n"+quiz.bank[i][1];
            var wrong = document.createElement('img');
            wrong.src = 'assets/x.png';
			wrong.onclick = function(){alert(str);};
			barC.appendChild(wrong);;
		}
		block.appendChild(barC);
		grid.appendChild(block);
		
		
		
	}
	
	details.appendChild(grid);
}			

function getLetter(num){
	switch(num){
		case 0: return "A";
		case 1: return "B";
		case 2: return "C";
		case 3: return "D";
		default: return "X";
	}
}
