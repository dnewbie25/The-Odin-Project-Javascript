function computerPlay(){
    // returns a random choice
    choice = ['rock', 'paper', 'scissors'];
    // formula is Math.random() * (max - min) + min, inclusive-exclusive
    random_choice = Math.random() * (3 - 0) + 0;
    return choice[Math.floor(random_choice)];
}

function playerPlay(){
    // returns the choice made by the player
    choice = prompt("Choose Rock (r), Paper (p) or Scissors (s):\n");
    choice = choice.toLowerCase();
    if (choice == 'r'){
        return 'rock';
    } else if (choice == 'p') {
        return 'paper';
    } else if (choice == 's') {
        return 'scissors';
    }else {
        console.log('Incorrect value!')
        return 0;
    }
}

function playRound(playerSelection, computerSelection){
    // plays a single round of rock, paper & scissors
    console.log(computerSelection);
    if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'rock':
                console.log("It's a draw.");
                return 'draw';
                break;
            case 'paper':
                console.log("You lose. Paper beats Rock.");
                return 'lose';
                break;
            case 'scissors':
                console.log("You win. Rock beats Scissors.");
                return 'win';
                break;
        }
    }else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'rock':
                console.log("You win. Paper beats Rock.");
                return 'win';
                break;
            case 'paper':
                console.log("It's a draw.");
                return 'draw';
                break;
            case 'scissors':
                console.log("You lose. Scissors beat Paper.");
                return 'lose';
                break;
        }
    }else if (playerSelection == 'scissors'){
        switch (computerSelection) {
            case 'rock':
                console.log("You lose. Rock beats Scissors.");
                return 'lose';
                break;
            case 'paper':
                console.log("You win. Scissors beat Paper.");
                return 'win';
                break;
            case 'scissors':
                console.log("It's a draw.");
                return 'draw';
                break;
        }
    }else{
        return 0;
    }
}

function winner_loser(wins, loses){
    // evaaluates the winner
    if (wins > loses){
        return `You win against the machine. ${wins} wins vs. ${loses} machine wins`
    }else {
        return `You lose T_T. ${wins} wins vs. ${loses}`
    }
}

function game(){
    // play 5 rounds of the game and prints out the winner
    wins = 0;
    loses = 0;
    rounds = 0;
    while(rounds < 5) {
        result = playRound(playerPlay(), computerPlay());
        if (result == 'draw') {
            rounds ++;
            // continue;
        } else if (result == 'lose') {
            loses += 1;
            rounds ++;
            // continue;
        }else if (result == 'win') {
            wins += 1;
            rounds ++;
            // continue;
        }else{
            console.log('Invalid choice. Try again')
        }
    }

    console.log(winner_loser(wins, loses))
}