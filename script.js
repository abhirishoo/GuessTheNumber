const userInput = document.querySelector('.inputing')
const result = document.querySelector('.result')
const form = document.querySelector('form')
const allGuesses= document.querySelector('.allguesses')
const startGameBtn = document.querySelector('.startGame')
const submitBtn =document.querySelector('.submitbtn')
var allGuessesArray = []

let randomValue = Math.round((Math.random()*100))
form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if(userInputValue === randomValue){
        result.innerText = 'You got it, Congrats!'
        startGameBtn.disabled = false;
        submitBtn.disabled= true;
        

    }else if( userInputValue > randomValue){
        result.innerText = 'Too High!'
        startGameBtn.disabled = true; 
        
    }else{
        result.innerText = 'Too Low!'
        startGameBtn.disabled = true;
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText = 'Your Guesses: ' + allGuessesArray.join(', ')
    form.reset();
})

startGameBtn.addEventListener('click',()=>{
    result.innerText = ''
    allGuessesArray=[]
    allGuesses.innerText =''
    startGameBtn.disabled = true
    submitBtn.disabled = false
    randomValue = Math.round((Math.random()*100))
})


