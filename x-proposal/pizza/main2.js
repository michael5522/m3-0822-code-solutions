var Orders = [
  {
    time: '12:00 AM',
    customer: 'Stoner Pete',
    cost: 48,
    quantity: 4,
    type: 'pepperoni'
  },
  {
    time: '11:50 AM',
    customer: 'Jo Schmit',
    cost: 15,
    quantity: 1,
    type: 'works'
  },
  {
    time: '11:50 AM',
    customer: 'Willem Song',
    cost: 10,
    quantity: 1,
    type: 'cheese'
  },
  {
    time: '11:55 AM',
    customer: 'Julie Styles',
    cost: 12,
    quantity: 1,
    type: 'pepperoni'
  },
  {
    time: '12:00 PM',
    customer: 'Julie Styles',
    cost: 12,
    quantity: 1,
    type: 'pepperoni'
  },
  {
    time: '1:00 PM',
    customer: 'Real Company Inc',
    cost: 300,
    quantity: 30,
    type: 'cheese'
  },
  {
    time: '1:50 PM',
    customer: 'Redbeard The Pyrate',
    cost: 120,
    quantity: 10,
    type: 'mushroom'
  },
  {
    time: '1:50 PM',
    customer: 'KJ',
    cost: 30,
    quantity: 2,
    type: 'works'
  },
  {
    time: '2:30 PM',
    customer: 'Zack Attack',
    cost: 45,
    quantity: 3,
    type: 'works'
  },
  {
    time: '6:00 PM',
    customer: 'Sandy Member',
    cost: 30,
    quantity: 3,
    type: 'cheese'
  }
];
/* eslint-env jquery */
/**
 * Challenge: Create a document ready with JQuery which will call into
 * your "initializeApp" function.
 */
$(document).ready(initializeApp);
/**
 * Challenge: Create an empty "initializeApp" function.
 */
var OList;
function initializeApp() {
  OList = new OrderList({
    x1: '.item-area',
    x2: '.sort-time',
    x3: '.sort-customer',
    x4: '.sort-type',
    x5: '.sort-quantity',
    x6: '.sort-cost',
    x7: '#sortInput',
    x8: '#typeInput',
    x9: '#caloriesFromInput',
    x10: '#caloriesToInput',
    x11: '#priceFromInput',
    x12: '#priceToInput',
    x13: '#nameInput'
  });
  OList.loadOrder(Orders);
  // console.log(OList);
  OList.displayAllOrders();
  OList.addEventListeners();
}
/**
 * Challenge: Create a ES6 class called "Order", in the constructor
 * accept a parameter representing the order data, save this to a "data"
 * property in the object. Create a "domElements" property which will
 * be an object with 2 properties, one called "list" and the other
 * "detail" both will be empty object literals.
 *
 * Create a function called "getData" which will return the data property.
 *
 * Create a function called "renderRow" which will build the DOM
 * elements using the data saved in the "data" property and return
 * the DOM elements back to the caller.
 *
 * - stop here and make sure you've tested the Order class functionality.
 *  [ ] renderRow displays correctly
 */
class Order {
  constructor(xxx) {
    this.data = xxx;
    this.domElements = {};
  }

  getData() {
    return this.data;
  }

  renderRow() {
    var $row = $('<div>', {
      class: 'row'
    });
    this.domElements.row = $row;

    var $time = $('<div>', {
      class: 'col-2',
      text: this.data.time
    });
    this.domElements.time = $time;
    $row.append($time);

    var $customer = $('<div>', {
      class: 'col-3',
      text: this.data.customer
    });
    this.domElements.customer = $customer;
    $row.append($customer);

    var $type = $('<div>', {
      class: 'col-3',
      text: this.data.type
    });
    this.domElements.type = $type;
    $row.append($type);

    var $quantity = $('<div>', {
      class: 'col-2',
      text: this.data.quantity
    });
    this.domElements.quantity = $quantity;
    $row.append($quantity);

    var $cost = $('<div>', {
      class: 'col-2',
      text: `$${this.data.cost.toFixed(2)}`
    });
    this.domElements.cost = $cost;
    $row.append($cost);

    return $row;
  }
}
/**
 * Challenge: Create an ES6 class called "OrderList", in the constructor
 * accept a paramter representing the DOM element pointers. Save each property
 * to a "dom" property in the object wrapping the string in a JQuery initializer.
 * Create an additional property called "orders" which will be an empty array.
 *
 * Create a function called "addOrder" which will accept a parameter called "orderData"
 * which will be a single object representing a single order. This will initialize
 * a new instance of "Order" class, passing in the "orderData", then add the "Order"
 * instance to the "orders" property of the class, and return the number of orders in
 * the "orders" property.
 *
 * Create a function called "loadOrders" which will accept a parameter called "orders"
 * which will be the array of order objects. This function will loop through the array
 * and for each item, call the function "addOrder".
 *
 * Create a function called "renderOrders" which will accept an array of DOM elements
 * and will empty the ".item-area" div and append the array to the div.
 *
 * Create a function called "displayAllOrders" which will go through all items in the
 * "orders" property, and for each item call the "renderRow" function, and save the
 * result into a new array. Then, after complete, it will call into the "renderOrders"
 * function and pass in the array of DOM elements.
 *
 * Create a function called "addEventListeners" which will add event listeners to all
 * of the different form & filter elements calling "handleOrderFilterAndSort".
 *
 * Create a function called "handleOrderFilterAndSort" which will accept the
 * event object and will, get all values from the form. Then, filter the list of orders
 * in the "orders" property based on the filter values, and sort the filtered array
 * according to the sort value. Next, pass the filtered array to the "renderOrders"
 * ** REMEMBER: bind the function in the constructor.
 *
 * - stop here and make sure you've tested the OrderList class functionality.
 *  [ ] addOrder intiializes correctly
 *  [ ] loadOrders loads correctly
 *  [ ] displayAllOrders renders correctly
 *  [ ] handleOrderFilterAndSort applies the filters as the user interacts with the page.
 */
class OrderList {
  constructor(elementConfig) {
    this.dom = {
      hana: $(elementConfig.x1),
      timeSortHeader: $(elementConfig.x2),
      customerSortHeader: $(elementConfig.x3),
      typeSortHeader: $(elementConfig.x4),
      quantitySortHeader: $(elementConfig.x5),
      costSortHeader: $(elementConfig.x6),
      sortInput: $(elementConfig.x7),
      typeInput: $(elementConfig.x8),
      caloriesFromInput: $(elementConfig.x9),
      caloriesToInput: $(elementConfig.x10),
      priceFromInput: $(elementConfig.x11),
      priceToInput: $(elementConfig.x12),
      nameMYbutt: $(elementConfig.x13)
    };
    this.orders = [];
    this.addOrder = this.addOrder.bind(this);
    this.handleOrderFilterAndSort = this.handleOrderFilterAndSort.bind(this);
  }

  addOrder(xxx) {
    const mico = new Order(xxx);
    this.orders.push(mico);
    return this.orders.length;
  }

  loadOrder(xxx) {
    xxx.forEach(this.addOrder);
  }

  renderOrders(xxx) {
    var elements = xxx.map(x => {
      return x.renderRow();
    });
    this.dom.hana.empty().append(elements);
  }

  displayAllOrders() {
    this.renderOrders(this.orders);
  }

  handleOrderFilterAndSort(e) {
    var FL = this.orders;
    // console.log(FL);
    // console.log('this is triggering');
    const name = this.dom.nameMYbutt.val();

    if (name) {
      // console.log(name);
      FL = FL.filter(v => {
        var data = v.getData();
        return data.customer.includes(name);
      });
    }

    const sort = this.dom.sortInput.val();
    if (sort) {
      // console.log('222', sort);

      const gg = sort.split('-');
      // console.log(gg);

      const property = gg[0];
      const direction = gg[1];
      // console.log(property);
      // console.log(direction);
      // if (direction === 'asc') {
      //   FL.sort((a, b) => {
      //     var aData = a.getData();
      //     var bData = b.getData();

      //     if (aData[property] > bData[property]) {
      //       return 1;
      //     }
      //     if (aData[property] < bData[property]) {
      //       return -1;
      //     }
      //     return 0;
      //   });
      // } else {
      //   FL.sort((a, b) => {
      //     var aData = a.getData();
      //     var bData = b.getData();

      //     if (aData[property] > bData[property]) {
      //       return -1;
      //     }
      //     if (aData[property] < bData[property]) {
      //       return 1;
      //     }
      //     return 0;
      //   });
      // }

      FL.sort((a, b) => {
        var aData = a.getData();
        var bData = b.getData();
        // console.log('1', aData, '2', bData);
        if (aData[property] > bData[property]) { return direction === 'asc' ? 1 : -1; }
        if (aData[property] < bData[property]) { return direction === 'asc' ? -1 : 1; }

        return 0;
      });
    }

    const typeInput = this.dom.typeInput.val();
    if (typeInput) {
      // console.log('333', typeInput);
      FL = FL.filter(v => {
        var data = v.getData();
        return data.type === typeInput;
      });
    }

    const calorieFrom = this.dom.caloriesFromInput.val();
    if (calorieFrom) {
      // console.log('444', calorieFrom);
      FL = FL.filter(v => {
        var data = v.getData();
        return data.quantity >= calorieFrom;
      });
    }

    const calorieTo = this.dom.caloriesToInput.val();
    if (calorieTo) {
      // console.log('5555', calorieTo);
      FL = FL.filter(v => {
        var data = v.getData();
        return data.quantity <= calorieTo;
      });
    }

    this.renderOrders(FL);
  }

  addEventListeners() {
    this.dom.sortInput.change(this.handleOrderFilterAndSort);
    this.dom.typeInput.change(this.handleOrderFilterAndSort);
    this.dom.caloriesFromInput.keyup(this.handleOrderFilterAndSort);
    this.dom.caloriesToInput.keyup(this.handleOrderFilterAndSort);
    this.dom.priceFromInput.keyup(this.handleOrderFilterAndSort);
    this.dom.priceToInput.keyup(this.handleOrderFilterAndSort);
    this.dom.nameMYbutt.keyup(this.handleOrderFilterAndSort);
  }
}
/**
 * Challenge: Modify your "initializeApp" function to create a new
 * instance of the class "OrderList" passing in an object containing all of
 * the pointers to the DOM elements on the page which will be saved to a
 * global variable called "orderList"
{
    itemArea: ".item-area",
    timeSortHeader: ".sort-time",
    customerSortHeader: ".sort-customer",
    typeSortHeader: ".sort-type",
    quantitySortHeader: ".sort-quantity",
    costSortHeader: ".sort-cost",
    sortInput: "#sortInput"

    nameInput: "#nameInput"
    typeInput: "#typeInput",
    caloriesFromInput: "#caloriesFromInput",
    caloriesToInput: "#caloriesToInput",
    priceFromInput: "#priceFromInput",
    priceToInput: "#priceToInput"
}
 * call into the "loadOrders" function and pass in the "OrderData" array
 * call into the "displayAllOrders" function.
 * call into the "addEventListeners" function.
 *
 * - stop here and test your page.
*/
