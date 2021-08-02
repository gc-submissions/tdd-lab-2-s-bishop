const Product = require("../src/js/Product");

describe("Product", () => {

            //First Test 
  test("Confirm that the constructor parameters correctly set three properties on the class", () => {
    // Arrange
    let snickers = new Product("snickers", 1, true);
    // Act
    // Assert
    expect(snickers).toEqual({name:"snickers",price:1,taxable:true});
  });
  test("Confirm that the constructor parameters correctly set three properties on the class", () => {
    // Arrange
    let apples = new Product("apples", 2, false);
    // Act
    // Assert
    expect(apples).toEqual({name:"apples",price:2,taxable:false});
  });

            //Second Test
  test("Given a Product with taxable true, getPriceWithTax returns the price + 10%", () => {
    // Arrange
    let toys = new Product("toys", 15, true);
    // Act

    // Assert
    expect(toys.getPriceWithTax()).toBeCloseTo(16.5);
  });

  test("Given a Product with taxable true, getPriceWithTax returns the price + 10%", () => {
    // Arrange
    let bike = new Product("bike", 5000, true);
    // Act

    // Assert
    expect(bike.getPriceWithTax()).toBeCloseTo(5500);
  });

          //Third Test
  test("Given a Product with taxable false, getPriceWithTax returns just the price.", () => {
    //Arrange
    let cars = new Product("cars", 1000, false);
    //Assert
    expect(cars.getPriceWithTax()).toBeCloseTo(1000)
  });

  test("Given a Product with taxable false, getPriceWithTax returns just the price.", () => {
    //Arrange
    let guitars = new Product("guiytars", 2000, false);
    //Assert
    expect(guitars.getPriceWithTax()).toBeCloseTo(2000)
  });
});