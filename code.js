function play_craps() { //Defines the function play_craps
    console.log("play_craps() function started"); //Writes a message to the console saying that the game has started
    var die1 = Math.ceil(Math.random() * 6); //defines a variable that is assigned a random float between 0 and 6, which is rounded up.
    var die2 = Math.ceil(Math.random() * 6); //defines another variable that is assigned a random float between 0 and 6, which is rounded up.
    var sum = die1 + die2; //defines a variable that is assigned the sum of the two random numbers
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //Write the value of the first die to the screen
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; //Write the value of the second die to the screen
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //Write the value of the sum of the two dice to the screen
    if (sum == 7 || sum == 11) { //if the sum of the random numbers is equal to 7 or 11...
        document.getElementById("finalResult").innerHTML = "CRAPS - you lose!"; //Write a losing statement to the screen.
        document.getElementById("lossRes").innerHTML = loss; //Displays the number of losses to the screen.
        loss++; //Updates the number of losses
    }
    else if (die1 == die2 && die1 % 2 == 0) { //If you didn't lose, the two dice have equal values, and the values are both even...
        document.getElementById("finalResult").innerHTML = "DOUBLES - you win!"; //Write a victory statement to the screen
        document.getElementById("winsRes").innerHTML = wins; //Displays the number of wins to the screen
        wins++; //Updates the number of wins
    }
    else { //If you didn't win or lose...
        document.getElementById("finalResult").innerHTML = "Draw - You neither won nor lost. Please try again!"; //Write a statement saying that you didn't win or lose
        document.getElementById("tieRes").innerHTML = tie; //Displays the number of draws to the screen
        tie++; //Updates the number of draws
    }

}

function blastoff() {
    var currTime = 50;
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}