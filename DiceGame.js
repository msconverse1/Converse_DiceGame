



function ranDieRoll(input) {
 return Math.floor(Math.random()*input+1)
}

//generate a random dice number for the Player
function rollDice(input){
	let result;
	if (input == 20) {
		result = ranDieRoll(input);
		document.getElementById('display').innerHTML = result;
		HitorMissed(result,0);
	}
	else if (input == 10 || input ==8 || input ==6 || input ==4) {
		result = ranDieRoll(input);
		dealDamage(input,result,0);
	}
	else if (input == 12){
		if(PHP <120){
		result = ranDieRoll(input);
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
//CP rolls Dice by using the array length
function CPTrun(){
	var diceArray = [12,20,12,20,20,20,20,20,20,20,20,20];
	var randomDice = diceArray[Math.floor(Math.random()*diceArray.length)];
	let result=0;
	if (randomDice == 20) {
		result = ranDieRoll(randomDice);
		document.getElementById('display3').innerHTML = result;
		HitorMissed(result,1);
	}
	else if (randomDice == 12){
		if(CHP <120 && healLimit < 5){
			result = ranDieRoll(randomDice);
			document.getElementById('display3').innerHTML = result;
			document.getElementById('display4').innerHTML = "Healed for:";
			healLimit++;
			Heal(result,1)
		}
		else{
			document.getElementById('display4').innerHTML = "Can't Heal";
		}
	}
}
//CP rolls die if they are attacking
function CPDamageDice(){
	var diceArray = [4,6,8,10];
	var randomDice = diceArray[Math.floor(Math.random()*diceArray.length)];
	let result=ranDieRoll(randomDice);
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
	toggletoDamage();
}
//print result number to the correct dice box
function printHtmlResult(id,result){
	document.getElementById(id).innerHTML = result;
}
//print the string to the correct display box
function printHtmlString(id,string){
	document.getElementById(id).innerHTML = string;
}
//Create Damage and update the UI for correct player
function dealDamage(dice,result,turn)
{
	//Player update based of die that was rolled
	if (turn ==0) {
		if (dice == 10) {
			printHtmlResult('display',result);
			printHtmlString('display2',"Dagger Hit!");
			Health(result,0);
		}
		else if (dice == 8) {
			printHtmlResult('display',result);
			printHtmlString('display2',"Magic Hit!");
			Health(result,0);
		}
		else if (dice == 6) {
			printHtmlResult('display',result);
			printHtmlString('display2',"Rock Hit!");
			Health(result,0);
		}
		else if (dice == 4) {
			printHtmlResult('display',result);
			printHtmlString('display2',"Life Steal!");
			Health(result,0);
			Heal(result,0);
		}
	}
	//CP update based off die that was rolled
	else{
		if (dice == 10) {
			printHtmlResult('display3',result);
			printHtmlString('display4',"Dagger Hit!");
			Health(result,1);
		}
		else if (dice == 8) {
			printHtmlResult('display3',result);
			printHtmlString('display4',"Magic Hit!")
			Health(result,1);

		}
		else if (dice == 6) {
			printHtmlResult('display3',result);
			printHtmlString('display4',"Rock Hit!");
			Health(result,1);
		}
		else if (dice == 4) {
			printHtmlResult('display3',result);
			printHtmlString('display4',"Life Steal!");
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
		printHtmlResult('display6',"HP: "+ CHP);
	 	toggletoD12D20();
		 GameOver(PHP,CHP)
	}
	else{
		PHP -=damage;
		printHtmlResult('display5',"HP: "+ PHP);
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
		printHtmlResult('display5',"HP: "+ PHP);
	 }
	 else{
	 		CHP +=dice;
	 		if(CHP >120){
	 			CHP =120;
	 		}
	 		printHtmlResult('display6',"HP: "+ CHP);
	 }
}

// create new game
function NewGame(){
	 PHP =120;
	 CHP =120;
	 alert("A new Game has started!");
	toggletoD12D20();
	printHtmlResult('display5',"HP: "+ PHP);
	printHtmlResult('display6',"HP: "+ CHP);
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
		TurnoffDisplay();
	}
	else if(CHP <=0){
		alert("GameOver!!! Player is the Winner!!!");
		TurnoffDisplay();
	}
}
//turn off Dice buttons
function TurnoffDisplay(){
	document.getElementById("D4").style.display  = "none";
	document.getElementById("D6").style.display  = "none";
	document.getElementById("D8").style.display  = "none";
	document.getElementById("D10").style.display = "none";
	document.getElementById("D12").style.display = "none";
	document.getElementById("D20").style.display = "none";
}
//turn on the display for d12 and d20 an turn off rest
function toggletoD12D20(){
	document.getElementById("D4").style.display  = "none";
	document.getElementById("D6").style.display  = "none";
	document.getElementById("D8").style.display  = "none";
	document.getElementById("D10").style.display = "none";
	document.getElementById("D12").style.display = "inline";
	document.getElementById("D20").style.display = "inline";
}
//turn on the display for d4, d6, d8, d10 and turn off d12 and d20
function toggletoDamage(){
	document.getElementById("D4").style.display  = "inline";
	document.getElementById("D6").style.display  = "inline";
	document.getElementById("D8").style.display  = "inline";
	document.getElementById("D10").style.display = "inline";
	document.getElementById("D12").style.display = "none";
	document.getElementById("D20").style.display = "none";
}