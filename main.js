"use strict";
/* class Shape {
  readonly name;
  constructor(name: string) {
    this.name = name;
  }

  calculateArea() {
    console.log(this.width + this.height);
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }

  static describe(): void {
    console.log(`Some info`);
  }

  display(): void {
    console.log(this.name);
  }
}

class RectAdvance extends Rectangle {
  constructor(name: string, width: number, height: number) {
    super(name, width, height);
  }

  calculateArea() {
    console.log('This is calculating inside children class');
    console.log(this.width + this.height);
  }
}

const rect1 = new Rectangle('Rect', 10, 10);

const rectAdvan = new RectAdvance('Rect Advanced', 20, 20);

console.log(rectAdvan);

rectAdvan.calculateArea();

console.log(rectAdvan instanceof Shape);

Rectangle.describe();
 */
/* class Device {
  brand;
  model;
  price;
  sn;

  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.sn = parseInt(
      Math.floor(Math.random() * 4 * 10) +
        '00000' +
        Math.floor((Math.random() + 1) * 4) * 3
    );
  }

  deviceInfo(): number {
    console.log(this.brand, this.model, this.price, this.sn);
    return 1;
  }
}

const phone = new Device('Sams', 'A34', 4000);

phone.deviceInfo(); */
class App {
    constructor(data) {
        var _a;
        this.data = data;
        this._serverName = 'localhost';
        (_a = document
            .querySelector('.btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.renderElement.bind(this));
    }
    renderElement() {
        const ul = document.createElement('ul');
        ul.classList.add('list');
        this.data.forEach(item => {
            ul.insertAdjacentHTML('beforeend', ` <li class="item">${item}</li>`);
        });
        document.body.append(ul);
    }
    get serverName() {
        return this._serverName.charAt(0).toUpperCase() + this._serverName.slice(1);
    }
    set serverName(value) {
        this._serverName = value;
    }
}
const app = new App(['One', 'Two', 'Three']);
app.serverName = 'main';
console.log(app);
console.log(app.serverName);
