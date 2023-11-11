class Vehicle {
    constructor(a,b,c) {
        this.make = a
        this.model = b
        this.year = c
    }
    honk() {
        return 'Beep'
    }
    toString() {
        return `The vehicle is a ${make} ${model} from ${year}`
    }
}

class Car extends Vehicle {
    constructor(a,b,c) {
        super(a,b,c)
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor(a,b,c) {
        super(a,b,c)
        this.numWheels = 2
    }
    revEngine() {
        return 'VROOM!!!'
    }
}

class Garage {
    constructor(capacity ) {
        this.capacity  = capacity 
        this.vehicles  = []
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) return "Only vehicles are allowed in here!"
        if(this.vehicles >= this.capacity) return "Sorry, we're full."
        this.vehicles.push(vehicle)
        return vehicle
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."


let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4


let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2


let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."


//suggestions and improvements
//1. In the toString method of the Vehicle class, there's an issue. The variables make, model, and year should be accessed using this.make, this.model, and this.year since they are instance variables.
//2. The condition for checking if the garage is full (if(this.vehicles >= this.capacity)) should compare the length of the vehicles array to the capacity.
//3. The return statement for the add method in the Garage class seems inconsistent. When a vehicle is successfully added, it returns the added vehicle. However, when the condition for vehicle type is not met, it returns a string. Consider making the return value consistent, perhaps returning a success message in both cases.
//4. Check if the provided capacity is a positive number in the Garage constructor.
//5. The comment suggests that myFirstVehicle.honk(); should return "Beep." but the honk method in the Vehicle class actually returns "Beep" (without the period).
