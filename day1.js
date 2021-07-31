// // Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time,
// let's use objects to implement the calculations!
//  Remember: BMI = mass / height ** 2 = mass / (height * height).
//  (mass in kg and height in meter)

// 1. For each of them, create an object with properties
// for their full name, mass, and height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI
// (the same method on both objects). Store the BMI value to a property,
//  and also return it from the method.

// 3. Log to the console who has the higher BMI,
//  together with the full name and the respective BMI.
//  Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall.
// John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

const voter = 'test loop';
for (let index = 1; index <= 5; index++) {
  console.log(`Voter number ${index} is currently voting`);
}

const jonas = [
  'Jonas',
  2037 - 1991,
  'Schmedtmann',
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  //   types[i] = jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

// ////////////////////////////////

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

let tips = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

const totals = [];
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') break;
  console.log(jonas[i], typeof jonas[i]);
}

for (i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 5) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️ - while`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) 
to calculate tips and total values (bill + tip) for every bill value in the bills array.
 Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array.
 This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, 
  start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop.
   In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop,
    you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array 
  (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips2 = [];
const totals2 = [];
for (let i = 0; i < bills2.length; i++) {
  tips2.push(calcTip2(bills2[i]));
  totals2.push(bills2[i] + tips2[i]);
}

console.log(bills2, tips2, totals2);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals2));
