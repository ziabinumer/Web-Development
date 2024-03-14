const playerText = document.querySelector('#playerChoice');
const computerText = document.querySelector('#computerChoice');
const result = document.querySelector('#result');
const choiceBtns = document.querySelectorAll('.choiceBtn');

const choices = ['Rock', 'Scissor', 'Paper'];

let playerChoice, computerChoice;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    playerText.innerText = playerChoice = button.textContent;
    computerText.innerText = computerChoice = computerChoose();
    result.innerText = declareWinner();
}))

function computerChoose() {
    return choices[Math.floor(Math.random() * 3)];
}

function declareWinner () {
    if (playerChoice == computerChoice) return "Draw";
    else if (playerChoice == 'Rock') {
        return computerChoice == 'Paper' ? 'Computer Wins' : 'Player Wins';
    }
    else if (computerChoice == 'Rock') {
        return playerChoice == 'Paper' ? 'Player Wins' : 'Computer Wins';
    }
    else if (playerChoice == 'Scissor') {
        return computerChoice == 'Paper' ? 'Player Wins' : 'Computer Wins';
    }
    else if (playerChoice == 'Paper')
    {
        return computerChoice == 'Scissor' ? 'Computer Wins' : 'Player Wins';
    }
}

