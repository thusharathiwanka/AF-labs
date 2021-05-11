// 1
// invoking callback inside the timeout
const returnValue = (callback) => {
  let value = 100;
  setTimeout(() => {
    value = 200;
    console.log(value);
    callback();
  });
  return value;
};

const printValues = () => {
  console.log("Print something");
};

console.log(returnValue(printValues));

// returning promise
const returnPromise = () => {
  return new Promise((resolve, reject) => {
    let isTrue = true;

    if (isTrue) {
      resolve(100);
    } else {
      reject(200);
    }
  });
};

returnPromise()
  .then((message) => {
    console.log(`${message} from then.`);
  })
  .catch((message) => {
    console.log(`${message} from catch.`);
  });

// 2
function Vehicle(type) {
  this.type = type;
  Vehicle.VehicleCount++;
}

Vehicle.prototype.drive = function () {
  console.log("Vehicle is driving");
};

Vehicle.VehicleCount = 0;

const vehicle = new Vehicle("car");
console.log(Vehicle.VehicleCount, vehicle.type);
vehicle.drive();

function Car(type) {
  Vehicle.call(this, type);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.balanceWheels = function () {
  console.log("Wheels are balanced");
};

const car = new Car("Toyota");
console.log(car.type);
car.balanceWheels();

// 4
const returnValue = () => {
  let value = 100;
  setTimeout(() => {
    value = 200;
    console.log(value);
    return value;
  });
};

(async function gettingValues() {
  try {
    const returnedValue = await returnValue();
    console.log(returnedValue);
  } catch (error) {
    console.log(error);
  }
})();

// 5
class Vehicle {
  static VehicleCount = 0;

  constructor(type) {
    // let type = something - this is private
    // below are public
    this.type = type;
    Vehicle.VehicleCount++;
  }
  drive() {
    console.log("Vehicle is driving");
  }
  static VehicleCount = 0;
  // these will be called as a property not as a method
  // getters and setters are acting as properties
  get typeCombined() {
    return this.type + " is Good";
  }

  set typeCombinedAgain(type) {
    this.type = "Something else";
    console.log(this.type);
  }
}

const vehicle = new Vehicle("Car");
console.log(vehicle.type);
vehicle.drive();

class Car extends Vehicle {
  balanceWheels() {
    console.log("Wheels are balanced");
  }
}

const car = new Car("Toyota");
console.log(car.type);
car.balanceWheels();
console.log(car.typeCombined);
car.typeCombinedAgain = this.type;
