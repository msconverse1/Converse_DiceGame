


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

//generate a random dice number for the Player
function rollDice(input){
	let result;
	if (input == 20) {
	 result = Math.floor(Math.random()*input+1);
	document.getElementById('display').innerHTML = result;
	HitorMissed(result,0);
	}
	else if (input == 10 || input ==8 || input ==6 || input ==4) {
		result = Math.floor(Math.random()*input+1);
		dealDamage(input,result,0);
	}
	else if (input == 12){
		if(PHP <120){
		result = Math.floor(Math.random()*input+1);
		document.getElementById('display2').innerHTML = "Healed For:";
		Heal(result,0);

		}
		else{
			document.getElementById('display2').innerHTML = "Can't Heal";
		}
	}
	CPTrun();
}
let healLimit=0;
//CP rolls Dice
function CPTrun(){
	
	var diceArray = [12,20,12,20,20,20,20,20,20,20,20,20];
	var randomDice = diceArray[Math.floor(Math.random()*diceArray.length)];
	let result=0;
	if (randomDice == 20) {
		result = Math.floor(Math.random()*randomDice+1);
		document.getElementById('display3').innerHTML = result;
	HitorMissed(result,1);
	}
	else if (randomDice == 12){
		if(CHP <120 && healLimit < 5){
		result = Math.floor(Math.random()*randomDice+1);
		document.getElementById('display3').innerHTML = result;
		document.getElementById('display4').innerHTML = "Healed for:";
		healLimit++;
		Heal(result,1)}
		else{
			document.getElementById('display4').innerHTML = "Can't Heal";
		}
	}
}

function CPDamageDice(){
	var diceArray = [4,6,8,10];
	var randomDice = diceArray[Math.floor(Math.random()*diceArray.length)];
	let result=Math.floor(Math.random()*randomDice+1);
	dealDamage(randomDice,result,1)
}
// check if hit or missed
function HitorMissed(attack,turn){
	let AICrAC = "14";
	let word = "";
	let PAC = "15";
	if (turn ==0) {
		if (attack >= AICrAC && turn ==0) {
			 word = "you hit"
			document.getElementById('display2').innerHTML = word;
			startDamage();
		}
		else {
			word = "you Missed";
		document.getElementById('display2').innerHTML = word;
		}
	}
	else{
		if (attack >= PAC) {
			word = "you hit"
			document.getElementById('display4').innerHTML = word;
			CPDamageDice();
		}
		else{
			word = "you Missed";
		document.getElementById('display4').innerHTML = word;
		}
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
function dealDamage(dice,result,turn)
{
	if (turn ==0) {
		if (dice == 10) {
			document.getElementById('display').innerHTML = result;
			document.getElementById('display2').innerHTML = "Dagger Hit!";
			Health(result,0);
		}
		else if (dice == 8) {
			document.getElementById('display').innerHTML = result;
			document.getElementById('display2').innerHTML = "Magic Hit!";
			Health(result,0);

		}
			else if (dice == 6) {
				document.getElementById('display').innerHTML = result;
			document.getElementById('display2').innerHTML = "Rock Hit!";
			Health(result,0);
		}
			else if (dice == 4) {
				document.getElementById('display').innerHTML = result;
			document.getElementById('display2').innerHTML = "Life Steal!";
			Health(result,0);
			Heal(result,0);
		}
	}
	else{
				if (dice == 10) {
					document.getElementById('display3').innerHTML = result;
			document.getElementById('display4').innerHTML = "Dagger Hit!";
			Health(result,1);
		}
			else if (dice == 8) {
				document.getElementById('display3').innerHTML = result;
			document.getElementById('display4').innerHTML = "Magic Hit!";
			Health(result,1);

		}
			else if (dice == 6) {
				document.getElementById('display3').innerHTML = result;
			document.getElementById('display4').innerHTML = "Rock Hit!";
			Health(result,1);
		}
			else if (dice == 4) {
				document.getElementById('display3').innerHTML = result;
			document.getElementById('display4').innerHTML = "Life Steal!";
			Health(result,1);
			Heal(result,1);
		}
	}
}
	let PHP =0;
	let CHP =0;
//Update Display 5&6 based on turn
function Health(damage,turn)
{
	if (turn == 0) {
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
	else{
		PHP -=damage;
	 	document.getElementById('display5').innerHTML = "HP: "+ PHP;
	 	GameOver(PHP,CHP)
	}
}
// Heals off d12 or d4 attack
function Heal(dice,turn){
	if (turn == 0) {
		PHP +=dice;
		if(PHP > 120){
			PHP =120;
		}
	 	document.getElementById('display5').innerHTML = "HP: "+ PHP;
	 }
	 else{
	 		CHP +=dice;
	 		if(CHP >120){
	 			CHP =120;
	 		}
	 	document.getElementById('display6').innerHTML = "HP: "+ CHP;
	 }
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
	alert("Welcome to DiceRPG!!\n"+ 
		"1) Start a New Game to Begin playing\n"+
		"2) Choice Between The D12 to heal or D20 To Attack\n"+
		"3) You can only heal if you are below your starting HP\n"+
		"4) If you choice the D20 you will either hit or miss\n"+ 
		"   you will then be asked what type of attack you would like to do\n"+
		"5) The D4 is a Life Steal, D6 to throw a rock, D8 is Magic Attack , D10 is throw Daggers\n"+
		"6) You will then be asked to attack or heal again.\n"+
		"This will continue to happen till you or the Computer reach a HP of 0\n"+
		"GOOD LUCK and Have Fun!"
			);
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
