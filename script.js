let randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber)

const submitButton = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')

const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let y = false;

const p = document.createElement('p')

let prevGuess = []
let numberofGuess = 1

let playGame = true;

if(playGame){
    submitButton.addEventListener('click', (event)=>{
        event.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    //
    if(isNaN(guess) || guess<1 || guess>100){
        alert('Please enter a vild number between 1 and 100')
    }
    else{
        prevGuess.push(guess);
        if(numberofGuess >= 10){
            checkGuess(guess)
            displayGuess(guess)
            if(y){
                console.log(Ye)
                y=false;
            }
            else{
                displayMessage(`Game Over. Random number was ${randomNumber}`)
            }
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //
    if(guess === randomNumber){
        console.log("Yesyes")
        displayMessage(`You Guessed it right 😍🎉`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too Low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Too High`)
    }
}

function displayGuess(guess) {
    //
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}`
    numberofGuess++
    remaining.innerHTML = `${11-numberofGuess}`
}

function displayMessage(message) {
    //
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    submitButton.style.display = 'none'
    // p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" class="button">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    y = true;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (event)=>{
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numberofGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `10`;
        userInput.removeAttribute('disabled')
        submitButton.style.display = 'block'
        startOver.removeChild(p)
        lowOrHigh.innerHTML = ''

        playGame = true;
    });
}

