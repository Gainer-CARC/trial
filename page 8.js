let occupied = 0;
const maxSlots = 30;

function updateDisplay() {
    document.getElementById("occupied").innerText = occupied;
    document.getElementById("remaining").innerText = maxSlots - occupied;
}

function increase() {
    if (occupied < maxSlots) {
        occupied++;
        updateDisplay();

        if (occupied === maxSlots) {
            alert("Parking is full");
        }
    }
}

function decrease() {
    if (occupied > 0) {
        occupied--;
        updateDisplay();
    }
}

function GoToMngInfo() {
    window.location.href = "page 7.html";
}