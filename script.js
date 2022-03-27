const rock = 3;
const scissors = 2;
const paper = 1;

let computerPlay = () => {
    let values = [rock, paper, scissors];
        response = values[Math.floor(Math.random() * values.length)];
        return(response);
} //randomly return 1, 2, or 3

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) { 
        return('you win gg lel');
    } else if (playerSelection < computerSelection) {
        return('you lose noob');
    } else if (playerSelection === computerSelection) {
        return('tie idiots');
    } else {
        return('game aborted')
    }
} //compare size of computerPlay to a player selection

let game = () => {
    for (let i = 1; i < 6; i++) {
        const computerSelection = computerPlay();
        let playerSelection = window.prompt('enter rock paper or scissors.', undefined);
            if (playerSelection.toLowerCase() === 'rock') {
                playerSelection = rock;
            } else if (playerSelection.toLowerCase() === 'scissors') {
                playerSelection = scissors;
            } else if (playerSelection.toLowerCase() === 'paper') {
                playerSelection = paper;
            } else {
                alert('are you sure you entered that correctly?')
            }
        let solo = playRound(playerSelection, computerSelection);
        console.log(i, `computer:${computerSelection} player:${playerSelection}`, solo)
    }
}

document.getElementById('start').onclick = function() { game(); };

