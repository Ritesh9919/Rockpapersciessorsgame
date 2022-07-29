const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('error')
    }
  };
  
  const getComputerChoice = () => {
   let randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 0) {
     return 'rock';
   } else if (randomNumber === 1) {
     return 'paper';
   } else if (randomNumber === 2) {
     return 'scissors';
   } 
  };
  
  
  
  const determineWinner = (userChoice, computerChoice) => {
    
    if (userChoice === computerChoice) {
      return 'Game was tie';
    }
    if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'bomb') {
    return 'You win!'
  }
  
  };
  
  
  
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
  
  
    };
  
  playGame();
  
  
  
  
  
  
  