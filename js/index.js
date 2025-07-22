'use strict';

// Function constructor

/* const messageCreate = function (from, to, message) {
  return {
    from,
    to,
    message,
    show() {
      console.log(this.message);
    },
  };
};

const newMessage = messageCreate('Ali', 'Bern', 'Hello, There!');

newMessage.show(); */

// Constructor function

/* const Order = function (orderID, customer, date) {
  this.orderID = orderID;
  this.customer = customer;
  this.date = date;
  this.showInfo = function () {
    console.log(this.customer);
  };
};

const ord1 = new Order(1, 'Loe', '11.02.1930');

ord1.displayProcess = () => {
  console.log(`This ${this.customer} a buing this things`);
};

console.log(Object.getPrototypeOf(ord1));
 */
/* const obj1 = { id: 1 };
const obj2 = Object.create(obj1);
const obj3 = Object.assign(obj1);

obj3.id = 30;

console.log(obj1);
console.log(obj2);
console.log(obj3); */

/* const Rectangle = function (width, height, name) {
  this.width = width;
  this.height = height;
  this.name = name;
  this.showInfo = function () {
    console.log(this);
  };
};

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

const rect1 = new Rectangle(200, 100, 'One');

console.log(rect1.area());
console.log(rect1.perimeter());
rect1.showInfo();
 */

/* const rectanlePrototypes = {
  area: function () {
    console.log(this.width * this.height);
  },
  perimeter: function () {
    console.log((this.width + this.height) * 2);
  },
  isSquare: function () {
    console.log(this.width === this.height);
  },
};

function createRectangle(width, height) {
  return Object.create(rectanlePrototypes, {
    height: { value: width },
    width: { value: height },
  });
}

const rectOne = createRectangle(10, 10);
const rectTwo = createRectangle(20, 20);

rectOne.area.call(rectTwo); */

const Shape = function (name) {
  this.name = name;
  this.test = () => {
    console.log('test');
  };
};

Shape.prototype.logName = function () {
  console.log(this.name);
};

const Rectangle = function (name, width, height) {
  Shape.call(this, name);
  this.width = width;
  this.height = height;
};

const Circle = function (name, circle) {
  Shape.call(this, name);

  this.circle = circle;
};

const rect1 = new Rectangle('Rect', 10, 20);
console.log(rect1);

const cir1 = new Circle('Circle', 120);

Shape.prototype.logName.call(cir1);

console.log(Shape);
