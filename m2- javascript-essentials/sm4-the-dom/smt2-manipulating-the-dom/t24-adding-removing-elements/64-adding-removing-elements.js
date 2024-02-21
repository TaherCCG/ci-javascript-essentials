function addSquare() {
    var square=document.createElement("div");
    square.className="square";
    document.getElementById("squares-wrapper").appendChild(square);
}

function removeSquare(){
    var squares=document.getElementsByClassName("square")
    squares[0].remove();
}