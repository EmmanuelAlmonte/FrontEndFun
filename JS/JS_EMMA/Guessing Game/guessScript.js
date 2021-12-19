let maxGuess =  parseInt(prompt("Enter a max guess: "))
const targetNum = Math.floor(Math.random() * maxGuess) + 1
guess = null 
console.log(targetNum)
while(guess !== targetNum){
    guess = parseInt(prompt("Enter a guess for a number"))
}

console.log('You figured out the guess!!!! HURRAYYY!')