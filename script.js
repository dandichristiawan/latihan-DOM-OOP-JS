// DOM HTML
let rockDiv = document.getElementById('batu')
let paperDiv = document.getElementById('kertas')
let scissorsDiv = document.getElementById('gunting')
let rockPcDiv = document.getElementById('batu-pc')
let paperPcDiv = document.getElementById('kertas-pc')
let scissorsPcDiv = document.getElementById('gunting-pc')
let result = document.getElementById('result-box')
let result_text = document.getElementById('result-text')
let originalText = result_text.textContent;
let resetBtnDiv = document.getElementById('resetBtn')



class RockPaperScissors {
    constructor() {
        this.playerChoice = ''
        this.computerChoices = ['rock', 'paper', 'scissors']
        this.played = false
    }

    //method untuk me-random pilihan computer
    computerPlay() {
        let computerChoice = Math.floor(Math.random() * this.computerChoices.length)
        return this.computerChoices[computerChoice]
    }

    //method untuk mengambil pilihan player, agar bisa dipanggil method dibawah
    setPlayerChoice() {
        return this.playerChoice
    }

    //method untuk menentukan permainan sudah dimulai atau belum
    setPlayed() {
        return this.played
    }

    //method untuk menentukan pilihan player dan membandingkan dengan pilihan computer
    playRound(setPlayerChoice) {
        let computerSelect = this.computerPlay()
        if (this.played === false) {
            switch (setPlayerChoice) {
                case "rock":
                    if (computerSelect === "scissors") {
                        scissorsPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = 'PLAYER<br>WIN'
                    } else if (computerSelect === "paper") {
                        paperPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = "COMPUTER<br>WIN"
                    } else {
                        rockPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = "DRAW"
                    }
                    break;
                case "paper":
                    if (computerSelect === "rock") {
                        rockPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = 'PLAYER<br>WIN'
                    } else if (computerSelect === "scissors") {
                        scissorsPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = "COMPUTER<br>WIN"
                    } else {
                        paperPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = "DRAW"
                    }
                    break;
                case "scissors":
                    if (computerSelect === "paper") {
                        paperPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = 'PLAYER<br>WIN'
                    } else if (computerSelect === "rock") {
                        rockPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = "COMPUTER<br>WIN"
                    } else {
                        scissorsPcDiv.classList.add('computer-choice')
                        result.classList.add('result-animation')
                        result_text.classList.add('color-text')
                        result_text.innerHTML = "DRAW"
                    }
                    break;
            }
        }
        this.played = true;
    }
    //method untuk mengclear pilihan pemain dan mengubah state permainan belum dimulai
    clear() {
        this.playerChoice = '';
        this.played = false;
    }
}

let game = new RockPaperScissors();

//menghandle div gambar batu
rockDiv.addEventListener('click', function (event) {
    if (game.setPlayed() === false) {
        rockDiv.classList.add('player-choice')
        game.setPlayerChoice = event.target.id
        game.playRound('rock');
    }
})

//menghandle div gambar kertas
paperDiv.addEventListener('click', function (event) {
    if (game.setPlayed() === false) {
        paperDiv.classList.add('player-choice')
        game.setPlayerChoice = event.target.id
        game.playRound('paper');
    }
})

//menghandle div gambar gunting
scissorsDiv.addEventListener('click', function (event) {
    if (game.setPlayed() === false) {
        scissorsDiv.classList.add('player-choice')
        game.setPlayerChoice = event.target.id
        game.playRound('scissors');
    }
})
//menghandle div gambar reset
resetBtnDiv.addEventListener('click', function () {
    rockDiv.classList.remove('player-choice')
    paperDiv.classList.remove('player-choice')
    scissorsDiv.classList.remove('player-choice')
    rockPcDiv.classList.remove('computer-choice')
    paperPcDiv.classList.remove('computer-choice')
    scissorsPcDiv.classList.remove('computer-choice')
    result.classList.remove('result-animation')
    result_text.classList.remove('color-text')
    result_text.textContent = originalText
    game.clear()
})