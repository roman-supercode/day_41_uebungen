// Schreibe eine Funktion, die einen Countdown in Minuten anzeigt und sich pausieren und neu starten lässt.

const input = document.getElementById("minutes");
const output = document.getElementById("time");


let minutes = 0;
let sec = 60;
let interval; // Platzhalter für die setInterval Methode

function startMinCountdown() {
    const inputToMinutes = Number(input.value);
    minutes = inputToMinutes - 1;

    // 0 und NaN = boolean False, ! kehrt es um in True
    if (!inputToMinutes) {
        return alert("Nur Zahlen erlaubt!");
    }
    // Setze das Interval für den Countdown
    interval = setInterval(intervalTimer, 1000);

    // Input wird "geleert"
    input.value = "";
}

function intervalTimer() {
    if (sec <= 0) {
        // console.log("test");
        clearInterval(interval);
    }

    output.innerHTML = minutes + ":" + sec;

    if (sec === 0) {
        minutes--;
        sec = 60;
    }
    sec--;
}

function pauseMinCountdown() {
    clearInterval(interval);
}

function restartMinCountdown() {
    interval = setInterval(intervalTimer, 1000);
}