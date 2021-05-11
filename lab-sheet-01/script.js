// 1
const first = function () {
  console.log("Hello World");

  return "Thiwanka";
  // regarding step 2 in Q1
  // if we return this it's going to print this return
  // otherwise it is going to be undefined when we calling the second function with first function as a parameter
};

const second = function (name) {
  console.log(`Hi ${name}`);
};

second(first());

// 2
const user = {
  id: "ID01",
  name: "Thiwanka",
  city: "Gampaha",
  isMarried: false,

  getName: function () {
    return this.name;
  },
};

console.log(user.getName());

// 3
window.vehicleName = "Car"; // Also, var can be used

const printVehicleName = function () {
  console.log(this.vehicleName);
};

const vehicle = {
  vehicleName: "Koenigsegg Agera",
  getVehicleName: printVehicleName,
};

printVehicleName();
vehicle.getVehicleName();
console.log(this.vehicleName);

// 4 (IIFE) - immediately invoked function expression
// function that runs soon as it is defined (outer function - taxCalc)
const taxCalc = (function () {
  let amount = 1000;
  let taxPercentage = 0.5;

  return function () {
    amount = taxPercentage * amount + amount;
    return amount;
  };
})();

console.log(taxCalc());

// 5
const apiURL = "https://jsonplaceholder.typicode.com/posts"; //getting all posts

const userId = 3;
const apiSpecificURL = `https://jsonplaceholder.typicode.com/posts/${userId}`; //getting specific post

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => console.log(error));
