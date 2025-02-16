// Get references to DOM elements
const list = document.getElementById("shoppingList");
const input = document.getElementById("item");
const button = document.getElementById("addItem");

// Function to add an item to the list
button.addEventListener("click", function () {
    const itemText = input.value;
    if (itemText.trim() === "") return; // Ignore empty input

    input.value = ""; // Clear input field

    // Create list item, span, and delete button
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    span.textContent = itemText;
    deleteButton.textContent = "Delete";

    // Append span and delete button to the list item
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    // Event listener to remove the item when delete button is clicked
    deleteButton.addEventListener("click", function () {
        list.removeChild(listItem);
    });

    // Focus back to the input field
    input.focus();
});
