let playerScore = 0;
let computerScore = 0;

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
    
    

    

    function game() {
        while (playerScore < 5 && computerScore < 5) {
            const playerSelection = prompt("pick rock paper or scissors").toLowerCase();
            const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        }
        
        }

    function winGame() {
        if (playerScore == 5) {
            return "you win!"
        } else if (computerScore == 5) {
            return "you lose!"
        }
    }

    
    
    
    
   game();
    console.log(winGame());
   console.log(playerScore);
   console.log(computerScore);
    

    
    




