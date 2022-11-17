// Schreibe eine Funktion, die beim Drücken des Buttons von 100% bis 0% runter zählt (siehe Ergebnisvorschau).
// Nutze
// onclick
// setInterval
// clearInterval
// if, else if
// querySelector

const zeit = document.querySelector(".zeit");

let timer = 100;
let setInvervalTimer;

function startTimer() {

    let condition = () => {
        if (timer >= 0) {
            zeit.innerHTML = timer-- + "%";
        } else {
            clearIntervalTimer();
        }
    };

    setInvervalTimer = setInterval(condition, 100);
};

function clearIntervalTimer() {
    clearInterval(setInvervalTimer);
    console.log("alles super");
}