var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName= enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth= 50;

    //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    console.log ("Your player is still alive!");
}

else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
var playerAttack = 10;
var playerMoney= 10;

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