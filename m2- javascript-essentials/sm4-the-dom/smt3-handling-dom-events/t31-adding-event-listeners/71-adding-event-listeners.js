let box = document.getElementById("box");

function changeBorder() {
    box.style.borderColor = "grey";
}

function changeBackground() {
    box.style.backgroundColor = "pink";
}

function revertBack() {
    box.style.borderColor = "white";
    box.style.backgroundColor = "lightblue";
}

// Write your code here
box.addEventListener('click',changeBorder);
box.addEventListener('mouseover',changeBackground);
box.addEventListener('mouseleave',revertBack);
