let playerScore = 0;
let computerScore = 0;
const body = document.body;

function getComputerChoice() {
     const pick = ["rock", "paper", "scissors"];
     return pick[Math.floor(Math.random() * pick.length)]
};


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
        return `you win ${playerSelection} beats ${computerSelection}` ; } else if (playerSelection === "rock"  && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock" ) {
            computerScore += 1;
            return `you lose ${computerSelection} beats ${playerSelection}`;
        }
    };

    

const Rock = document.querySelector('#buttonRock');
    buttonRock.addEventListener('click', (e) => {
        playerSelection = 'rock';
        const computerSelection = getComputerChoice();
         console.log(playRound(playerSelection, computerSelection));
         console.log(playerScore, computerScore)
         console.log(winGame());
         
         
         
     });

const Paper = document.querySelector('#buttonPaper');
    buttonPaper.addEventListener('click', (e) => {
        playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore, computerScore);
        console.log(winGame());
         
     });

const Scissors = document.querySelector('#buttonScissors');
    buttonScissors.addEventListener('click', (e) => {
        playerSelection = 'scissors';
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore, computerScore)
        console.log(winGame());
         
     });

const results = document.querySelector('#results');
     results.textContent = ''
const score = document.querySelector('#score');
    

 
function winGame() {
        if (playerScore == 5) {
            return "you win!"
        } else if (computerScore == 5) {
            return "you lose!"
        };
        
    }

        
        

   

  

    
    




