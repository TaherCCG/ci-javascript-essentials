let cocktails = ["Daiquari", "Dry Martini", "Margatrita", "Manhattan", "Mojito", "Mai Tai"];

let list=document.createElement("ul");
let listItems = "";
for (x = 0; x < cocktails.length; x++) {
    listItems += '<li>' + cocktails[x] + '</li>';
    console.log(listItems);
    
}

list.innerHTML = listItems;

document.body.appendChild(list);

