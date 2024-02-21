/*
Note: ignore the functions here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/

function createShoppingList() {
    // Create a div to hold everything
    let shoppingListDiv = document.createElement('div');

    // Set the div's innerHTML to the shopping list
    // Notice the use of backticks (``) to create a multiline string
    shoppingListDiv.innerHTML = `
        <h3>Shopping List:</h3>
        <ul>
            <li>Milk</li>
            <li>Butter</li>
            <li>Eggs</li>
        </ul>
    `;

    // Find the first button and insert the div before it
    let firstList = document.getElementsByTagName('button')[0];
    document.body.insertBefore(shoppingListDiv, firstList);
}