let counterValue = 0;
const initialValue = 0;

function updateCounter() {
    document.getElementById("counter").innerText = counterValue;
}

function increase() {
    counterValue++;
    updateCounter();
}

function decrease() {
    counterValue--;
    updateCounter();
}

function reset() {
    counterValue = initialValue;
    updateCounter();
}
