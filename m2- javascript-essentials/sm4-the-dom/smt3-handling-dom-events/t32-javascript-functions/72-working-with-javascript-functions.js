function boxClicked(event) {
    let clicked = event.target;
    let originalColor= clicked.style.backgroundColor;
    
    if (originalColor === "green") {
        clicked.style.backgroundColor = "orange";
    } else if (originalColor === "orange") {
        clicked.style.backgroundColor = "green";
    }
}

let box= document.getElementsByClassName("box");

for ( x = 0; x < box.length; x++) {
    box[x].addEventListener('click',boxClicked);
}

