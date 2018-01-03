//定義一個類別
class Car {
  constructor(color) {
    this.color = color;
  }
  run() {}
}
//產生類別物件
let car = new Car("green");
//取得並在將原型物件顯示出來
let carProto = Object.getPrototypeOf(car); //Car 原型物件
console.log(carProto);
