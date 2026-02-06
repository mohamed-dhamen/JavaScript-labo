function Vehicule(brand , year){

    this.brand = brand;
    this.year = year;
    this.speed = 0 ; 
}


Vehicule.prototype.Accelerare = function(){
    this.speed +=10; 
}
Vehicule.prototype.Brake = function(){
    this.speed -=5; 
}

Vehicule.prototype.getInfo = function(){
    return `Brand: ${this.brand} , Year: ${this.year} , Speed: ${this.speed}`;
}

function Car(brand , year , numDoors){
    Vehicule.call(this , brand , year);
    this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicule.prototype);
Car.prototype.constructor = Car;

Car.prototype.getInfo = function(){
    return `Brand: ${this.brand} , Year: ${this.year} , Speed: ${this.speed} , Number of Doors: ${this.numDoors}`;
}

const myCar = new Car("Toyota" , 2020 , 4);
myCar.Accelerare();
myCar.Accelerare();
myCar.Brake();
console.log(myCar.getInfo());