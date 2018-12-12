
//gen random number based on die as input
function ranDieRoll(input) {
 return Math.floor(Math.random()*input+1)
}

//generate a random dice number for the Player
function rollDice(input){
	let result;
	if (input == 20) {
		result = ranDieRoll(input);
		printHtmlResult('display',result);
		HitorMissed(result,0);
	}
	else if (input == 10 || input ==8 || input ==6 || input ==4) {
		result = ranDieRoll(input);
		dealDamage(input,result,0);
	}
	else if (input == 12){
		if(PHP <120){
		result = ranDieRoll(input);
		printHtmlString('display2',"Healed for:");
		Heal(result,0);
		}
		else{
			printHtmlString('display2',"Can't Heal");
		}
	}
	CPTrun();
}
let healLimit=0;
//CP rolls Dice by using the array length
function CPTrun(){
	let diceArray = [12,20,12,20,20,20,20,20,20,20,20,20];
	let randomDice = diceArray[Math.floor(Math.random()*diceArray.length)];
	let result=0;
	if (randomDice == 20) {
		result = ranDieRoll(randomDice);
		printHtmlResult('display3',result);
		HitorMissed(result,1);
	}
	else if (randomDice == 12){
		if(CHP <120 && healLimit < 5){
			result = ranDieRoll(randomDice);
			printHtmlResult('display3',result);
			printHtmlString('display4',"Healed for:");
			healLimit++;
			Heal(result,1)
		}
		else{
			printHtmlString('display4',"Can't Heal");
		}
	}
}
//CP rolls die if they are attacking
function CPDamageDice(){
	let diceArray = [4,6,8,10];
	let randomDice = diceArray[Math.floor(Math.random()*diceArray.length)];
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
			printHtmlString('display2',word);
			startDamage();
		}
		else {
			word = "you Missed";
			printHtmlString('display2',word);
		}
	}
	else{
		if (attack >= PAC) {
			word = "you hit"
			printHtmlString('display4',word);
			CPDamageDice();
		}
		else{
			word = "you Missed";
			printHtmlString('display4',word);
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
			toggleDamageColor();
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
var audio = new Audio();
function audioPlay(audiofile,bloop){

	audio.src = audiofile;
	audio.load();
	audio.loop = bloop;
	audio.play();
}

// create new game
function NewGame(){
	 PHP =20;
	 CHP =20;
	 alert("A new Game has started!");
	toggletoD12D20();
	printHtmlResult('display5',"HP: "+ PHP);
	printHtmlResult('display6',"HP: "+ CHP);
	audioPlay('The Last Encounter (90s RPG Version).mp3',true);
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
		TurnoffDisplay();
		alert("GameOver!!! CP is the Winner!!!");
		audioPlay('GameOver.mp3',false);
	
	}
	else if(CHP <=0){
		TurnoffDisplay();
		alert("GameOver!!! Player is the Winner!!!");
		audioPlay('Victory.mp3',false);
		
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

 	//add a window settimeout for pause after 1300 then next time func is called reset the duration an set to run
function toggleDamageColor()
{
	let theElement = document.getElementById('PlayerID');
 	theElement.style.animationDuration = "1300ms";
 	theElement.style.animationPlayState = "running";
 	//mill has to be lower than val so it does not bleed back into the animation call
 	setTimeout(function(){theElement.style.animationPlayState = "paused";}, 1250);

}