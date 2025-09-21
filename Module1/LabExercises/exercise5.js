let animals = ['Cat', 'Dog', 'Whale', 'Bear', 'Elephant'];
console.log(animals[0]); // 'Cat'
console.log(animals[1]); // 'Dog'
console.log(animals[2]); // 'Whale
console.log(animals[3]); // 'Bear'
console.log(animals[4]); // 'Elephant'

animals[1] = 'Lion';
animals [4] = 'Giraffe';
console.log(animals); // [ 'Cat', 'Lion', 'Whale', 'Bear', 'Giraffe' ]

console.log(animals); // [ 'Cat', 'Dog', 'Whale', 'Bear', 'Elephant' ]
animals.push('Dolphin');
console.log(animals); // [ 'Cat', 'Dog', 'Whale', 'Bear', 'Elephant', 'Dolphin' ]

let firstAnimal = animals.shift();
console.log(firstAnimal); // 'Cat'
console.log(animals); // [ 'Dog', 'Whale', 'Bear', 'Elephant', 'Dolphin' ]