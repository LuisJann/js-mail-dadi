/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */
let userNum = "";
let compNum = "";

for (let i = 1; i <= 1; i++){
    const nutNum = parseInt(Math.random() * (7 - 1) + 1);
    userNum = nutNum;
    console.log(userNum);
}

for (let i = 1; i <= 1; i++){
    const nutNum = parseInt(Math.random() * (7 - 1) + 1);
    compNum = nutNum;
    console.log(compNum);
}

if (userNum > compNum){
    alert("Complimenti hai vinto!")
} else if (userNum < compNum){
    alert("Mi dispiace questa volta hai perso!")
} else {
    alert("Abbiamo un pareggio!")
}
