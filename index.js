// Week 3: Domain Fundamentals w/ JavaScript
// -- Coding Assignments --
// -- @waterrmalann --

// Traditional JavaScript does not allow easy console inputs,
// therefore we use an npm package to polyfill/emulate browser prompt() within the console.
var prompt = require('prompt-sync')();

/* Accept a char input from the user and display it on the console. */
function task1() {
    const char = prompt("Enter a character: ");
    console.log("The entered character was: " + char);
}

/* Accept two inputs from the user and output their sum. */
function task2() {
    const a = parseInt(prompt("Enter a number: "));
    const b = parseInt(prompt("Enter another number: "));

    const sum = a + b;
    console.log("Sum of entered numbers is " + sum);
}

/*  Write a program to find the simple interest. Formula: SI=(P*R*n)/100)*/
function task3() {
    const p = parseInt(prompt("Principal Amount: "));
    const r = parseFloat(prompt("Interest Rate: "));
    const n = parseFloat(prompt("Number of years: "));

    const si = (p * r * n) / 100;
    console.log("Simple Interest is: " + si);
}

/* Write a program to check whether a student has passed or failed in a subject
 after he or she enters their mark (pass mark for a subject is 50 out of 100). */
function task4() {
    const marks = parseFloat(prompt("Enter marks: "));
    if (marks >= 50) {
        console.log("Passed.");
    } else {
        console.log("Failed.");
    }
}


/* Write a program to show the grade obtained by a student after he/she enters their total mark percentage. */
function task5() {
    const grades = parseFloat(prompt("Enter grades: "));
    if (grades >= 90) {
        console.log("A");
    } else if (grades >= 80) {
        console.log("B");
    } else if (grades >= 70) {
        console.log("C");
    } else if (grades >= 60) {
        console.log("D");
    } else if (grades >= 50) {
        console.log("E");
    } else {
        console.log("Failed.");
    }
}

/* Using the ‘switch case’ write a program to accept an input number from the user and output the day. */
function task6() {
    const num = parseInt(prompt("Enter number (1-7): "));
    switch(num) {
        case 1: {
            console.log("Sunday");
            break;
        }
        case 2: {
            console.log("Monday");
            break;
        }
        case 3: {
            console.log("Tuesday");
            break;
        }
        case 4: {
            console.log("Wednesday");
            break;
        }
        case 5: {
            console.log("Thursday");
            break;
        }
        case 6: {
            console.log("Friday");
            break;
        }
        case 7: {
            console.log("Saturday");
            break;
        }
        default: {
            console.log("Invalid Entry");
            break;
        }
    }
}

/* Write a program to print the multiplication table of given numbers. */
function task7() {
    const number = parseInt(prompt("Enter a number: "));
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${number} = ${i*number}`);
    }
}

/* Write a program to find the sum of all the odd numbers for a given limit. */
function task8() {
    const limit = parseInt(prompt("Enter limit: "));
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log("Sum of odd numbers is " + sum);
}

/* Write a program to print the following pattern
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
function task9() {
    const n = 5;
    const patternBuffer = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            patternBuffer.push(j);
        }
        console.log(...patternBuffer);
        patternBuffer.length = 0;
    }
}

/* Write a program to interchange the values of two arrays. */
function task10() {
    const arrayA = prompt("Array 1 Values: ").trim().split(' ');
    const arrayB = prompt("Array 2 Values: ").trim().split(' ');

    for (let i = 0; i < arrayA.length; i++) {
        [arrayB[i], arrayA[i]] = [arrayA[i], arrayB[i]];
    }

    console.log("Array 1: " + arrayA);
    console.log("Array 2: " + arrayB);
}

/*  Write a program to find the number of even numbers in an array */
function task11() {
    const array = prompt("Array: ").trim().split(' ');
    let count = 0;
    for (const num of array) {
        if (parseInt(num) % 2 === 0) count++;
    }
    console.log("There are " + count + " even numbers.");
}

/* Write a program to sort an array in descending order */
function task12() {
    const array = prompt("Array: ").trim().split(' ').map(e => parseInt(e)); 
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    console.log("Sorted: " + array);
}

/* Write a program to identify whether a string is a palindrome or not */
function task13() {
    const string = prompt("Enter a word: ").toLowerCase();
    const isPalindrome = word => {
        for (let i = 0; i < word.length / 2; i++) {
            if (word[i] != word[word.length - 1 - i])
                return false;
        }
        return true;
    }
    if (isPalindrome(string)) {
        console.log("Entered string is palindrome.");
    } else {
        console.log("Entered string is not palindrome.");
    }
}

/* Write a program to add to two dimensional arrays */
function task14() {
    const arraySize = parseInt(prompt("Enter array size: "));

    const array1 = [];
    for (let i = 1; i <= arraySize; i++) {
        const items = prompt(`Array 1 (${i}/${arraySize}): `).trim().split(' ').map(e => parseInt(e)); 
        array1.push(items);
    }

    const array2 = [];
    for (let i = 1; i <= arraySize; i++) {
        const items = prompt(`Array 2 (${i}/${arraySize}): `).trim().split(' ').map(e => parseInt(e)); 
        array2.push(items);
    }

    const summedArray = [];
    for (let i = 0; i < arraySize; i++) {
        summedArray.push([]);
        for (let j = 0; j < arraySize; j++) {
            summedArray[i].push(array1[i][j] + array2[i][j]);
        }
    }

    console.log("Summed Array: ");
    for (let i = 0; i < arraySize; i++) {
        console.log(summedArray[i].join(', '));
    }
}

/* Write a program to accept an array and display it on the console using functions */
function task15() {
    function main() {
        const arr = getArray();
        displayArray(arr);
    }
    function displayArray(arr) {
        console.log(arr.join(', '));
    }
    function getArray() {
        return prompt(`Array: `).trim().split(' '); 
    }
    main();
}

/* Write a program to check whether a given number is prime or not */
function task16() {
    const number = parseInt(prompt("Enter a number: "));
    const isPrime = num => {
        if (num <= 2) return false;
        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    if (isPrime(number)) {
        console.log("Is a prime number.");
    } else {
        console.log("Is not a prime number.");
    }
    }

/* Write a menu driven program to do the basic mathematical operations. */
function task17() {
    class Calculate {
        constructor(a, b, op) {
            if (op === '+' || op === '1') {
                this.add(a, b);
            } else if (op === '-' || op === '2') {
                this.subtract(a, b);
            } else if (op === '*' || op === 'x' || op === '3') {
                this.multiply(a, b);
            } else if (op === '/' || op === '4') {
                this.divide(a, b);
            }
        }

        add(a, b) {
            console.log(`${a} + ${b} = ${a+b}`);
        }

        subtract(a, b) {
            console.log(`${a} - ${b} = ${a-b}`);
        }

        multiply(a, b) {
            console.log(`${a} x ${b} = ${a*b}`);
        }

        divide(a, b) {
            console.log(`${a} / ${b} = ${a/b}`);
        }
    }

    console.log("1. Add\n2.Subtract\n3. Multiply\n4. Divide");
    const a = parseInt(prompt("Enter number one: "));
    const b = parseInt(prompt("Enter number two: "));
    const op = prompt("Operation: ");

    new Calculate(a, b, op);
}

/* Write a program to find the grade of a student during his academic year (weighted average) */
function task18() {
    const writtenTest = parseInt(prompt("Written Test: "));
    const labExams = parseInt(prompt("Lab Exams: "));
    const assignments = parseInt(prompt("Assignments: "));

    let grade = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
    console.log("Grade of student is: " + grade);
}

/* Write a program to find out the income tax amount of a person. */
function task19() {
    const annualIncome = parseInt(prompt("Enter your annual income: "));
    let taxPercent;
    if (annualIncome >= 1000000) {
        taxPercent = 30;
    } else if (annualIncome >= 5000000) {
        taxPercent = 20;
    } else if (annualIncome >= 250000) {
        taxPercent = 5;
    } else {
        taxPercent = 0;
    }

    const incomeTax = annualIncome * (taxPercent / 100);
    console.log("Your income tax amount is " + incomeTax);
}

/* Write a program to print the following pattern using for loop
1
2	3
4	5	6
7	8	9	10 
*/
function task20() {
    const n = 4;
    let increment = 1;
    for (let i = 1; i <= n; i++) {
        const _buffer = [];
        for (let j = 1; j <= i; j++) {
            _buffer.push(increment++);
        }
        console.log(..._buffer);
        _buffer.length = 0;
    }
}

/* Write a program to multiply the adjacent values of an array and store it in an another array */
function task21() {
    const array = prompt("Array: ").trim().split(' ').map(e => parseInt(e)); 
    const result = [];
    for (let i = 0; i < array.length - 1; i++) {
        result.push(array[i] * array[i+1]);
    }

    console.log(result.join(', '));
}

/* Write a program to add the values of two 2D arrays */
function task22() {
    function main() {
        const size = parseInt(prompt("Enter size of array: "));

        const array1 = getArray(size);
        const array2 = getArray(size);
        
        const summed = addArray(array1, array2);
        displayArray(summed);
    }
    function getArray(size) {
        const array = [];
        for (let i = 1; i <= size; i++) {
            const arrayPart = prompt(`Array ${i}/${size}: `).trim().split(' ').map(e => parseInt(e));
            arrayPart.length = size; // force limit length
            array.push(arrayPart);
        }
        return array;
    }
    function addArray(arr, arr2) {
        summedArray = [];
        for (let i = 0; i < arr.length; i++) {
            summedArray.push([]);
            for (let j = 0; j < arr.length; j++) {
                summedArray[i].push(arr[i][j] + arr2[i][j])
            }
        }
        return summedArray;
    }
    function displayArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].join(', '));
        }
    }

    main();
}

/* Write an object oriented program to store and display the values of a 2D array */
function task23() {
    class Program {
        constructor() {
            const size = parseInt(prompt("Array Size: "));
            this.arr = this.getArray(size);
            this.displayArray();
        }
        getArray(size) {
            const ar = [];
            for (let i = 1; i <= size; i++) {
                const arr = prompt(`Array Values (${i}/${size}): `).split(' ').map(e => parseInt(e));
                ar.push(arr);
            }
            return ar;
        }
        displayArray() {
            console.log("Array elements are: ");
            for (let i = 0; i < this.arr.length; i++) {
                console.log(this.arr[i].join(' '));
            }
        }
    }

    new Program();
}

/*  Write a menu driven program to calculate the area of a given object */
function task24() {
    class Area {
        circle(radius) {
            return Math.PI * (radius ** 2);
        }
        square(length) {
            return length * length;
        }
        rectangle(length, breadth) {
            return length * breadth;
        }
        triangle(base, height) {
            return 1/2 * base * height;
        }
    }

    class MyClass extends Area {
        constructor() {
            super();
            console.log("Enter your choice: ");
            console.log("1. Circle\n2. Square\n3. Rectangle\n4. Triangle");
            const choice = prompt("Choice: ");
            
            if (choice === '1') {
                const rad = parseFloat(prompt("Radius: "));
                this.circle(rad);
            } else if (choice === '2') {
                const length = parseFloat(prompt("Length: "));
                this.square(length);
            } else if (choice === '3') {
                const length = parseFloat(prompt("Length: "));
                const breadth = parseFloat(prompt("Breadth: "));
                this.rectangle(length, breadth);
            } else if (choice === '4') {
                const base = parsefloat(prompt("Base: "));
                const height = parsefloat(prompt("Height: "));
                this.triangle(base, height);
            }
        }
        circle(radius) {
            const area = super.circle(radius);
            console.log("The area of the circle is: " + Math.round(area, 2));
        }
        square(length) {
            const area = super.square(length);
            console.log("The area of the square is: " + Math.round(area, 2));
        }
        rectangle(length, breadth){
            const area = super.rectangle(length, breadth);
            console.log("The area of the rectangle is: " + Math.round(area, 2));
        }
        triangle(base, height) {
            const area = super.triangle(base, height);
            console.log("The area of the triangle is: " + Math.round(area, 2));
        }
    }

    new MyClass();
}


/* Write a Javascript program to display the status (I.e. display book name, author name & reading status) of books. */
function task25() {
    var library = [ 
        {
            title: 'Bill Gates',
            author: 'The Road Ahead',
            readingStatus: true
        },
        {
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            readingStatus: true
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            readingStatus: false
        }
    ];
    for (const book of library) {
        if (book.readingStatus) {
            console.log(`Already read '${book.title}' by ${book.author}.`);
        } else {
            console.log(`You still need to read '${book.title}' by ${book.author}.`);
        }
    }
}

/* Given a variable named my_string, try reversing the string then print the reversed string to the console. Finally, print the typeof of the my_string variable to the console. */
function task26() {
    const my_string = prompt("Enter a string: ");
    try {
        var reversed = my_string.split('').reverse().join('');
        console.log(reversed);
    } catch (error) {
        console.log(error);
    } finally {
        console.log(typeof reversed);
    }
}

/* Given a variable named my_height, you must throw errors under specified conditions: */
function task27() {
    const my_height = parseInt(prompt("Enter height: "));
    const limit = parseInt(prompt("Enter a limit: "));

    if (isNaN(my_height)) {
        throw 'notANumberError';
    } else if (my_height > limit) {
        throw 'hugeHeightError';
    } else if (my_height < limit) {
        throw 'tinyHeightError';
    } else {
        console.log(my_height);
    }
}

/* Create a constructor function that follows conditions. */
function task28() {
    function Car(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }

    let hyundai = new Car("IONIQ 6", 300, 185);

    console.log(Car);
    console.log(hyundai);
}

/*  Write a myFilter function that takes 2 parameters: myArray and callback.  */
function task29() {
    let inpArr = prompt("Array: ").trim().split(' ').map(e => parseInt(e));

    function myFilter(arr, cb) {
        return cb(arr);
    }

    const {sum, result} = myFilter(inpArr, (el) => {
        let sum = 0;
        for (let i = 0; i < el.length; i++) {
            sum += el[i];
        }
        const result = (sum % 2 === 0);
        return { sum, result };
    });

    console.log("Sum total is: " + sum);
    console.log("Callback function returned " + result);
}

// either call taskX() function and `node index.js`
// or enter node REPL and `.load index.js` then call any function.
// comment out first line to run in browser...