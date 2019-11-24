class Item {
  constructor(itemName, itemQuant, itemKey) {
    this.itemName = itemName;
    this.itemQuant = itemQuant;
    this.itemKey = key();
  }
}

// EVENTS
// display
document.addEventListener("DOMContentLoaded", Display.displayBooks);

// add
document.querySelector('.add_fields').addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById('itemName').value;
  const quantity = document.getElementById('itemQuant').value;
  const key = document.getElementById('unique').value;

  const item = new Item(name, quantity, key);
  Storage.addItem(item);
  Display.addItemToList(item);
  Display.Clear();
});

// delete
document.querySelector(".itemList").addEventListener("click", function(event) {
  Display.deleteItem(event.target)
  Storage.removeItem(event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
});


// Helper functions

// generate "random" ID
var key = function() {
  return Math.random().toString(10).substr(2,9);
}

// prevent non-numeric input on quantity field
document.getElementById("itemQuant").addEventListener("keypress", function(event) {
  if (event.which < 48 || event.which > 57)
    event.preventDefault();
})
