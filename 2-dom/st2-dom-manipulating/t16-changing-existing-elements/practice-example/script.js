/*
Note: ignore the function here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/
function update() {
    let box = document.getElementById('main-box');
    box.style.width = "300px";

    let paragraph = document.getElementsByClassName('special')[0];
    paragraph.removeAttribute('class');

    let emptyBox = document.getElementById('empty-box');
    emptyBox.innerHTML = "<h2>I'm not empty anymore!</h2>"
    emptyBox.style.width = "300px";
    emptyBox.style.backgroundColor = "yellow";
}