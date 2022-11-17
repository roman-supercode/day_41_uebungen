// Schreibe eine Funktion, die nach X Sekunden einen Text anzeigt.

// console.log("Starte Warten für 3 Sekunden");

// const textTimeout = setTimeout(textAnzeige, 3000);

// function textAnzeige() {
//     console.log("Erledigt. Du hast 3 Sekunden verschwendet");
// }


//--------------------------------------------------------------
// Schreibe eine Funktion die das Ergebnis der Vorschau anzeigt.

// function zeit() {
//     const date = new Date();
//     const time = date.toLocaleTimeString("de-DE");
//     console.log(time);
// }

// const zeitInterval = setInterval(zeit, 1000);


// -------------------------------------------------------------
// Schreibe eine Funktion die das Ergebnis der Vorschau ausgibt.

let hours = 10;
function workHours() {
    if (hours > 0) {
        console.log(hours--);

    } else {
        console.log("Endlich Feierabend!");
        clearMyInterval();
    }
}

const interVal = setInterval(workHours, 1000);

function clearMyInterval() {
    clearInterval(interVal);
}

