// Display
class Display {
  static displayBooks() {
    const items = Storage.getItems();
    items.forEach(function(item) {
      Display.addItemToList(item);
    });
  }

  static addItemToList(item) {
    const table = document.getElementById('shopping-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.itemKey}</td>
                     <td>${item.itemName}</td>
                     <td>${item.itemQuant}</td>
                     <td><a href="#" class="delete">X</a></td>`;
    table.appendChild(row);
  }

  static deleteItem(target) {
    if (target.classList.contains("delete")) {
      target.parentElement.parentElement.remove();
    }
  }

  static Clear() {
    document.getElementById('itemName').value = '';
    document.getElementById('itemQuant').value = '';
  }
}
