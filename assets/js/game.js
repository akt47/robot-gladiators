//function to start a new game 
var startGame = function() {
    //reset player stats
    playerInfo.reset();
//fight enemy robot one at a time looping over
    for (var i =0; i < enemyInfo.length; i++) {
        // player stats
        console.log(playerInfo);
        //player alive and still fighting
    if (playerInfo.health > 0) {
        //informing what round you are in 
        window.alert("Welcome to Robot Gladiators! Round" + (i + 1) );
    

        // pick new enemy to fight based on the index of the enemyNames array
     var pickedEnemyObj= enemyInfo[i];

     //reset enemyHealth before starting new fight
        pickedEnemyObj.health= randomNumber(40,60);
    
       console.log(pickedEnemyObj);

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
     fight(pickedEnemyObj);
    

        //if we're not at the last enemy in the array and player still alive
        if (playerInfo.health > 0 && i < enemyInfo.length -1) {
        //ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        // if yes, take them to the store() function
        if (storeConfirm) {
        shop ();
        }
    }
}
    //if player dies, break loop and start endGame function
        else {
        break;
        }
    }
    endGame();
};


var endGame = function() {
    //if player is still alive, player wins!
        window.alert("The game has now ended. Let's see how you did!");
    

    //ask player if theyd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game 
        startGame();

    }
 else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var fight = function(enemy) {

    var isPlayerTurn = true;

    if (Math.random()> 0.5) {
        isPlayerTurn = false;
    }

    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip()) {
                //if true, leave fight by breaking loop
                break;
        }
       
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable 
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log (
        playerInfo.name +  "attacked"  + enemy.name +  ". "  + enemy.name +  'now has'  + enemy.health +  'health remaining.'
    );

    //check enemy's health 
    if (enemy.health <= 0) {
        window.alert(enemy.name +  "has died!");

        //award player money for winning
        playerInfo.money = playerInfo.money + 20;

        //leave while () loop since enemy is dead
        break;
    
    }
    else {
        window.alert(enemy.name +  "still has"  + enemy.health +  "health left.");
    }
    //player gets attacked first 
}
else {
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value of 'playerHealth' variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    
    playerInfo.health = Math.max(0, playerInfo.health - damage); 
    console.log (
        enemy.name + "attacked" + playerInfo.name +  "."  + playerInfo.name + "now has"  + playerInfo.health +  "health remaining"
    );
    //check player's health
    if (playerInfo.health <= 0 ) {
        window.alert(playerInfo.name + "has died!");
        break;
    }
    else {
        window.alert(playerInfo.name +  "still has"  + playerInfo.health + "health left.");
    }
}
//switch turn order for next round
    isPlayerTurn= !isPlayerTurn;
}
};

var shop = function () {
    //ask player what they'd like to do 
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "1":
            playerInfo.refillHealth();
            break;
            
        case "2":
            playerInfo.upgradeAttack();
            break;
    
        case "3":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};


//function to set name
var getPlayerName = function() {
    var name = "";

while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
}

    console.log("Your robot's name is" + name);
    return name;
};

var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max-min +1) + min);

    return value;
};

var fightOrSkip = function() {
//ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight === "" || promptFight === null) {
        window.alert ("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();
    
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        //return true if player wants to leave 
        return true;
    }
}

return false;    
    };
    

// game info 
    var playerInfo = {
        name: getPlayerName(),
        health: 100,
        attack: 10,
        money: 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        },
        refillHealth: function() {
            if (this.money >=7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
        upgradeAttack: function() {
            if (this.money >=7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack +=6;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
    };

    console.log(playerInfo.name, playerInfo.attack, playerInfo.health)

    var enemyInfo = [
        {
            name: "Roborto", 
            attack: randomNumber(10,14)
        },
        {
            name: "Amy Android" ,
            attack: randomNumber(10,14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10,14)
        }
    ];

     //start the game when the page loads
     startGame();
    