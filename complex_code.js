/* complex_code.js */

// This file contains a complex code example that demonstrates various JavaScript concepts and techniques.

// Class for creating a complex number
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Get the modulus of the complex number
  modulus() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  // Multiply the complex number by another complex number
  multiply(other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new Complex(real, imaginary);
  }

  // Get the conjugate of the complex number
  conjugate() {
    return new Complex(this.real, -this.imaginary);
  }
}

// Function to calculate the Fibonacci sequence up to a given number of terms
function fibonacciSequence(numTerms) {
  const sequence = [0, 1];
  for (let i = 2; i < numTerms; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

// Function to sort an array of objects based on a specific property
function sortByProperty(array, property) {
  array.sort((a, b) => a[property] - b[property]);
  return array;
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(string) {
  const words = string.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}

// Function to check if a string is a palindrome
function isPalindrome(string) {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

// Recursive function to find the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Class representing a shape with a generic area calculation method
class Shape {
  calculateArea() {
    throw new Error('Method not implemented.');
  }
}

// Class representing a circle that extends the Shape class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Usage of the complex number class
const complexNumber1 = new Complex(3, 4);
const complexNumber2 = new Complex(2, -1);
const product = complexNumber1.multiply(complexNumber2);
console.log('Product:', product.real, '+', product.imaginary, 'i');

// Usage of the fibonacci sequence function
const fibonacci = fibonacciSequence(10);
console.log('Fibonacci:', fibonacci);

// Usage of the sort by property function
const books = [
  { title: 'JavaScript: The Good Parts', pages: 172 },
  { title: 'Eloquent JavaScript', pages: 472 },
  { title: 'JavaScript: The Definitive Guide', pages: 746 },
];
const sortedBooks = sortByProperty(books, 'pages');
console.log('Sorted Books:', sortedBooks);

// Usage of the capitalize words function
const sentence = 'this is a sample sentence';
const capitalizedSentence = capitalizeWords(sentence);
console.log('Capitalized Sentence:', capitalizedSentence);

// Usage of the palindrome check function
console.log('Is "radar" a palindrome?', isPalindrome('radar'));
console.log('Is "hello" a palindrome?', isPalindrome('hello'));

// Usage of the factorial function
console.log('Factorial of 5:', factorial(5));

// Usage of the shape classes
const circle = new Circle(3);
console.log('Circle Area:', circle.calculateArea());