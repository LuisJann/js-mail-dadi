/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


// INPUT
const userMail = prompt("Qual è la tua mail?");
const whiteList = ["codoheyada-9436@yopmail.com", "figippougraze-5667@yopmail.com","weinneriprogrei-4837@yopmail.com","jeusoucifeiya-4466@yopmail.com","guttefroigreife-7754@yopmail.com","pahoilleuwissu-5898@yopmail.com","giannoneluigi10@gmail.com"];

// ELABORAZIONE
let isFound = false;

for (let i = 0; i < whiteList.length; i++){
    const mailWhiteList = whiteList [i];

    if(mailWhiteList === userMail){
        isFound = true;
    } else

    console.log(userMail, mailWhiteList, isFound);
}

// OUTPUT
if (isFound) {
    alert("Benvenuto!");
} else{
    alert ("La mail inserita non è corretta");
}
