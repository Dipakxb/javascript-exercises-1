
// generate one of this three string "rock" "paper" "scissors"
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let choice;
    if(randomNumber <= 33 && randomNumber >= 0) {
        choice = "paper"
    }
    if(randomNumber <= 66 && randomNumber > 33){
        choice = "scissors"
    }
    if(randomNumber <= 99 && randomNumber > 66) {
        choice = "rock"
    }
    return choice
}

console.log(getComputerChoice())

// get human choice get user choice that should be "rock" "paper" "scissors"
function getHumanChoice() {
    let choice = ""
    do{
        choice = prompt(`Choose from "paper" "scissors" "rock" \nlet's play: `)
        console.log(choice)
    }
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors") 
}

getHumanChoice();

