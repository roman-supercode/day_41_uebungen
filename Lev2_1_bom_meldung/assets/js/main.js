// Schreibe eine Funktion die beim Start, die Zahlen runter zählt.
// Schau Dir die Ergebnisvorschau an.

// Der HTML und CSS Code befindet sich im Kommentar.
// Nutze 
// window.onload
// setInterval()
// clearInterval()
// getElementsByClassName()/getElementById()
// if, else if

const message = document.querySelector(".message");
const count = document.getElementById("count");

let countNumber = 10;
let interval;

function countDown() {

    function counting() {
        if (countNumber >= 0) {
            // console.log(countNumber--);
            count.innerHTML = countNumber--;
        } else {
            message.style.display = "none";
            clear();
        }
    }
    interval = setInterval(counting, 1000);
};

function clear() {
    clearInterval(interval);
}