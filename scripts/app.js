let homePage = document.getElementById("homePage");
let difficultyPage = document.getElementById("difficultyPage");
let gamePage = document.getElementById("gamePage");

let OneOnOne = document.getElementById("OneOnOne");
let OneCpu = document.getElementById("OneCpu");
let rulesPageBtn = document.getElementById("rulesPageBtn");

let FT1 = document.getElementById("FT1");
let FT3 = document.getElementById("FT3");
let FT5 = document.getElementById("FT5");
let backBtn = document.getElementById("backBtn");
let backBtn2 = document.getElementById("backBtn2");

let p1txt = document.getElementById("p1txt");
let P1rock = document.getElementById("P1rock");
let P1paper = document.getElementById("P1paper");
let P1scissors = document.getElementById("P1scissors");
let P1lizard = document.getElementById("P1lizard");
let P1spock = document.getElementById("P1spock");

let startBtn = document.getElementById("startBtn");
let round = document.getElementById("round");

let p2txt = document.getElementById("p2txt");
let P2rock = document.getElementById("P2rock");
let P2paper = document.getElementById("P2paper");
let P2scissors = document.getElementById("P2scissors");
let P2lizard = document.getElementById("P2lizard");
let P2spock = document.getElementById("P2spock");

let result = document.getElementById("result");
let endResult = document.getElementById("endResult");

let playerOneScore = document.getElementById("playerOneScore");
let playerTwoScore = document.getElementById("playerTwoScore");

let player2Name = document.getElementById("player2Name");
let p2side = document.getElementById("p2side");

let choseimg = document.getElementById("choseimg");
let choseimg2 = document.getElementById("choseimg2");

let players = 0;
let totalRounds = 0;
let currentRound = 0;
let maxrounds = 0
let playerOnePoint = 0;
let playerTwoPoint = 0;
let player1Choice = "";
let player2Choice = "";

function openHome() {
    homePage.classList.remove("hide")
    difficultyPage.classList.add("hide")
    gamePage.classList.add("hide")
}
function openDifficulty() {
    homePage.classList.add("hide")
    difficultyPage.classList.remove("hide")
    gamePage.classList.add("hide")
}
function openGame() {
    homePage.classList.add("hide")
    difficultyPage.classList.add("hide")
    gamePage.classList.remove("hide")
}

OneOnOne.addEventListener("click", () => {
    players = 2;
    openDifficulty();
    player2Name.innerText = "Player Two"
})

OneCpu.addEventListener("click", () => {
    players = 1;
    openDifficulty();
    player2Name.innerText = "CPU";
    p2side.classList.add("hide");
})

FT1.addEventListener("click", () => {
    totalRounds = 1;
    round.innerText = (currentRound + "/" + totalRounds)
    startBtn.classList.remove("hide");
    openGame();
})

FT3.addEventListener("click", () => {
    totalRounds = 3;
    maxrounds = 5;
    round.innerText = (currentRound + "/" + maxrounds)
    startBtn.classList.remove("hide");
    openGame();
})

FT5.addEventListener("click", () => {
    totalRounds = 5;
    maxrounds = 7;
    round.innerText = (currentRound + "/" + maxrounds)
    startBtn.classList.remove("hide");
    openGame();
})

backBtn.addEventListener("click", () => {
    openHome();
    fullReset();
})

backBtn2.addEventListener("click", () => {
    openHome();
    fullReset();
})


//RPSLS

P1rock.addEventListener("click", () => {
    player1Choice = "rock";
    p1txt.innerText = "Player One Has Chosen";
});
P1paper.addEventListener("click", () => {
    player1Choice = "paper";
    p1txt.innerText = "Player One Has Chosen";
});
P1scissors.addEventListener("click", () => {
    player1Choice = "scissors";
    p1txt.innerText = "Player One Has Chosen";
});
P1lizard.addEventListener("click", () => {
    player1Choice = "lizard";
    p1txt.innerText = "Player One Has Chosen";
});
P1spock.addEventListener("click", () => {
    player1Choice = "spock";
    p1txt.innerText = "Player One Has Chosen";
});

//player 2 btns
P2rock.addEventListener("click", () => {
    player2Choice = "rock";
    p2txt.innerText = "Player Two Has Chosen";
});
P2paper.addEventListener("click", () => {
    player2Choice = "paper";
    p2txt.innerText = "Player Two Has Chosen";
});
P2scissors.addEventListener("click", () => {
    player2Choice = "scissors";
    p2txt.innerText = "Player Two Has Chosen";
});
P2lizard.addEventListener("click", () => {
    player2Choice = "lizard";
    p2txt.innerText = "Player Two Has Chosen";
});
P2spock.addEventListener("click", () => {
    player2Choice = "spock";
    p2txt.innerText = "Player Two Has Chosen";
});

function resetRound() {
    player1Choice = "";
    player2Choice = "";
    p1txt.innerText = "...";
    p2txt.innerText = "...";
}

function fullReset() {
    player1Choice = "";
    player2Choice = "";
    p1txt.innerText = "...";
    p2txt.innerText = "...";
    round.innerText = "";
    result.innerText = "";
    endResult.innerText = "SCORE";
    playerOneScore.innerText = "0";
    playerTwoScore.innerText = "0";
    playerOnePoint = 0;
    playerTwoPoint = 0;
    players = 0;
    totalRounds = 0;
    currentRound = 0;
    maxrounds = 0;
    p2side.classList.remove("hide");
}

const randomapi = async () => {
    const promise = await fetch(`https://rpslsapi.azurewebsites.net/RPSLS`);
    const data =  await promise.text();
    player2Choice = data.toLowerCase();
    checkWin();
    console.log(player2Choice);
}
function startCPU(){
player2Name.textContent = "CPU"
p2side.classList.add("hide");
randomapi();
console.log(player2Choice);
}

function p1Win() {
    playerOnePoint++;
    currentRound++;
    playerOneScore.innerText = playerOnePoint;
    round.innerText = (currentRound + "/" + maxrounds)
}

function p2Win() {
    playerTwoPoint++;
    currentRound++;
    playerTwoScore.innerText = playerTwoPoint;
    round.innerText = (currentRound + "/" + maxrounds)
}

function checkWin() {
    if (player1Choice === "rock") {
        switch (player2Choice) {
            case ("rock"):
                result.innerText = "Its a Tie! Both chose Rock";
                resetRound()
                break;
            case ("paper"):
                p1txt.innerText = "You lost a point!";
                p2txt.innerText = "You won a point!";
                result.innerText = "Paper beats Rock!";
                p2Win();
                break;
            case ("scissors"):
                p1txt.innerText = "You won a point!";
                p2txt.innerText = "You lost a point!";
                result.innerText = "Rock beats Scissors!";
                p1Win();
                break;
            case ("lizard"):
                p1txt.innerText = "You won a point!";
                p2txt.innerText = "You lost a point!";
                result.innerText = "Rock beats Lizard!";
                p1Win();
                break;
            case ("spock"):
                p1txt.innerText = "You lost a point!";
                p2txt.innerText = "You won a point!";
                result.innerText = "Spock beats Rock!";
                p2Win();
                break;
            default:
                console.log("Rock was not picked by p1");
                break;
        }
    }

    //p1 picks paper
    if (player1Choice === "paper") {
        switch (player2Choice) {
            case ("rock"):
                p1txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Paper beats Rock!";
                p1Win();
                break;
            case ("paper"):
                result.innerText = "Its a Tie! Both chose Paper";
                resetRound();

                break;
            case ("scissors"):
                p2txt.innerText = "Better luck next time!";
                p1txt.innerText = "You got a point!";
                result.innerText = "Scissors beats paper!";
                p2Win();
                break;
            case ("lizard"):
                p2txt.innerText = "Better luck next time!";
                p1txt.innerText = "You got a point!";
                result.innerText = "Lizard beats paper!";
                p2Win();
                break;
            case ("spock"):
                p1txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Paper beats Spock!";
                p1Win();

                break;
            default:
                console.log("paper was not picked by p1");
                break;
        }
    }

    //p1 picks scissors
    if (player1Choice === "scissors") {
        switch (player2Choice) {
            case ("rock"):
                p2txt.innerText = "Better luck next time!";
                p2txt.innerText = "You got a point!";
                result.innerText = "Rock beats Scissors!";
                p2Win();
                break;
            case ("paper"):
                p2txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Scissors beats paper!";
                p1Win();
                break;
            case ("scissors"):
                result.innerText = "Its a Tie! Both chose Scissors";
                resetRound()

                break;
            case ("lizard"):
                p2txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Scissors beats Lizard!";
                p1Win();
                break;
            case ("spock"):
                p2txt.innerText = "Better luck next time!";
                p2txt.innerText = "You got a point!";
                result.innerText = "Spock beats scissors!";
                p2Win();
                break;
            default:
                console.log("Scissors was not picked by p1")
                break;
        }
    }
    // //p1 picks Lizard
    if (player1Choice === "lizard") {
        switch (player2Choice) {
            case ("rock"):
                p2txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Rock beats Lizard!";
                p2Win();
                break;
            case ("paper"):
                p2txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Paper beats Lizard!";
                p1Win();
                break;
            case ("scissors"):
                p2txt.innerText = "Better luck next time!";
                p2txt.innerText = "You got a point!";
                result.innerText = "Scissors beats Lizard!";
                p2Win();
                break;
            case ("lizard"):
                result.innerText = "Its a Tie! Both chose Lizard";
                resetRound()

                break;
            case ("spock"):
                p2txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Lizard beats Spock!";
                p1Win();
                break;
            default:
                console.log("Lizard was not picked by p1")
        }
    }

    // //p1 picks Spock
    if (player1Choice === "spock") {
        switch (player2Choice) {
            case ("rock"):
                p2txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Spock beats Rock!";
                p1Win();
                break;
            case ("paper"):
                p2txt.innerText = "Better luck next time!";
                p2txt.innerText = "You got a point!";
                result.innerText = "Paper beats Spock!";
                p2Win();
                break;
            case ("scissors"):
                p2txt.innerText = "You got a point!";
                p2txt.innerText = "Better luck next time!";
                result.innerText = "Spock beats Scissors!";
                p1Win();
                break;
            case ("lizard"):
                p2txt.innerText = "Better luck next time!";
                p2txt.innerText = "You got a point!";
                result.innerText = "Lizard beats Spock!";
                p2Win();
                break;
            case ("spock"):
                result.innerText = "Its a Tie! Both chose Spock";
                resetRound()

                break;
            default:
                console.log("Spock was not picked by p1")
        }
    }
}

function checkEnd() {
    if (playerOnePoint === totalRounds) {
        p1txt.innerText = "Player 1 Wins!";
        p2txt.innerText = "Player 2 Loses!"
        startBtn.classList.add("hide");
        endResult.innerText = "Good Game! Go back to replay!"
    }
    else if (playerTwoPoint === totalRounds) {
        p1txt.innerText = "Player 1 Loses!";
        p2txt.innerText = "Player 2 Wins!";
        startBtn.classList.add("hide");
        endResult.innerText = "Good Game! Go back to replay!"
    }
}

startBtn.addEventListener("click", () => {
    if (player1Choice === "" && player2Choice === "") {
        result.innerText = "Both Players have not made a choice";
        p1txt.innerText = ''
        p2txt.innerText = '';
    }
    else if (player1Choice === "") {
        result.innerText = "Player 1 has not made a choice";
        p1txt.innerText = '';
        p2txt.innerText = "";
    }
    else if (player2Choice === "") {
        result.innerText = "Player 2 has not made a choice";
        p2txt.innerText = '';
    }
    else {
        checkWin();
        player1Choice = "";
        player2Choice = "";
    }
    if (players === 1) {
        startCPU();
    }
    checkEnd();
});

