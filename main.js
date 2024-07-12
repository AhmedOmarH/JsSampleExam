/*  Question 01 

1-      The event loop is what allows JavaScript to handle asynchronous tasks like fetching data or waiting for events without blocking other operations.

2-      Add an element at the beginning of an array: use .unshift()
        Add an element at the end of an array: use .push()

    Question 02

        1-  3

        2-  0
            1
            2  
            3
            4
        one second after the other

        3-  ['baz]

        4-  1
            Hello
            true

        5-  true
            ["carName", "Bmw"],
            ["carPrice", 1000000]
*/

// question 03

// 1-

function sumObjectValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

// 2-

async function sequentialAsyncBlocks() {
    await asyncBlock1();
    await asyncBlock2();
    await asyncBlock3();
}

// 3-

function getMaxValueWithIndex(arr) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return { max, index };
}

// 4-

function dateDiffInDays(date1, date2) {
    const diffInTime = date2.getTime() - date1.getTime();
    return Math.ceil(diffInTime / (1000 * 3600 * 24));
}

// 5-

class Calculator {
    constructor() {
        this.sum = (a, b) => a + b;
        this.difference = (a, b) => a - b;
        this.product = (a, b) => a * b;
        this.dividend = (a, b) => a / b;
    }
}

// 6-

function multipleValuesFunction() {
    return {
        value1: 10,
        value2: "Hello",
        value3: [1, 2, 3]
    };
}

// 7-

function reverseArray(arr) {
    return arr.reverse();
}

// 8-

function objectToArray(obj) {
    return Object.entries(obj);
}