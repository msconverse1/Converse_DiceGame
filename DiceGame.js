


//let input = prompt("enter a dice value to roll");

//DicePic(input);
//  function DicePic(input)
//  {
//  	var checkNum = Number(input);
//  	switch(checkNum){
//  		case 4:
//  		image = "d4.png";
//  		break;
//  		case 6:
//  		image = "d6.png";
//  		break;
//  		case 8:
//  		image = "d4.png";
//  		break;
//  		case 10:
//  		image = "d4.png";
//  		break;
// 		case 12:
//  		image = "d4.png";
//  		break;
//  		case 20:
//  		image = "d4.png";
//  		break;
//  		default:
//  		break;
//  	}
// }

function rollDice(input){

	let result = Math.floor(Math.random()*input+1);
	
	document.getElementById('display').innerHTML = result;
	Creature(result);
}

function Creature(attack){
	var CrName = "rabbit"
	let CrAC = "14";
	let word = "";
	var CrHP = "5";
	if (attack >= CrAC) {
		 word = "you hit"
		document.getElementById('display2').innerHTML = word;
	}
	else{
		word = "you Missed";
	document.getElementById('display2').innerHTML = word;
	}
}