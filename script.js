const container = document.querySelector('#container');
const rBtn = document.querySelector('#rock');
const sBtn = document.querySelector('#scissors');
const pBtn = document.querySelector('#paper');

const rock = 3;
const scissors = 2;
const paper = 1;

let pScore = 0;
let cScore = 0;

const scoreID = document.querySelector('#score');
const scoreContent = document.createElement('div');
const results = document.querySelector('#results');
const result = document.createElement('div');
const win = document.querySelector('#win');
const winner = document.createElement('div');

let computerPlay = () => {
    let values = [rock, paper, scissors];
        response = values[Math.floor(Math.random() * values.length)];
        return(response);
} //randomly return 1, 2, or 3

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 1 && computerSelection === 3) {
        pScore++;
        return('you win gg lel');
    } else if (playerSelection === 3 && computerSelection === 1) { 
        cScore++;
        return('you lose noob');
    } else if (playerSelection > computerSelection) { 
        pScore++;
        return('you win gg lel');
    } else if (playerSelection < computerSelection) {
        cScore++;
        return('you lose noob');
    } else if (playerSelection === computerSelection) {
        return('tie idiots');
    } else {
        return('game aborted')
    }
} //compare size of computerPlay to a player selection

rBtn.addEventListener('click', () => {
    winner.textContent = '';
    results.textContent = '';

    let computerSelection = computerPlay();
    let solo = playRound(rock, computerSelection);

    result.classList.add('result');
    result.textContent = solo;
    scoreID.classList.add('scoreContent');
    scoreContent.textContent = (`Player score: ${pScore} Computer score: ${cScore}`);

    results.appendChild(result);
    scoreID.appendChild(scoreContent);

    if (pScore === 5) {
        winner.classList.add('winner');
        winner.textContent = 'Player wins.';
        win.appendChild(winner);

        pScore = 0;
        cScore = 0;

    
    } else if (cScore === 5) {
        winner.classList.add('winner');
        winner.textContent = 'Computer wins.';
        win.appendChild(winner);

        pScore = 0;
        cScore = 0;
    
    }
});

sBtn.addEventListener('click', () => {
    winner.textContent = '';
    results.textContent = '';

    let computerSelection = computerPlay();
    let solo = playRound(scissors, computerSelection);

    result.classList.add('result');
    result.textContent = solo;
    scoreID.classList.add('scoreContent');
    scoreContent.textContent = (`Player score: ${pScore} Computer score: ${cScore}`);


    results.appendChild(result);
    scoreID.appendChild(scoreContent);

    if (pScore === 5) {
        winner.classList.add('winner');
        winner.textContent = 'Player wins.';
        win.appendChild(winner);

        pScore = 0;
        cScore = 0;

    
    } else if (cScore === 5) {
        winner.classList.add('winner');
        winner.textContent = 'Computer wins.';
        win.appendChild(winner);

        pScore = 0;
        cScore = 0;
    
    }
});

pBtn.addEventListener('click', () => {
    winner.textContent = '';
    results.textContent = '';

    let computerSelection = computerPlay();
    let solo = playRound(paper, computerSelection);

    result.classList.add('result');
    result.textContent = solo;
    scoreID.classList.add('scoreContent');
    scoreContent.textContent = (`Player score: ${pScore} Computer score: ${cScore}`);

    results.appendChild(result);
    scoreID.appendChild(scoreContent);

    if (pScore === 5) {
        winner.classList.add('winner');
        winner.textContent = 'Player wins.';
        win.appendChild(winner);

        pScore = 0;
        cScore = 0;

    
    } else if (cScore === 5) {
        winner.classList.add('winner');
        winner.textContent = 'Computer wins.';
        win.appendChild(winner);

        pScore = 0;
        cScore = 0;
    
    }
});


