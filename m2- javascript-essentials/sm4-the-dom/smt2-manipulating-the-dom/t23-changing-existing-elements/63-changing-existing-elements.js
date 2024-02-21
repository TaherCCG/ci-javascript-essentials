function turnOff() {
    let box = document.getElementById('switch');
    box.style.backgroundColor = "red";
    box.innerHTML = "OFF";
}

// The code below was not needed for the solution, but it was useful for testing

function turnOn() {
    let box = document.getElementById('switch');
    box.style.backgroundColor = "green";
    box.innerHTML = "ON";
}

function toggle() {
    let box = document.getElementById('switch');
    if (box.innerHTML === "ON") {
        turnOff();
    } else {
        turnOn();
    }
}



