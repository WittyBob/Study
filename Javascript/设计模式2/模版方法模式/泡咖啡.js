var Coffee = function () {}
Coffee.prototype.boilWater = function () {
  console.log('把水煮开');
}
Coffee.prototype.brewCoffeeGriends = function () {
  console.log('用沸水冲泡咖啡')
}
Coffee.prototype.pourInCup = function(){
  console.log('把咖啡倒进杯子')
};
Coffee.prototype.addSugarAndMild = function(){
  console.log('加糖和牛奶')
};
Coffee.prototype.init = function(){
  this.boilWater();
  this.brewCoffeeGriends()
  this.pourInCup();
  this.addSugarAndMild()
};

var coffee = new Coffee();

coffee.init()