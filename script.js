const rock = 3;
const scissors = 2;
const paper = 1;
const playerSelection = paper;

let computerPlay = () => {
    let values = [rock, paper, scissors];
        response = values[Math.floor(Math.random() * values.length)];
        return(response);
} //randomly return 1, 2, or 3

const computerSelection = computerPlay();
console.log(computerSelection)
function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) { 
        return('you win gg lel');
    } else if (playerSelection < computerSelection) {
        return('you lose noob');
    } else {
        return('tie idiots');
    }
} //compare size of computerPlay to a player selection

console.log( playRound(playerSelection, computerSelection) );