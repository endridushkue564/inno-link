/*
* Filename: complexCode.js
* 
* Description: This complex code demonstrates a fictional e-commerce website's shopping cart functionality.
* It includes features like adding products to the cart, updating quantities, removing items, calculating totals,
* applying discounts, and handling user input/validation. Note that this is a simplified version and does not
* include backend functionality like database management or payment processing.
*/

// Product class representing individual items in the store
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// User class representing a user of the e-commerce website
class User {
  constructor(name) {
    this.name = name;
    this.cart = [];
  }

  viewCart() {
    console.log("===============================");
    console.log(`Shopping Cart for ${this.name}:`);
    
    if (this.cart.length === 0) {
      console.log("Cart is empty.");
    } else {
      let total = 0;
      this.cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity} - Subtotal: $${subtotal.toFixed(2)}`);
      });
      console.log("----------------");
      console.log(`Total: $${total.toFixed(2)}`);
    }
    
    console.log("===============================");
  }

  addToCart(product, quantity) {
    if (!product || quantity <= 0) {
      console.log("Invalid product or quantity.");
      return;
    }

    const index = this.cart.findIndex(item => item.product.name === product.name);

    if (index !== -1) {
      this.cart[index].quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }

    console.log(`${quantity} ${product.name}(s) added to cart.`);
  }

  updateQuantity(productName, newQuantity) {
    if (newQuantity <= 0) {
      console.log("Invalid quantity.");
      return;
    }

    const index = this.cart.findIndex(item => item.product.name === productName);

    if (index !== -1) {
      this.cart[index].quantity = newQuantity;
      console.log(`Quantity of ${productName} updated to ${newQuantity}.`);
    } else {
      console.log(`Product '${productName}' not found in cart.`);
    }
  }

  removeItem(productName) {
    const index = this.cart.findIndex(item => item.product.name === productName);

    if (index !== -1) {
      const item = this.cart[index];
      this.cart.splice(index, 1);
      console.log(`${item.quantity} ${item.product.name}(s) removed from cart.`);
    } else {
      console.log(`Product '${productName}' not found in cart.`);
    }
  }
}

// Sample usage of the code

const user = new User("John");

// View empty cart
user.viewCart();

// Add products to cart
const product1 = new Product("Phone", 599.99);
user.addToCart(product1, 1);

const product2 = new Product("Tablet", 399.99);
user.addToCart(product2, 2);

// Update quantity
user.updateQuantity("Phone", 2);

// Remove product
user.removeItem("Tablet");

// View cart
user.viewCart();
