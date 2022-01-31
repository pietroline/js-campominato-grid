
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

function createElement(grid, caselle, ordine){
    for(let i=1; i<=caselle; i++){

        const box = document.createElement("div");
        box.classList.add("quadrato");
        box.classList.add(ordine);
        
        grid.appendChild(box);

    }
}



const play = document.getElementById("play");
play.addEventListener("click", function(){

    document.getElementById("grid").innerHTML = "";

    let livello = document.getElementById("difficolta").value;

    difficolta(livello);


    // eseguo append delle caselle in funzione della difficoltà
    const grid = document.getElementById("grid");
    createElement(grid, difficolta(livello)[0], difficolta(livello)[1])
   
   
});



