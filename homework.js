// Zad1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = array.reduce((acc, item, index, array) => {
  console.log("akumulator", acc);
  return acc + item;
}, 0);
console.log(newArr);

// Zad2
function evenNumbers(acc, item) {
  if (item % 2 == 0) {
    acc += item;
  }
  return acc;
}
const sumEven = array.reduce(evenNumbers, 0);
console.log(sumEven);

// Zad3
const newArr = array.reduce((acc, item, index, array) => {
  console.log("akumulator", acc);
  return acc + item;
}, 10);
console.log(newArr);

// Zad4
// Jeżeli nie podamy initial value to accumulator przy wywołaniu przyjmie wartość pierwszego elementu tablicy, natomiast nextValue, będzie równe drugiemu elementowi. Jeśli initialValiue jest podane wtedy accumulator przyjmie właśnie tą wartość.

// Zad5
// 1

// Zad6
function reduction(funkcjaRedukujaca, wartoscPoczatkowa) {
  let i = 0;
  if (wartoscPoczatkowa === undefined) {
    i = 1;
    wartoscPoczatkowa = this[0];
  }
  let accumulator = wartoscPoczatkowa;
  for (i = 0; i < this.length; i++) {
    const item = this[i];
    accumulator = funkcjaRedukujaca(accumulator, item);
  }
  return accumulator;
}
function sum(item1, item2) {
  return item1 + item2;
}
Array.prototype.reduction = reduction;
console.log(array.reduction(sum, 0));

// Zad7
const someArray = [11, 3, 5, 31, , 31, 54, 23, 14];
function biggerThan50(item, index, array) {
  return item > 50;
}
const result = someArray.some(biggerThan50);
console.log(result);

// Zad8
function biggerThan2(item, index, array) {
  return item > 2;
}
const result1 = someArray.every(biggerThan2);
console.log(result1);

// Zad9
// Some wyświetli true lub false jeśli chociaż jeden element z tablicy spełni lub nie spełni nasz warunek, every wyświetli true jeśli każdy z elementów tablicy spełni warunek

// Zad10
function divideBy7(item, index, array) {
  return item % 7 === 0;
}
const result2 = someArray.some(divideBy7);
if (result2 === true) {
  console.log(`W tablicy znajduje się element podzielny przez 7 }`);
} else {
  console.log(`Żaden z elementów tablicy nie jest podzielny przez 7`);
}

// Zad11
function some(array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    console.log(item);
    if (item > 1) {
      return true;
    }
  }
  return false;
}
const checkSome = some(someArray);
console.log(checkSome);

// Zad12
function every(array) {
  const trueArr = [];
  const falseArr = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    console.log(item);
    if (item > 1) {
      trueArr.push(item);
    } else {
      falseArr.push(item);
    }
  }

  if (trueArr.length === someArray.length) {
    return true;
  } else {
    return false;
  }
}
const checkEvery = every(someArray);
console.log(checkEvery);

// Zad13
function sumuj(array) {
  const numberArr = [];
  const otherArr = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    // console.log(item);
    if (typeof item === "number") {
      numberArr.push(item);
    } else {
      otherArr.push(item);
    }
  }
  const result2 = numberArr.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  return result2;
}
const checkSumuj = sumuj(someArray);
console.log(checkSumuj);

// Zad14
function subtraction(array, initialValue) {
  let result = 0;
  if (initialValue === undefined) {
    initialValue = 0;
  }
  const result2 = array.reduce(function (prev, next) {
    return (result = prev - next);
  }, initialValue);
  return result;
}
console.log(subtraction(someArray));

// Zad15
function includes(array, item) {
  const result2 = someArray.some(function (element) {
    return element === item;
  });
  return result2;
}
console.log(includes(someArray, 100));
//
// Zad16
const samochod = function (model, yearOfProduction, color) {
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.color = color;
  this.drive = () => console.log("Ale jazda");
};
const mercedes = new samochod("mercedes", 2011, "brown");
const audi = new samochod("audi", 2017, "silver");
console.log(mercedes);

// Zad17
// Słowo new pozwala stworzyć nowy obiekt, który moze dziedziczyć po prototypie. Obiekt zwrócony przez konstruktor staje się wynikiem całego konstruktora

// Zad18
samochod.prototype.tankFuel = function () {
  console.log("Lej pod korek!");
};
samochod.prototype.stop = function () {
  console.log("Stój, gdzie jedziesz!");
};
mercedes.tankFuel();
audi.stop();
