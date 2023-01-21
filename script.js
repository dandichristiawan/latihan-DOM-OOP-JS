let rock_div = document.getElementById('batu-user')
let paper_div = document.getElementById('kertas-user')
let scissors_div = document.getElementById('gunting-user')
let com_rock_div = document.getElementById('batu-comp');
let com_paper_div = document.getElementById('kertas-comp');
let com_scissors_div = document.getElementById('gunting-comp');
let resetBtn_div = document.getElementById('reset');


class RockPaperScissor {
    constructor() {
        this.playerChoice = '';
        this.computerChoices = ['rock', 'paper', 'scissors'];
    }
    computerPlay() {
        let computerChoice = Math.floor(Math.random() * this.computerChoices.length)
        return this.computerChoices[computerChoice]
    }
    setPlayerChoice() {
        return this.playerChoice
    }

    playRound(setPlayerChoice) {
        let computerSelection = this.computerPlay();
        switch (setPlayerChoice) {
            case "rock":
                scissors_div.disable = true;
                paper_div.disable = true;
                if (computerSelection === "scissors") {
                    com_scissors_div.classList.add('computer-choice')
                } else if (computerSelection === "paper") {
                    com_paper_div.classList.add('computer-choice')
                } else {
                    com_rock_div.classList.add('computer-choice')
                    console.log("It's a tie!");
                }
                break;
            case "paper":
                rock_div.disable = true;
                scissors_div.disable = true;
                if (computerSelection === "rock") {
                    com_rock_div.classList.add('computer-choice')
                } else if (computerSelection === "scissors") {
                    com_scissors_div.classList.add('computer-choice')
                } else {
                    com_paper_div.classList.add('computer-choice')
                    console.log("It's a tie!");
                }
                break;
            case "scissors":
                rock_div.disable = true;
                paper_div.disable = true;
                if (computerSelection === "paper") {
                    com_paper_div.classList.add('computer-choice')
                } else if (computerSelection === "rock") {
                    com_paper_div.classList.add('computer-choice')
                } else {
                    com_scissors_div.classList.add('computer-choice')
                    console.log("It's a tie!");
                }
                break;
        }
    }

    clear() {
        this.playerChoice = '';
    }

}

let game = new RockPaperScissor();


rock_div.addEventListener("click", function (event) {
    rock_div.classList.add('player-choice')
    game.setPlayerChoice = event.target.id;
    game.playRound('rock');
});

paper_div.addEventListener("click", function (event) {
    paper_div.classList.add('player-choice')
    game.setPlayerChoice = event.target.id;
    game.playRound('paper');
});

scissors_div.addEventListener("click", function (event) {
    scissors_div.classList.add('player-choice')
    game.setPlayerChoice = event.target.id;
    game.playRound('scissors');
});

resetBtn_div.addEventListener("click", function () {
    rock_div.classList.remove('player-choice');
    paper_div.classList.remove('player-choice');
    scissors_div.classList.remove('player-choice');
    com_rock_div.classList.remove('computer-choice');
    com_paper_div.classList.remove('computer-choice');
    com_scissors_div.classList.remove('computer-choice');
    game.clear();
})
// let restartChoices = document.querySelectorAll("choice")

// resetBtn_div.addEventListener('click', () =>
//     clear()
// );
