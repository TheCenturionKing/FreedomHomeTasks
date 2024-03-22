//task1
// function Car(model) {
//     this.model = model
//     this.showModel = () => {
//         console.log("Модель машины: ", + this.model);
//     }
// }

// const car1 = new Car('Toyota')
// const car2 = new Car ('BMW')
// const car3 = new Car('Volga')

// car1.showModel()
// car2.showModel()
// car3.showModel()

//task2
// function Shop(title , address) {
//     this.title = title
//     this.address = address
// }

// const shop1 = new Shop('Магнул', 'Улица Саке Сейфуллина')
// const shop2 = new Shop('Cпортмастер', 'Улица Кабанбай батыра')

// const shops = [shop1, shop2]
// console.log(shops);

// const shopsAddress = shops.map((shop)=>{
//     shop.address
// })
// console.log(shopsAddress);

// const promptNum1 = +prompt('Введите первое число')
// const promptNum2 = +prompt('Введите second число')

// task3
// class Calculator {
//     constructor(num1, num2){
//         this.num1 = num1
//         this.num2 = num2
//     }
//     sum(){
//         console.log(this.num1 + this.num2);
//     }
//     mul(){
//         console.log(this.num1 * this.num2);
//     }
// }

// const calculator1 = new Calculator(promptNum1, promptNum2)
// calculator1.sum()
// calculator1.mul()

//task4

class Logo {
  top = 0;
  left = 0;
  width = "200px";
  height = "200px";
  element = null;

  constructor(url) {
    this.imgUrl = url;
  }

  init() {
    // метод должен создать тег img
    const img = document.createElement("img");
    // вложить в него src картинки (this.imgUrl)
    img.src = this.imgUrl;
    // и записать в this.html
    this.element = img;
    // + дергаем render
    this.render();
    // + странице должен залится фон черным
    document.body.style.backgroundColor = "black";
  }

  render() {
    // метод должен отрисовать изображение (this.element) на странице
    document.body.appendChild(this.element);
    // применить фиксированное позиционирование
    this.element.style.position = "fixed";
    // использовать this.top и this.left для указания позиции
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    // использовать this.width для указания ширины
    this.element.style.width = this.width;
    this.element.style.height = this.width;
    this.element.style.borderRadius = "50%";
    this.element.style.objectFit = "cover";
  }

  moveUp() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    this.top -= 20;
    // + дергаем render
    this.render();
  }
  moveDown() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    this.down += 20;
    // + дергаем render
    this.render();
  }
  moveLeft() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    this.left -= 20;
    // + дергаем render
    this.render();
  }
  moveRight() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    this.left += 20;
    // + дергаем render
    this.render();
  }
}

const imgUrl = "https://bit.ly/2tcDito";
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
// something else, чтобы всё работало
size = {};
class Circle {
  element = null;
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }
  init() {
    const circle = document.createElement("div");
    circle.style.backgroundColor = this.color;
    circle.style.width = `${this.size.width}px`;
    circle.style.height = `${this.size.height}px`;
    circle.style.borderRadius = "50%";
    this.element = circle;
    this.render();
  }

  render() {
    document.body.appendChild(this.element);
  }
}
const circle1 = new Circle({ width: 200, height: 200 }, "red");
circle1.init();
