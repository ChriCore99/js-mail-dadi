// chiedere l'inserimento della mail dell'utente
// inserire pulsante per trasmettere i dati e confrontarli con l'array
const verifyElementDOM = document.getElementById("verify");

// prendere i dati inseriti da un input di tipo "mail"
const userMailElementDOM = document.getElementById("mail");

// esplicitare un array con delle mail valide
const validMails = [
  "donato@gmail.com",
  "samuel@gmail.com",
  "gianluca@gmail.com",
];
let verifiedValidMails = false;

// al click del pulsante controllare se la mail è tra quele per l'accesso

// esplicitare il click e la sua rispettiva azione
verifyElementDOM.addEventListener("click", function () {
  const userMail = userMailElementDOM.value;

  // confrontare la mail ricevuta con la lista delle mail valide
  for (let i = 0; i < validMails.length; i++) {
    // restituire messaggio positivo o negativo
    if (userMail === validMails[i]) {
      verifiedValidMails = true;
    }
  }

  if (verifiedValidMails === true) {
    // se la mail corrisponde
    // restituire messaggio di approvazione
    console.log("E-Mail accettata");
  } else {
    // altimenti
    console.log("E-Mail non valida. Riprova"); // mandere messaggio di accesso negato
  }
});
