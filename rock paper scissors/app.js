// user choice
const userScore = document.getElementById("user-score");
const scoreComputer = document.getElementById("comp-score");

const choseRock = () => {
	userChoice = 'rock';
	playGame();
}

document.getElementById("rock").onclick = choseRock;

const chosePaper = () => {
	userChoice = 'paper';
	playGame();
}

document.getElementById("paper").onclick = chosePaper;

const choseScissors = () => {
	userChoice = 'scissors';
	playGame();
}

document.getElementById("scissors").onclick = choseScissors;

// computer choice

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// who wins
function compWin(computerWinner){
    document.getElementById("results").innerHTML = (`${computerWinner}`);
    scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1; 
    	}
function userWin(userWinner){
	document.getElementById("results").innerHTML = (`${userWinner}`);
    userScore.innerHTML = parseInt(userScore.innerHTML)+1; 
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return document.getElementById("results").innerHTML = 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      compWin('Rock covers paper. Sorry, computer wins.');
    } else {
      userWin('Rock smashes Scissors. Congratulations you won!');
    }
  }
  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      compWin('Scissors cuts paper. Sorry, computer wins.');
    } else {
      userWin('Paper covers Rock. Congratulations, you won!');
    }
  }
  if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      compWin('Rock smashes scissors. Sorry, computer wins.');
    } else {
      userWin('Scissors cuts Paper. Congratulations, you won!');
    }
  }
};

const playGame = () => {
  
  const computerChoice = getComputerChoice();

  console.log(determineWinner(userChoice, computerChoice));

console.log(userChoice);
console.log(computerChoice);

};

// keep score