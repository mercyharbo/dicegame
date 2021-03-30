let rollDice = document.querySelector(".roll");
let player1 = prompt("Enter player name");
let player2 = prompt("Enter player name");

document.querySelector(".Player1").innerHTML = player1;
document.querySelector(".Player2").innerHTML = player2;

// Event Listener
rollDice.addEventListener("click", diceRoll);

function diceRoll(e) {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    let randomDiceImage = "dice" + randomNumber1 + ".png";
    let randonImageSource = "images/" + randomDiceImage;
    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randonImageSource);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = player1 + " Wins ";
    }else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = player2 + " Wins";
    }else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
    e.preventDefault();


}

