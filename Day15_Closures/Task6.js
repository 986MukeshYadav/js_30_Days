const itemManager = (function() {
    let items = [];
  
    return {
      addItem: function(item) {
        items.push(item);
      },
      removeItem: function(item) {
        items = items.filter(i => i !== item);
      },
      listItems: function() {
        return items;
      }
    };
  })();
  
  itemManager.addItem('apple');
  itemManager.addItem('banana');
  console.log(itemManager.listItems()); // Logs: ['apple', 'banana']
  itemManager.removeItem('apple');
  console.log(itemManager.listItems()); // Logs: ['banana']
  