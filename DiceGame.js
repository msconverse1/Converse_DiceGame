


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

//generate a random dice number
function rollDice(input){
	if (input == 20) {
	let result = Math.floor(Math.random()*input+1);
	let resultCP = Math.floor(Math.random()*input+1);
	document.getElementById('display').innerHTML = result;
	document.getElementById('display3').innerHTML = resultCP;

	HitorMissed(result,resultCP);
	}
	
}
// check if hit or missed
function HitorMissed(attack,attackCP){
	let AICrAC = "14";
	let word = "";
	let PAC = "15";
	if (attack >= AICrAC) {
		 word = "you hit"
		document.getElementById('display2').innerHTML = word;
	}
	else {
		word = "you Missed";
	document.getElementById('display2').innerHTML = word;
	}
	if (attackCP >= PAC) {
		word = "you hit"
		document.getElementById('display4').innerHTML = word;
	}
	else{
		word = "you Missed";
	document.getElementById('display4').innerHTML = word;
	}
}