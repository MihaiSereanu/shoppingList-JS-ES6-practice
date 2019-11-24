class Storage {
  static getItems() {
    let items;
    if (localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
  }

  static addItem(item) {
    const items = Storage.getItems();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }

  static removeItem(itemKey) {
    const items = Storage.getItems();
    items.forEach(function(item, index) {
      if (item.itemKey === itemKey) {
        items.splice(index,1)
      }
    });
    localStorage.setItem("items", JSON.stringify(items))
  }
 }
