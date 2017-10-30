// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase()
  })
}

// also works:

// const newArr = [];
// drivers.map(function (driver) {
//   newArr.push(driver.toLowerCase());
// })
// return newArr;

function nameToAttributes(drivers) {
  const newArr = [];
  const driverSplitArray = driverSplit(drivers);
  driverSplitArray.map(function (driver) {
    return newArr.push(Object.assign({}, {firstName: driver[0], lastName: driver[1]}))
  })
  return newArr;
}

function driverSplit(drivers) {
  return drivers.map(function (driver){
    return driver.split(" ");
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver['name']} is from ${driver.hometown}` //both driver['name'] and driver.name work. 'name, because keys are strings in javascript'
  })
}
