// 1a
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// 1b
for (let i = 9; i >= 1; i--) {
  console.log(i);
}

// 1c
for (let i = 5; i <= 15; i++) {
  console.log(i);
}

// 1d
for (let i = 0; i >= -10; i--) {
  console.log(i);
}

// 1e
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// 1f
for (let i = 10; i >= -10; i -= 4) {
  console.log(i);
}

// 1g
for (let i = 1; i <= 100; i *= 2) {
  console.log(i);
}

// 2a
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 2b
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 2c
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} liczba parzysta`);
  } else {
    console.log(`${i} liczba nieparzysta`);
  }
}

// 2d
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
}

// 2e
for (let i = 100; i >= 0; i -= 5)
  if (i % 10 == 0) {
    console.log(`${i} - podzielna przez 10`);
  } else {
    console.log(i);
  }

// 3a
function createLoop(condition) {
  for (x = 0; x <= condition; x++) {
    console.log(x);
  }
}

createLoop(5);

// 3b
function createLoop(startNumber) {
  for (x = startNumber; x <= 15; x++) {
    console.log(x);
  }
}

createLoop(5);

// 3c
function createLoop(parameter) {
  for (x = 0; x <= 15; x += parameter) {
    console.log(x);
  }
}

createLoop(2);

// 3d
function createLoop(startNumber, condition) {
  for (x = startNumber; x <= condition; x++) {
    console.log(x);
  }
}

createLoop(3, 9);

// 3e
function createLoop(startNumber, condition, parameter) {
  for (x = startNumber; x <= condition; x += parameter) {
    console.log(x);
  }
}

createLoop(3, 9, 2);

// 4a
const array = [1, 2, 3, 4, 5];

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 4b
const array = ["Bartek", "Mati", "Kasia", "Olek", "Lila"];

for (i = 0; i < array.length; i++) {
  console.log(`Cześć ${array[i]}`);
}

// 4c
const obj = [
  {
    model: "Lambo",
    color: "orange",
  },
  {
    model: "Audi",
    color: "black",
  },
  {
    model: "MiniCooper",
    color: "yellow",
  },
];

for (let i = 0; i < obj.length; i++) {
  console.log(`Przed Wami stoi ${obj[i].color} ${obj[i].model}`);
}

// 4d
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    console.log(array[i]);
  }
}

// 4e
const array6 = ["Kasia", 1992, "Dawid", 1990, "Olek", 2017, "Lila", 2020];
const array7 = [];

for (i = 0; i < array6.length; i++) {
  if (typeof array6[i] === "string") {
    array7.push(array6[i]);
  }
}
console.log(array7);

// 4f
const array3 = ["Kasia", 1992, "Dawid", 1990, "Olek", 2017, "Lila", 2020];
const array4 = [];

for (i = 0; i < array3.length; i++) {
  if (typeof array3[i] === "number") {
    array4.push(array3[i]);
  }
}
console.log(array4);

// 5a
const array2 = [6, 6, 9, 9];
function sumArr(array) {
  let sumary = 0;
  for (i = 0; i < array.length; i++) {
    sumary += array[i];
  }
  console.log(sumary);
}

sumArr(array2);

// 5b
arr([2, 3, 4, 5, 80, 21]);
function arr(array) {
  let even = [];
  let odd = [];

  for (i = 0; i < array.length; i++) {
    const number = array[i];

    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  }
  console.log("Parzyste liczby - ", even);
  console.log("Nieparzyste liczby - ", odd);
}

// 5c

function checking(text) {
  if (text.indexOf("y") > -1) {
    console.log("Jest!");
  } else {
    console.log("Nie ma!");
  }
}
checking("eluwina");
// 5d
function multiple(value) {
  let result = value;
  for (i = value - 1; i >= 1; i--) {
    result *= i;
  }
  console.log(result);
}

multiple(5);

// 5e
const arrLetters = ["d", "a", "w", "i", "d"];
const arrNumbers = [1, 9, 9, 0];
const arrNull = [];

function display(arr, string) {
  if (arr.length == 0) {
    console.log("Tablica jest pusta");
  } else {
    if (typeof string === "string") {
      console.log(arr.join(""));
    } else if (typeof string === "number") {
      let sum = 0;
      for (i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log(`Suma elementów tablicy to ${sum}`);
    } else {
      console.log(`Drugi parametr jest nieprawidłowy`);
    }
  }
}
display(arrNumbers, 2);

// 5f)
const drivers = [
  {
    name1: "Dawid",
    lastName: "Stolarski",
    hasCar: true,
    hasDrivingLicence: true,
  },
  {
    name1: "Kasia",
    lastName: "Stolarska",
    hasCar: false,
    hasDrivingLicence: true,
  },
  {
    name1: "Aleks",
    lastName: "Stolarski",
    hasCar: false,
    hasDrivingLicence: false,
  },
  {
    name1: "Lila",
    lastName: "Stolarska",
    hasCar: true,
    hasDrivingLicence: false,
  },
];
function transport(arr) {
  for (let i = 0; i < drivers.length; i++) {
    const driver = drivers[i];
    if (driver.hasCar == true && driver.hasDrivingLicence == true) {
      console.log(
        `Zapnij pasy, dzisiaj wracamy z ${driver.name1} ${driver.lastName}`
      );
    } else if (driver.hasCar == false && driver.hasDrivingLicence == true) {
      console.log(
        `Zapnij pasy, daj kluczyki, dzisiaj kieruje ${driver.name1} ${driver.lastName}`
      );
    } else if (driver.hasCar == true && driver.hasDrivingLicence == false) {
      console.log(
        `Dzisiaj jedziemy autem ${driver.name1} ${driver.lastName}, kto kieruje?`
      );
    } else {
      console.log(
        `przykro mi, dzisiaj wracamy z buta, ${driver.name1} ${driver.lastName} nie ma prawa jazdy i auta`
      );
    }
  }
}
transport(drivers);

// 5g
const arrFruit = ["apple", "banana", "cherries", "peach"];
function newFruit(arr, fruit) {
  display = false;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == fruit) {
      display = true;
    }
  }
  if (display == false) {
    arr.push(fruit);
    console.log(`Tablica ${arr}, została powiększona o ${fruit}`);
  } else {
    console.log(`Podany element ${fruit}, znajduje się już w tablicy ${arr}`);
  }
}
newFruit(arrFruit, "apple");
