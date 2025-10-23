// function getUserChoice(userInput){
//   userInput = userInput.toLowerCase();
//   if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
//     return userInput;
//   }
//   else{
//     console.log('Error! Invalid choice.');
//   }
// }

const Result = {
  Win : 0,
  Loss : 0,
  Tie : 0
}

function playGame(userInput){

  // for the computer choice
  const randomNumber = Math.random();
  if (randomNumber <= 1/3) {
    computerChoice = 'rock';
  } else if (randomNumber <= 2/3) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  // for the final result
  if (userInput.toLowerCase() === computerChoice) {
    Result.Tie += 1;
    alert(`Your choice is: ${userInput}, computer choice is: ${computerChoice}, It is a TIE! Wins: ${Result.Win}, Losses: ${Result.Loss}, Ties: ${Result.Tie}`);
  
  } 
  else if (userInput.toLowerCase() === 'rock' && computerChoice === 'scissors' ||
          userInput.toLowerCase() === 'paper' && computerChoice === 'rock' ||
          userInput.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    Result.Win += 1;
    alert(`Your choice is: ${userInput.toLowerCase()}, computer choice is: ${computerChoice}, YOU WIN! Wins: ${Result.Win}, Losses: ${Result.Loss}, Ties: ${Result.Tie}`);
  } 
  else {
      Result.Loss +=1;
      alert(`Your choice is: ${userInput}, computer choice is: ${computerChoice}, YOU LOSE! Wins: ${Result.Win}, Losses: ${Result.Loss}, Ties: ${Result.Tie} `);
  }

}

// a function to display score

function getScore(){
  return document.querySelector(".score").innerHTML = `Wins: ${Result.Win}, Losses: ${Result.Loss}, Ties: ${Result.Tie}``
}

// a function to reset score

function reset(){
  Result.Loss = 0;
  Result.Tie = 0;
  Result.Win = 0;
  alert(`Score is now reset!  Wins: ${Result.Win}, Losses: ${Result.Loss}, Ties: ${Result.Tie}`);
}