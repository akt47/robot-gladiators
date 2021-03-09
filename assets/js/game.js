var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney= 10;
// check to see if the value of the playerHealth variable is greater than 0

//function to start a new game 
var startGame = function() {
    //reset player stats
    playerHealth = 100
    playerAttack = 10;
    playerMoney = 10;

    for (var i =0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName= enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth= 50;

    //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);


    //if we're not at the last enemy in the array
    if ( playerHealth > 0 && i < enemyNames.length -1) {
        //ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        // if yes, take them to the store() function
        if (storeConfirm) {
        shop ();
    }
}

else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
    }
};

var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
}

    //ask player if theyd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game 
        startGame();

    }

    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

    var shop = function () {
        //ask player what they'd like to do 
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
        // use switch to carry out action
    switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
        if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
      break;
      case "UPGRADE": // new case 
    case "upgrade":
        if (playerMoney >= 7){
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
        }

        else {
            window.alert("You don't have enough money!");
        }
      break;
      case "LEAVE": //new case 
      case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
    };

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index ");
}

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd liked to fight or run

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
        }
    }
  // if player choses to fight, then fight
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable 
    enemyHealth = enemyHealth - playerAttack;
    console.log (
        playerName +  'attacked'  + enemyName +  '. '  + enemyName +  'now has'  + enemyHealth +  'health remaining.'
    );

    //check enemy's health 
    if (enemyHealth <= 0) {
        window.alert(enemyName +  "has died!");

        //award player money for winning
        playerMoney = playerMoney + 20;

        //leave while () loop since enemy is dead
        break;
        
    }
    else {
        window.alert(enemyName +  "still has"  + enemyHealth +  "health left.");
    }
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value of 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack; 
    console.log (
        enemyName + "attacked" + playerName +  "."  + playerName + "now has"  + playerHealth+  "health remaining"
    );
    //check player's health
    if (playerHealth <= 0 ) {
        window.alert(playerName + "has died!");
        break;
    }
    else {
        window.alert(playerName + "still has" + playerHealth + "health left.");
    }
}
};
        fight();

    for(var i=0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth= 50;
        fight(pickedEnemyName);
    };

    //start the game when the page loads
    startGame();
