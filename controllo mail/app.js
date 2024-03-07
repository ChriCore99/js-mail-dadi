// chiedere l'inserimento della mail dell'utente
    // inserire pulsante per trasmettere i dati e confrontarli con l'array
    const verifyElementDOM = document.getElementById('verify');

    // prendere i dati inseriti da un input di tipo "mail"
    const userMailElementDOM = document.getElementById('mail');

// al click del pulsante controllare se la mail è tra quele per l'accesso

    // esplicitare il click e la sua rispettiva azione 
    verifyElementDOM.addEventListener('click', function(){
        console.log(userMailElementDOM.value);
    })

    // esplicitare un array con delle mail valide
    const validMails = ['donato@gmail.com', 'samuel@gmail.com', 'gianluca@gmail.com'];

    // confrontare la mail ricevuta con la lista delle mail valide
    for (let i = 0, i < validMails.length, i++) {
        const mails = validMails[i];
        console.log(mails);
    }

// restituire messaggio positivo o negativo
    // se la mail corrisponde
        // restituire messaggio di approvazione
    // altimenti
        // mandere messaggio di accesso negato