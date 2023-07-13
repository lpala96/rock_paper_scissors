// User Choice

const userChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput
    } else {
        return "Error!"
    }
}


