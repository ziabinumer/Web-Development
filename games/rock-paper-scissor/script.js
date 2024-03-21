const playerText = document.querySelector('#playerChoice');
const computerText = document.querySelector('#computerChoice');
const result = document.querySelector('#result');
const choiceBtns = document.querySelectorAll('.choiceBtn');

const choices = ['Rock', 'Scissor', 'Paper'];


choiceBtns.forEach(button => button.addEventListener('click', () => {
    let playerChoice = button.textContent;
    let computerChoice = computerChoose();
    playerText.innerText = playerChoice;
    computerText.innerText = computerChoose();
    result.innerText = declareWinner(playerChoice, computerChoice);
}))

function computerChoose() {
    return choices[Math.floor(Math.random() * 3)];
}

function declareWinner (playerChoice, computerChoice) {
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

