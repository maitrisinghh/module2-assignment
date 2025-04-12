(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // Controller for "To Buy" list
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  // Controller for "Already Bought" list
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getItemsBought();
  }

  // Shared Service
  function ShoppingListCheckOffService() {
    var service = this;

    // Initial list of items to buy
    var itemsToBuy = [
      { name: "Milk", quantity: 2 },
      { name: "Donuts", quantity: 12 },
      { name: "Cookies", quantity: 10 },
      { name: "Chocolate", quantity: 5 },
      { name: "Apples", quantity: 8 }
    ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.buyItem = function (itemIndex) {
      var item = itemsToBuy.splice(itemIndex, 1)[0];
      itemsBought.push(item);
    };
  }

})();
