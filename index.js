// User's Choice

const userChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput
    } else {
        return "Error!"
    }
}

// generate computers choice

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

// Determine winner

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return "This game is tied"
    }

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer Won"
        } else {
            return "You Won!"
        }
    }
    
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer Won"
        } else {
            return "You Won!"
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer Won"
        } else {
            return "You Won!"
        }
    }

    if(userChoice === "bomb") {
        return "You BOMBED that!"
    }
}


// Play game

const playGame = (userInput, computerInput) => {
    userInput = userChoice("paper")
    computerInput = computerChoice()

    console.log(determineWinner(userInput, computerInput))
    
}

playGame()

