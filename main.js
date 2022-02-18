/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

for (let count = 0; count <= students.length-1; count++){
  console.log(students[count]);
}

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];

let reGrades = grades.reverse();

for (let count = 0; count <= 5; count++){
    console.log(reGrades[count]);
}

// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

positiveNumbers.shift();
positiveNumbers.splice(1, 2);

console.log(positiveNumbers);


// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

mixedSignNumbers.splice(0,2);
mixedSignNumbers.splice(2,1);
mixedSignNumbers.splice(3,1);

console.log(mixedSignNumbers);


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

symmetricalCapitals.shift();
symmetricalCapitals.shift();
symmetricalCapitals.pop();

for (let count = 0; count <= 7; count++){
    console.log(symmetricalCapitals[count]);
}


// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

fibonacciNumbers.unshift(0);
fibonacciNumbers.push(21);
fibonacciNumbers.push(34);

for (let count = 0; count <= 9; count++){
    console.log(fibonacciNumbers[count]);
}


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.

const newArray = [5, 6, 7, 8, 9];

for (let count = 0; count <= 4; count++){
    console.log(newArray[count]);
}


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.

let array1 = [];

array1.unshift("Dog");
array1.push("Cat");
array1.push("Deer");
array1.push("Bear");
array1.push("Fish");

for (let count = 0; count <=4; count++){
    console.log(array1[count]);
}


// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.


for (let count = 0; count <= 10; count++){
    if (count >= 3){
        console.log(students[count]);  
    }
}



// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.


// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.

let newStu = students.slice(3, 11);

for (let count = 0; count <= 7; count++){
    console.log(newStu[count]);
}


// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

dinosaurs.splice(4, 3);

for (let count = 0; count < dinosaurs.length; count++){
    console.log(dinosaurs[count]);
}



// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.

console.log(dinosaurs.join(" * "));


// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

dinosaurs.reverse();

for (let count = 0; count < dinosaurs.length; count++){
    console.log(dinosaurs[count]);
}


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

let newArray = primaries.concat(secondaries);

for (let count = 0; count < newArray.length; count++){
    console.log(newArray[count]);
}

console.log(primaries);
console.log(secondaries);