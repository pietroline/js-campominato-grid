
/*La funzione difficolta() gestisce il valore di difficoltà impostato.
Ritorna un vettore, in funzione della difficoltà impostata,
dove il primo elemento è il numero di caselle totali,
mentre il secondo elemento è il nome della classe corrispondendte alle caselle da aggiungere*/ 
function difficolta(livello){
    let caselle = 0;
    let ordine = "";
    
    if(livello == "facile"){
        caselle = 100;
        ordine = "dieci";
    }else if(livello == "difficile"){
        caselle = 89;
        ordine = "nove";
    }else if(livello == "impossibile"){
        caselle = 49;
        ordine = "sette";
    }/*else{
        alert("Risulta un errore critico! Contattare l'amministratore del sito");
       
    }*/

    return [caselle, ordine];
}



const livello = document.getElementById("difficolta").value;
difficolta(livello);

// console.log(livello)
// const play = document.getElementById("play");
// play.addEventListener("click", function(livello){

   
//     // console.log(livello)
//     difficolta(livello);

// });



// eseguo append delle caselle in funzione della difficoltà
const grid = document.getElementById("grid");
for(let i=1; i<=difficolta(livello)[0]; i++){

    const box = document.createElement("div");
    box.classList.add("quadrato");
    box.classList.add(`${difficolta(livello)[1]}`);
    
    grid.appendChild(box);

}