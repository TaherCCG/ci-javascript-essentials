function changeCards() {
    let para=document.getElementsByClassName("card");
    // para[0].style.backgroundColor ="red";
    // para[1].style.backgroundColor ="red";
    // the above also passed
    for (var x = 0; x < para.length; x++) {
        para[x].style.backgroundColor ="red";
    }
}