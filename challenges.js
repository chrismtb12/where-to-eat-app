/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/**********************
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6s in a row. After that, it's the next player's turn.
(HINT: Always save the previous dice roll in a seperate variable.)
2. Add and input field into the HTML where players can set the winning score, so that they can change the
predefined score of 100. (HINT: you can read that value with a .value property in JavaScript.)
3. Add another dice to the same, so that there are two dices now. The player looses his current score when
one of them is a 1. (HINT: You will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScores, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() { // Anonymous function - Can't be used elsewhere
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6 ) + 1 // How to generate a random number once when roll dice button is pressed
        var dice2 = Math.floor(Math.random() * 6 ) + 1 // How to generate a random number once when roll dice button is pressed
    
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';
    
    
        // 3. Update the round score IF the rolled number was not a 1
        if (dice !== 1 && dice2 !== 1 ) {
            // Add score
            roundScore = roundScore + dice + dice2; // The same as writing roundScore = roundscore + dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore; // How to change text content using DOM

        } else {
            // Next player
            nextPlayer();
        }
        
    }

}); 

document.querySelector('.btn-hold').addEventListener('click', function() { // Anonymous function - Can't be used elsewhere
    if(gamePlaying) {
        // Add current score to the GLOBAL score
        scores[activePlayer] += roundScore;
    
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
    
        // Check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
      
    }
});

// Creating a nextPlayer function to avoid the DRY principle for changing player depending on the game
function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Ternary Operator
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);
    
function init () {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';// How to change the CSS of the webpage to hide the dice at the start 

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

/************ HOW TO PLAY ************/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





