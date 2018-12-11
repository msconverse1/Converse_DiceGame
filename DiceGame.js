


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
	let result;
	if (input == 20) {
	 result = Math.floor(Math.random()*input+1);
	let resultCP = Math.floor(Math.random()*input+1);
	document.getElementById('display').innerHTML = result;
	document.getElementById('display3').innerHTML = resultCP;

	HitorMissed(result,resultCP);
	}
	if (input == 10 || input ==8 || input ==6 || input ==4) {
		result = Math.floor(Math.random()*input+1);
		dealDamage(input,result);
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
		startDamage();
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
//Toggle to Damage Dice
function startDamage(){
	document.getElementById("D4").style.display = "inline";
	document.getElementById("D6").style.display = "inline";
	document.getElementById("D8").style.display = "inline";
	document.getElementById("D10").style.display = "inline";
	document.getElementById("D12").style.display = "none";
	document.getElementById("D20").style.display = "none";
}
//Create Damage
function dealDamage(dice,result)
{
	if (dice == 10) {
		document.getElementById('display2').innerHTML = "Dagger Hit!";
		Health(result);
	}
		if (dice == 8) {
		document.getElementById('display2').innerHTML = "Magic Hit!";
		Health(result);

	}
		if (dice == 6) {
		document.getElementById('display2').innerHTML = "Rock Hit!";
		Health(result);
	}
			if (dice == 4) {
		document.getElementById('display2').innerHTML = "Life Steal!";
		Health(result);
		Heal(result);
	}
}
	let PHP =0;
	let CHP =0;
function Health(damage)
{
	CHP -=damage;
 document.getElementById('display6').innerHTML = "HP: "+ CHP;
 	 document.getElementById("D4").style.display = "none";
	 document.getElementById("D6").style.display = "none";
	 document.getElementById("D8").style.display = "none";
	 document.getElementById("D10").style.display = "none";
	 document.getElementById("D12").style.display = "inline";
	 document.getElementById("D20").style.display = "inline";
	 GameOver(PHP,CHP)
}
function Heal(dice){
	PHP +=dice;
	 document.getElementById('display5').innerHTML = "HP: "+ PHP;
}

// create new game
function NewGame(){
	 PHP =120;
	 CHP =120;
	 alert("A new Game has started!");
	document.getElementById("D4").style.display = "none";
	document.getElementById("D6").style.display = "none";
	document.getElementById("D8").style.display = "none";
	document.getElementById("D10").style.display = "none";
	document.getElementById("D12").style.display = "inline";
	document.getElementById("D20").style.display = "inline";
	document.getElementById('display5').innerHTML = "HP: "+ PHP;
	document.getElementById('display6').innerHTML = "HP: "+ CHP;
}
// Rules of the game
function Rules()
{
	alert("This is the rules of the game!!!");
}

function GameOver(PHP,CHP){
	if (PHP <=0 ) {
		alert("GameOver!!! CP is the Winner!!!");
		document.getElementById("D4").style.display = "none";
		document.getElementById("D6").style.display = "none";
		document.getElementById("D8").style.display = "none";
		document.getElementById("D10").style.display = "none";
		document.getElementById("D12").style.display = "none";
		document.getElementById("D20").style.display = "none";
	}
	else if(CHP <=0){
		alert("GameOver!!! Player is the Winner!!!");
		document.getElementById("D4").style.display = "none";
		document.getElementById("D6").style.display = "none";
		document.getElementById("D8").style.display = "none";
		document.getElementById("D10").style.display = "none";
		document.getElementById("D12").style.display = "none";
		document.getElementById("D20").style.display = "none";
	}
}
