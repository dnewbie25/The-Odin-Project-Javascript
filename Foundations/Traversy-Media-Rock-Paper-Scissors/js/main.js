const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

// the score board will be an object
const scoreboard = {
    player: 0,
    computer: 0
}

// Play game
function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// Get computer choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }else if(rand <= 0.67){
        return 'paper';
    }else{
        return 'scissors';
    }
}

// Get game winner
function getWinner(player, computer){
    // return 'player' === player won
    // return 'computer' === computer won
    if(player === computer){
        return 'draw'
    }else if(player === 'rock'){
        if(computer === 'paper'){
            return 'computer';
        }else{
            return 'player';
        }
    }else if(player === 'paper'){
        if(computer === 'rock'){
            return 'player';
        }else{
            return 'computer';
        }
    }else{
        if(computer === 'paper'){
            return 'player';
        }else{
            return 'computer';
        }
    }

}

// Show winner
function showWinner(winner, computerChoice){
    if(winner === 'player'){
        // increase player score
        scoreboard.player++;
        // show modal result
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }else if (winner === 'computer'){
        // increase computer score
        scoreboard.computer++;
        // show modal result
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }else{ // this is the draw
        // show modal result
        result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }

    // show the score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
}

// Clear modal - aka the way to close the modal window by click out of the modal block
function clearModal(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
}

// Retsart Game
function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
    restart.style.display = 'none';
}

// Event listeners
choices.forEach((choice) => {
    choice.addEventListener('click', play);
});

window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);