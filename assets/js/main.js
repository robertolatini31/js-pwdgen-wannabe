// chiedo nome utente
const user_name = prompt('inserisci il tuo nome');
console.log(user_name);

// chiedo cognome utente

const user_second_name = prompt('inserisci il tuo cognome');
console.log(user_second_name);

// chiedo il colore preferito

const fav_color = prompt('inserisci il tuo colore preferito');
console.log(fav_color);

//chiedo il giorno di nascita

const birth_day = Number(prompt('inserisci il giorno della tua nascita'));
console.log(birth_day);

// stampo il messaggio benvenuto

document.getElementById('user_data').innerHTML = `Ciao ${user_name} la tua password è:`;

// stampo la pwd
document.write(user_name + user_second_name + fav_color + birth_day);