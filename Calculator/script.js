let display = document.getElementById("display");

function appendValue(value) {
    display.classList.remove("error");
    display.value += value;
}

function clearDisplay() {
    display.classList.remove("error");
    display.value = "";
}

function calculate() {
    try {
        display.classList.remove("error");
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
        display.classList.add("error");
    }
}
