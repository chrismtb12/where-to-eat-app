/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;

init();

document.querySelector('.btn-choose').addEventListener('click', function() { // Anonymous function - Can't be used elsewhere
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 16 ) + 1 // How to generate a random number once when roll dice button is pressed
    
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
    }

}); 

document.querySelector('.btn-change').addEventListener('click', function() { // Anonymous function - Can't be used elsewhere
    if(gamePlaying) {
        // Add current score to the GLOBAL score
        scores[activePlayer] += roundScore;
    
        // Update the UI
        document.querySelector('#score-' + activePlayer).style.display = 'none'.textContent = scores[activePlayer];
    
        // Check if player won the game
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
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
        
        document.getElementById('current-0').style.display = 'none'.textContent = '0';
        document.getElementById('current-1').style.display = 'none'.textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);
    
function init () {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none'; // How to change the CSS of the webpage to hide the dice at the start 

    document.getElementById('score-0').style.display = 'none'.textContent = '0';
    document.getElementById('score-1').style.display = 'none'.textContent = '0';
    document.getElementById('current-0').style.display = 'none'.textContent = '0';
    document.getElementById('current-1').style.display = 'none'.textContent = '0';
    document.getElementById('name-0').textContent = 'Chris';
    document.getElementById('name-1').textContent = 'Denise';
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



