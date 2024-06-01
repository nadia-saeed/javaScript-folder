// class = (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to the traditional constructor functions
//          ex. static keyword, encapsulation, inheritance.

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price (without tax): $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price +(this.price*salesTax);
    }
}
const salesTax = 0.05
const product1 = new Product('Shirt', 19.203);
const product2 = new Product('Pant', 25);
const product3 = new Product('Cap', 5);
const product4 = new Product('Shoes', 50);

// For the product 1:
const total = product1.calculateTotal(salesTax);
product1.displayProduct();
console.log(`Total price (with tax): $${total.toFixed(2)}`);

// For the product 2:
const total2 = product2.calculateTotal(salesTax);
product2.displayProduct();
console.log(`Total price (with tax): $${total2.toFixed(2)}`);

// For the product 3:
const total3 = product3.calculateTotal(salesTax);
product3.displayProduct();
console.log(`Total price (with tax): $${total3.toFixed(2)}`);

// For the product 4:
const total4 = product4.calculateTotal(salesTax);
product4.displayProduct();
console.log(`Total price (with tax): $${total4.toFixed(2)}`);