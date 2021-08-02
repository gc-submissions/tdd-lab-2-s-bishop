const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart", () => {
  //First Test
  test("Confirm that the constructor correctly sets the items property to an empty array.", () => {
    //Arrange
    let cart = new Cart();
    //Assert
    expect(cart.items).toEqual([]);
  });

  //Second Test
  test("Calling add once adds one product to the items array.", () => {
    //Arrange
    let cart = new Cart();
    let guitar = new Product("guitar", 2500, true);
    let pen = new Product("pen", 1000, true);
    //Act
    cart.add(guitar);
    //Assert
    expect(cart.items).toEqual([
      { name: "guitar", price: 2500, taxable: true },
    ]);
  });

  //Third Test
  test("Calling add twice leaves a total of two Products in the items array.", () => {
    //Arrange
    let cart = new Cart();
    let guitar = new Product("guitar", 2500, true);
    let pen = new Product("pen", 1000, true);
    //Act
    cart.add(guitar);
    cart.add(pen);
    //Assert
    expect(cart.items).toEqual([
      { name: "guitar", price: 2500, taxable: true },
      { name: "pen", price: 1000, taxable: true },
    ]);
  });

  //Forth Test
  //4A
  test("getItemCount returns the length of the items array.", () => {
    //Arrange
    let cart = new Cart();
    let guitar = new Product("guitar", 2500, true);
    let pen = new Product("pen", 1000, true);
    //Act
    cart.add(guitar);
    cart.add(pen);
    //Assert
    expect(cart.getItemCount()).toEqual(2);
  });

  //4B
  test("getItemCount returns the length of the items array.", () => {
    //Arrange
    let cart = new Cart();
    let car = new Product("car", 25000, true);
    let bicycle = new Product("bicycle", 4000, true);
    //Act
    cart.add(car);
    cart.add(bicycle);
    //Assert
    expect(cart.getItemCount()).toEqual(2);
  });

  //4C
  test("getItemCount returns the length of the items array.", () => {
    //Arrange
    let cart = new Cart();
    let house = new Product("house", 125000, true);
    let roof = new Product("roof", 5000, true);
    //Act
    cart.add(house);
    cart.add(roof);
    //Assert
    expect(cart.getItemCount()).toEqual(2);
  });

  //Fifth Test
  //5A
  test("getTotalBeforeTax returns the sum of the price of all Products in the items array.", () => {
    //Arrange
    let cart = new Cart();
    let car = new Product("car", 25000, true);
    let bicycle = new Product("bicycle", 4000, true);
    //Act
    cart.add(car);
    cart.add(bicycle);
    //Assert
    expect(cart.getTotalBeforeTax()).toEqual(29000);
  });

    //5B
  test("getTotalBeforeTax returns the sum of the price of all Products in the items array.", () => {
    //Arrange
    let cart = new Cart();
    let guitar = new Product("guitar", 2500, true);
    let pen = new Product("pen", 1000, true);
    //Act
    cart.add(guitar);
    cart.add(pen);
    //Assert
    expect(cart.getTotalBeforeTax()).toEqual(3500);
  });

      //5C
  test("getTotalBeforeTax returns the sum of the price of all Products in the items array.", () => {
    //Arrange
    let cart = new Cart();
    let house = new Product("house", 125000, true);
    let roof = new Product("roof", 5000, true);
    //Act
    cart.add(house);
    cart.add(roof);
    //Assert
    expect(cart.getTotalBeforeTax()).toEqual(130000);
  });

  //Sixth Test
  //6A
  test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array.", () => {
    //Arrange
    let cart = new Cart();
    let guitar = new Product("guitar", 2500, true);
    let pen = new Product("pen", 1000, true);
    //Act
    cart.add(guitar);
    cart.add(pen);
    //Assert
    expect(cart.getTotalWithTax()).toEqual(3850);
  });

      //6B
  test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array.", () => {
    //Arrange
    let cart = new Cart();
    let car = new Product("car", 25000, true);
    let bicycle = new Product("bicycle", 4000, true);
    //Act
    cart.add(car);
    cart.add(bicycle);
    //Assert
    expect(cart.getTotalWithTax()).toBeCloseTo(31900);
  });

      //6C
  test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array.", () => {
    //Arrange
    let cart = new Cart();
    let house = new Product("house", 125000, true);
    let roof = new Product("roof", 5000, true);
    //Act
    cart.add(house);
    cart.add(roof);
    //Assert
    expect(cart.getTotalWithTax()).toBeCloseTo(143000);
  });

  //Seventh Test
  test("getTax returns the difference between getTotalWithTax and getTotalBeforeTax.", () => {
    //Arrange
    let cart = new Cart();
    let guitar = new Product("guitar", 2500, true);
    let pen = new Product("pen", 1000, true);
    //Act
    cart.add(guitar);
    cart.add(pen);
    //Assert
    expect(cart.getTax()).toEqual(350);
  });
});
