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
let objProto = Object.getPrototypeOf(carProto); // 原型物件
console.log(objProto);
let lastOne = Object.getPrototypeOf(objProto); //原型鍊的終點：null
console.log(lastOne);
