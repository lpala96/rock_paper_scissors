// User Choice

const userChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput
    } else {
        return "Error!"
    }
}

const computerChoice = () => {
    let randomNumber = Math.floor(Math.random() *3)
    
    if (randomNumber === 0){
        return "rock"
    } else if(randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

