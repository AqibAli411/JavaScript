const form = document.querySelector('form');
let randomNumber = Math.floor(Math.random()*100+1);

form.addEventListener('submit',function(e){
  e.preventDefault();

  const givenNumber = parseInt((document.querySelector('#guessField')).value);
  const finalResult = document.querySelector('.lowOrHi');
  let remainingGuesses = document.querySelector('.lastResult');
  let numberOfGuesses = parseInt(remainingGuesses.innerHTML);
  
  if(givenNumber === randomNumber){
    finalResult.innerHTML = '🎉 Correct! You Win!';
    disableGame();
    addRestartButton();
  }
  else{
    remainingGuesses.innerHTML = --numberOfGuesses;
    finalResult.innerHTML = (givenNumber < randomNumber) ? '🔽 Too Low':'🔼 Too High';

    const previousGuesses = document.querySelector('.guesses');
    const addText = document.createTextNode(`${givenNumber} `);
    previousGuesses.appendChild(addText);
  }

  if(numberOfGuesses === 0){
    finalResult.innerHTML = `The game is over. The number was ${randomNumber}`;
    disableGame();
    addRestartButton();
  }

})

function disableGame() {
  document.querySelector('#guessField').disabled = true;
  document.querySelector('#subt').disabled = true;
}

function addRestartButton() {
  if (!document.querySelector('#restartButton')) {
    const restartBtn = document.createElement('button');
    restartBtn.id = 'restartButton';
    restartBtn.innerHTML = '🔄 Start Over';
    restartBtn.style.display = 'block';
    restartBtn.style.marginTop = '10px';
    restartBtn.style.padding = '8px 15px';
    restartBtn.style.fontSize = '16px';
    restartBtn.style.cursor = 'pointer';

    document.querySelector('.resultParas').appendChild(restartBtn);

    restartBtn.addEventListener('click', resetGame);
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  
  document.querySelector('#guessField').value = '';
  document.querySelector('#guessField').disabled = false;
  document.querySelector('#subt').disabled = false;
  document.querySelector('.guesses').innerHTML = '';
  document.querySelector('.lowOrHi').innerHTML = '';
  document.querySelector('.lastResult').innerHTML = '10';

  document.querySelector('#restartButton').remove();
}