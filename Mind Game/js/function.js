var numbClick = 0;
var first;
var second;
var match = 0;

var cards = [];
cards [0] = 'img/img1.png'; cards [1] = 'img/img2.png'; cards [2] = 'img/img3.png'; cards [3] = 'img/img4.png'; cards [4] = 'img/img5.png'; 
cards [5] = 'img/img6.png'; cards [6] = 'img/img7.png'; cards [7] = 'img/img8.png'; cards [8] = 'img/img9.png'; cards [9] = 'img/img10.png';
cards [10] = 'img/img11.png'; cards [11] = 'img/img12.png'; cards [12] = 'img/img13.png'; cards [13] = 'img/img14.png'; cards [14] = 'img/img15.png';
cards [15] = 'img/img16.png'; cards [16] = 'img/img17.png'; cards [17] = 'img/img18.png'; cards [18] = 'img/img19.png'; cards [19] = 'img/img20.png';
cards [20] = 'img/img21.png'; cards [21] = 'img/img22.png'; cards [22] = 'img/img23.png'; cards [23] = 'img/img24.png'; 
cards [24] = 'img/img1.png'; cards [25] = 'img/img2.png'; cards [26] = 'img/img3.png'; cards [27] = 'img/img4.png'; cards [28] = 'img/img5.png'; 
cards [29] = 'img/img6.png'; cards [30] = 'img/img7.png'; cards [31] = 'img/img8.png'; cards [32] = 'img/img9.png'; cards [33] = 'img/img10.png';
cards [34] = 'img/img11.png'; cards [35] = 'img/img12.png'; cards [36] = 'img/img13.png'; cards [37] = 'img/img14.png'; cards [38] = 'img/img15.png';
cards [39] = 'img/img16.png'; cards [40] = 'img/img17.png'; cards [41] = 'img/img18.png'; cards [42] = 'img/img19.png'; cards [43] = 'img/img20.png';
cards [44] = 'img/img21.png'; cards [45] = 'img/img22.png'; cards [46] = 'img/img23.png'; cards [47] = 'img/img24.png';




//Random the array/objects 
function shuffle(array){
	var currentIndex = array.length, temporaryValue, random;
	
	while (0 !== currentIndex)
	{
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		temporaryValue = array [currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		
	}
	
	return array;
}
//dito magrarandom
var s ;
s = shuffle(cards);

//when click
function choose(card)
{
	if (numbClick == 0)
	{
		first = card;
		document.images[card].src = cards [card];
		numbClick = 1;
		
	}
	else if (numbClick ==1)
	{
		numbClick = 2;
		second = card;
		document.images[card].src = cards[card];
		timer = setInterval (control, 700);	
	}	
	
//	else 
//	{
//		alert ("Match");
//	}
}
//dito magchechecked kung match
function control()
{
	clearInterval(timer);
	numbClick = 0;
	if(cards[second]== cards[first])
	{
		//kung ang first card ay equal dun sa second
		match++;
		
		if (match == 24) 
		{
			alert("You complete the game");
			location.reload();
		}
	}
	else
	{
		document.images[first].src = "img/imgback1.png";
		document.images[second].src = "img/imgback1.png";
		return;
	}
}