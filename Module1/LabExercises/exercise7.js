// this function returns the sum of two numbers
function sum(a, b) {
   console.log(a + b)
}

sum(10, 15)

function sum (a, b) {
    return a + b
}

console.log(sum(10, 15))


// this function returns the difference of two numbers
function difference(a, b) {
   console.log(a - b)
}

difference(250, 200)

function difference (a, b) {
    return a - b
}

console.log(difference(250, 200))


// this function returns the quotient of two numbers
function quotient(a, b) {
   console.log(a / b)
}

quotient(375, 5)

function quotient (a, b) {
    return a / b
}

console.log(quotient(375, 5))


// this function returns the product of two numbers
function product(a, b) {
   console.log(a * b)
}

product(25, 4)

function product (a, b) {
    return a * b
}

console.log(product(25, 4))


// this function returns a greeting message
function greeting(name) {
    let greeting = "Hello " + name;
    console.log(greeting);
}

greeting("Chase")

function greeting(name) {
    return "Hello " + name;
}

console.log(greeting("Chase"))


// Test 1 for sum function
if (sum(10, 15) !==25) {
    throw new Error('Expected sum(10, 15) to be 25');
}

// Test 2 for sum function
if (sum(-20, 30) !==10) {
    throw new Error('Expected sum(-20, 30) to be 10');
}

// Test 3 for sum function
if (sum(100, 0) !==100) {
    throw new Error('Expected sum(100, 0) to be 100');
}


// Test 1 for difference function
if (difference(250, 200) !==50) {
    throw new Error('Expected difference(250, 200) to be 50');
}

// Test 2 for difference function
if (difference(1000, -500) !==1500) {
    throw new Error('Expected difference(1000, -500) to be 1500');
}

// Test 3 for difference function
if (difference(0, 7) !==-7) {
    throw new Error('Expected difference(0, 7) to be -7');
}


// Test 1 for quotient function
if (quotient(375, 5) !==75) {
    throw new Error('Expected quotient(375, 5) to be 75');
}

// Test 2 for quotient function
if (quotient(0, 36) !==0) {
    throw new Error('Expected quotient(0, 36) to be 0');
}

// Test 3 for quotient function
if (quotient(110, -11) !==-10) {
    throw new Error('Expected quotient(110, -11) to be -10');
}


// Test 1 for product function
if (product(25, 4) !==100) {
    throw new Error('Expected product(25, 4) to be 100');
}

// Test 2 for product function
if (product(-5, 15) !==-75) {
    throw new Error('Expected product(-5, 15) to be -75');
}

// Test 3 for product function
if (product(100, 0) !==0) {
    throw new Error('Expected product(100, 0) to be 0');
}