let OneOnOne = document.getElementById('OneOnOne');
let OneCpu = document.getElementById('OneCpu');

let FT1 = document.getElementById('FT1');
let FT3 = document.getElementById('FT3');
let FT5 = document.getElementById('FT5');

let P1rock = document.getElementById('P1rock');
let P1paper = document.getElementById('P1paper');
let P1scissors = document.getElementById('P1scissors');
let P1lizard = document.getElementById('P1lizard');
let P1spock = document.getElementById('P1spock');

let P2rock = document.getElementById('P1rock');
let P2paper = document.getElementById('P1paper');
let P2scissors = document.getElementById('P1scissors');
let P2lizard = document.getElementById('P1lizard');
let P2spock = document.getElementById('P1spock');

let playerOnePoint = document.getElementById('playerOnePoint');
let playerTwoPoint = document.getElementById('playerTwoPoint');

let players = 0;
let rounds = 0;
playerOnePoint = 0;
playerTwoPoint = 0;
let player1Choice = "spock";
let player2Choice = "spock";

OneOnOne.addEventListener("click", () => {
    players = 2;
})

OneCpu.addEventListener("click", () => {
    players = 1;
})

FT1.addEventListener("click", () => {
    rounds = 1;
})

FT3.addEventListener("click", () => {
    rounds = 3;
})

FT5.addEventListener("click", () => {
    rounds = 5;
})

//p1
P1rock.addEventListener("click", () => {
    player1Choice = "rock"
})

P1paper.addEventListener("click", () => {
    player1Choice = "paper"
})

P1scissors.addEventListener("click", () => {
    player1Choice = "scissors"
})

P1spock.addEventListener("click", () => {
    player1Choice = "spock"
})

P1lizard.addEventListener("click", () => {
    player1Choice = "lizard"
})

//p2
P2rock.addEventListener("click", () => {
    player2Choice = "rock"
})

P2paper.addEventListener("click", () => {
    player2Choice = "paper"
})

P2scissors.addEventListener("click", () => {
    player2Choice = "scissors"
})

P2spock.addEventListener("click", () => {
    player2Choice = "spock"
})

P2lizard.addEventListener("click", () => {
    player2Choice = "lizard"
})

if (player1Choice == "rock" && player2Choice == "scissors" || player2Choice == "lizard") {
    playerOnePoint++;
} else if (player1Choice == "paper" && player2Choice == "rock" || player2Choice == "spock") {
    playerOnePoint++;
} else if (player1Choice == "scissors" && player2Choice == "paper" || player2Choice == "lizard") {
    playerOnePoint++;
} else if (player1Choice == "lizard" && player2Choice == "paper" || player2Choice == "spock") {
    playerOnePoint++;
} else if (player1Choice == "spock" && player2Choice == "scissors" || player2Choice == "rock") {
    playerOnePoint++;
} 