var TacoData = [
  {
    name: 'Portabella Mushroom Taco',
    price: 11.23,
    quantity: 3,
    calories: 100
  },
  {
    name: 'Tortilla Shell',
    price: 0.23,
    quantity: 1,
    calories: 0
  },
  {
    name: 'Peking Sauce Taco',
    price: 2.30,
    quantity: 0.5,
    calories: 10
  },
  {
    name: 'Carne Asada Taco',
    price: 2.00,
    quantity: 2,
    calories: 50
  },
  {
    name: 'Mystery Mix Taco',
    price: 20.00,
    quantity: 2,
    calories: 70
  }
];
/* eslint-env jquery */
/**
 * Challenge: Modify model (Taco) class.
 *
 * Create a function called "getData" which will return the data property.
 */
class Taco {
  constructor(tacoData) {
    this.data = tacoData;

    this.dom = {};
  }

  render() {
    var $row = this.dom.row = $('<div>', {
      class: 'row'
    });

    var $name = this.dom.name = $('<div>', {
      class: 'col',
      text: this.data.name
    });

    var $calories = this.dom.calories = $('<div>', {
      class: 'col',
      text: this.data.calories
    });

    var $quantity = this.dom.quantity = $('<div>', {
      class: 'col',
      text: this.data.quantity
    });

    var $price = this.dom.price = $('<div>', {
      class: 'col',
      text: this.data.price
    });

    $row.append($name, $calories, $quantity, $price);

    return $row;
  }

  getData() {
    return this.data;
  }
}

/**
 * Challenge: Modify controller(TacoList) class.
 *
 * Create a function called "addEventListeners" which will add event listeners to all
 * of the different form filter elements using "handleTacoFilter".
 *
 * Create a function called "handleTacoFilter" which will accept the
 * event object.
 *  * Get all values from the form.
 *  * Filter the list of tacos in the "tacos" property based on the form values.
 *  * Pass the filtered array to the "renderTacos"
 * ** REMEMBER: bind the function in the constructor.
 *
 * - stop here and make sure you've tested the TacoList class functionality.
 *  [ ] handleTacoFilter applies the filters as the user interacts with the page.
 */

/**
 * Challenge: Modify your "initializeApp" function.
 *
 *  * call into the "addEventListeners" function.
 *
 * - stop here and test your page.
*/
class TacoList {
  constructor(options) {
    this.dom = {
      listDisplay: $(options.listDisplay),
      nameInput: $(options.nameInput),
      caloriesFromInput: $(options.caloriesFromInput),
      caloriesToInput: $(options.caloriesToInput),
      priceFromInput: $(options.priceFromInput),
      priceToInput: $(options.priceToInput)
    };

    this.tacos = [];

    this.addTaco = this.addTaco.bind(this);
    this.handleTacoFilter = this.handleTacoFilter.bind(this);
  }

  loadTacos(tacoData) {
    tacoData.forEach(this.addTaco);
  }

  addTaco(tacoData) {
    var taco = new Taco(tacoData);
    this.tacos.push(taco);
  }

  render(tacoList) {
    var tacos = tacoList.map(t => { return t.render(); });

    this.dom.listDisplay.empty().append(tacos);
  }

  displayAllTacos() {
    this.render(this.tacos);
  }

  handleTacoFilter(e) {
    let fff = this.tacos;
    const name = this.dom.nameInput.val();
    // console.log(name);
    const calorieFrom = this.dom.caloriesFromInput.val();
    // console.log('min calorie', calorieFrom);
    const calorieTo = this.dom.caloriesToInput.val();
    // console.log('max calorie', calorieTo);
    const priceFrom = this.dom.priceFromInput.val();
    // console.log(priceFrom);
    const priceTo = this.dom.priceToInput.val();
    // console.log(priceTo);
    if (name) {
      fff = fff.filter(x => {
        const data = x.getData();
        return data.name.includes(name);
      });
    }
    if (calorieFrom) {
      fff = fff.filter(x => {
        const data = x.getData();
        return data.calories >= calorieFrom;
      });
    }

    if (calorieTo) {
      fff = fff.filter(x => {
        const data = x.getData();
        return data.calories <= calorieTo;
      });

    }

    if (priceFrom) {
      fff = fff.filter(x => {

        const data = x.getData();
        // console.log('000', priceFrom);
        // console.log('111', data.price);
        return data.price >= priceFrom;
      });
    }

    if (priceTo) {
      fff = fff.filter(x => {
        const data = x.getData();
        return data.price <= priceTo;
      });
    }

    this.render(fff);
  }

  addEventListeners() {
    this.dom.nameInput.keyup(this.handleTacoFilter);
    this.dom.caloriesFromInput.keyup(this.handleTacoFilter);
    this.dom.caloriesToInput.keyup(this.handleTacoFilter);
    this.dom.priceFromInput.keyup(this.handleTacoFilter);
    this.dom.priceToInput.keyup(this.handleTacoFilter);
  }
}

$(document).ready(() => {
  var shop = new TacoList({
    listDisplay: '.taco-list',
    nameInput: '#nameInput',
    caloriesFromInput: '#caloriesFromInput',
    caloriesToInput: '#caloriesToInput',
    priceFromInput: '#priceFromInput',
    priceToInput: '#priceToInput'
  });
  shop.loadTacos(TacoData);
  shop.displayAllTacos();
  shop.addEventListeners();
});
