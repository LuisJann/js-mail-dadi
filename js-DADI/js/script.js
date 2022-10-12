/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */
let userNum = "";
let compNum = "";
const nutBtn = document.getElementById("nut-btn");

nutBtn.addEventListener ("click", function() {

    userNum = parseInt(Math.random() * (7 - 1) + 1);

    compNum = parseInt(Math.random() * (7 - 1) + 1);

    document.getElementById("user-num").innerHTML = `Il tuo numero è: ${userNum}`;
    document.getElementById("comp-num").innerHTML = `Il numero del computer è: ${compNum}`;
    
    if (userNum > compNum){
        document.getElementById("result").innerHTML = `Complimenti hai vinto!`;
    } else if (userNum < compNum){
        document.getElementById("result").innerHTML = `Mi dispiace hai perso!`;
    } else {
        document.getElementById("result").innerHTML = `Abbiamo un pareggio!`;
    }
})



