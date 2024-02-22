

function boxClicked() {
    // gets the target clicked
    let clicked = event.target;
    // gets the background color of target
    let bgColor = clicked.style.backgroundColor;
    // test in console to check values
    console.log(clicked);
    console.log(bgColor);
    
    if (bgColor === "green") {
        clicked.style.backgroundColor="orange";
    } else {
        clicked.style.backgroundColor ="green";
    }
}



