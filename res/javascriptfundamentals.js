document.querySelectorAll('.btn').forEach(item => {         // internal javascript if between <script> tags
    item.addEventListener('click', () => {
        alert('this is good')
    })
})
document.write('hello from javascriptfundamentals.js file');
// alert('hello people');
console.log('hello world');

// variable - most basic building block
// variables - store, access, mofify === value
// Declare, Assignment Operator, Assign value

//let, (better than var) var, (basic) --- can contain digits, letters, underscore, $
//must start with letter, $ or _

//no keyword, cannot start with number

//case sensitive, fullname vs fullName, camelCase or underscore

let firstName = "d"; 
console.log(firstName);

let address, zip, state;
address = "101 main street";
zip = "60612";
state = "CA";
console.log(address, zip, state);

let random123_$ = 'random';
console.log(random123_$);

// LET VS CONST VS VAR

// using var
var value = "some value";
value = "some other value"; // will take precedence if reassign value on a later line

// using let
let aName = "john";
aName = "peter"; // will take precedence

// using const (CONSTANT) - can't re-assign
const lastName = "jordan"; // MUST ASSIGN a value
//to declare it again will give an error

console.log(value);
console.log(aName);
console.log(lastName);

// "" or ' -- no difference, personal preference
const escape ='john\'s courses are the best'; // and 'escape' to tell the js 'this is not a syntax, treat as text'
// or
const quotationMarks = "john's courses are very good" // use of each quotation marks -- knowing this i would always use "for strings"

// String Concatenation (+)- combine string values + "spaces / formatting in quotations"
// `` - backticks (template strings) easier option

const anotherName = "john";
const surName = "shakeandbake";
let fullName = anotherName + ' ' + surName;
                                    //   String Concatenation
console.log("Hello there your full name is: " + anotherName + " " + surName);
console.log("Hello the full name is: " + fullName + "<br)");

const website = "google";
const url = "https://www." + website + ".com";

console.log(url);

// Numbers
// loosely typed = dont declare type

const number = 34;
let pants = 2.466;
pants = "are great";

console.log(number);
console.log(pants);

const number1 = 33;         // purple/blue in console
const number2 = 2.546;      

console.log(number1)
console.log(number2);

const number3 = "2.456";        // black in console - because 'string'

const add = number1 + number2;
const sub = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

// +=, =+, /=, ++, --, %
// modules (%) operator returns the remainder after integer division

let number4 = 40;
number4 += 5; // adds five to value of number4
number4 -= 1;
number4 ++;
number4 --;

// ++ = +1
// -- = -1

console.log(number4)

const slices = 10;
const children = 3;
const amount = 10/3;

console.log(amount);

const amount2 = slices % children;

console.log(amount2);

const random1 = 4+6+10*10;
const random2 = (4+6+10)*10;

console.log(random1);
console.log(random2);

let number5 = '10';   // implicit type conversion "technically its not a number"
let number6 = "23";
const result2 = number5 + number6;

console.log(result2);

// html form

const randomNumber = 13;
document.querySelector('.form').addEventListener('submit',
function (e) {
    e.preventDefault();
    let value = document.getElementById('amount').value;
    value = parseInt(value);             // adding this line assures the user will NOT INPUT A STRING 
    console.log('Input Value Type');
    console.log('Sum of Two Values');
    console.log(randomNumber + value);
}
);

// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// String
const text = "some text";
// Number
const number7 = 45;
// Boolean
let value1 = true;
let value2 = false;
// Null
const result3 = null;
// Undefined
let named;
// Symbol(ES6)
console.log(typeof text);   // will return string
console.log(typeof number)  // will return number
console.log(typeof value1);  
console.log(typeof value2);
console.log(typeof null);   // will actually return object, even though it should be null
console.log(typeof named); // will return undefined

// Arrays, Functions and Objects
// Arrays - [], 0 index based

const friend1 = "anna";
const friend2 = "jessie";          
const friend3 = "monica";
const friend4 = "mark";
 // instead can use an array, can store strings, numbers, booleans, etc
const friends = ["anna","jessie","monica","mark",45,undefined,null];
let = bestFriend = friends[2]
friends[4] = "anna";

console.log(friends);
console.log(friends[0]); // to access first item in array (0 index based)
console.log(friends[3]);
console.log(bestFriend);
console.log(friends);
console.log(friends[4]);

// Functions - declare, invoke

function hello()   {        // declaring function - must have paranthesis even if no parameters defined
// logic                        
console.log("Hello there Bob");
console.log("Hello There John");
console.log("Hello there Susy");
}     
hello();            // invoking function (case sensitive)

// Params - when to declare/define
// placeholders, local vars
// arguments - when to invoke/call/run
// use vars/values, multiple params, undefined

const bob = "Bob";
const susy = "Susy";
const anna = "Anna";

function greet(name)   {                         
console.log("Hello there " + name);
}     
// greet Mark
greet("Mark"); 
// greet Anna  
greet("Anna");  
// greet Monica   
greet("Monica");     

greet(4);
greet(anna,bob,"Susy"); // bob & susy not showing up?
greet("Susy");

// return
// default undefined, shortcuts, ignores after
// 1 inch 2.54cm

const wallHeight = 80

function calculate(value){
    const newValue = value * 2.54;
    console.log("The value in cm is: " + (value * 2.54)+" cm");
    return newValue;  // equal to return value * 2.54;
// anything typed after return (e.g console.log) will not run & will be ignored, return is end of function
}

calculate(200); // will be ignored, did not store this value in function
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);                // if you have a function that has to return some sort of value then you have to set up a return, or will return undefined
// if wrong code can return 'NaN' = not a number (if used string instead of value in a calculation)


TODO: // i dont really understand the following... or the above for that matter

// expressions - another way to define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries

//function definition/declaration
function addValues(num1,num2) {
    return num1 + num2;
}

const firstValue = addValues(3,4);
const secondValue = addValues(12,34);
// function expression
const addition = function (num1,num2) {     // can leave or delete name (once deleted will be called anonymous function, where the variable right now holds this function)
    return num1 + num2;
}
// const thirdValue = addition(5,6); 
const values = [firstValue,secondValue,(addition(5,6))];
console.log(values);

const multiply = (num1,num2) => num1 *num2;     // arrow functions, can only make them as function expressions

// can use expression of function definition/declaration

// exports.nameOfMethod = function() {         // example of interacting with gadsby api
// }

// Objects - key/value pairs    methods (properties/keys have values in the object, if the property/value is a function, then it is called a method)
// dot notation

const person = {            // create object
    name1: "John",        // properties
    secondNAME: "Peters",         // error if you dont add comma
    age: 40,
    education: false,
    married: true,
    siblings:['Anna','Susan','Peter'],
    greeting: function (){
console.log("Hello my name is JOHN");
    }
}

console.log(person.name1);
console.log(person.siblings[2]);
person.greeting();

// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===

// if(condition){
//    codeToExecute
//}

const aValue = true;
const anotherValue = 2 > 1;
// console.log(typeof value);
const value3 = false;    
const value4 = 1 > 2;       // false, will not run any code

if (true) {
    console.log("Hello World");
}

if (anotherValue) {
    console.log ("Another Value is 2 is bigger than 1")
}
else {                                          // if value is false    FIXME:
    console.log ("The value was false);")       // not sure how to get this to show? 
}

// working example

const number8 = 4;
const number9 = 6;
const number10 = 10;
const number11 = 10;

if (number8 > number9) {
    console.log ("First number is bigger than second")
} else {
    console.log("Second number is bigger than first")
}

//if values were equal? 
// Comparison Operators >, <, >=, <=, ==, ===, !=, !==

const result4 = number10 >= number11;

if (number10 > number11) {
    console.log ("First number is bigger than second")
} 
else if (result4) {
    console.log ("first number equal to second");
}
else {
    console.log("Second number is bigger than first")
}

// ! means 'NOT'

const value5 = false;

if (!value5) {
    console.log ("value is not true");
}

// == checks only value
// === checks value and type

const number12 = 6;
const number13 = 6;
const number14 = "6";

const value6 = number12 == number13;
const value7 = number12 === number13;
const value8 = number13 == number14;
const value9 = number13 === number14;
const value10 = number13 != number14;       // is not equal
const value11 = number13 !== number14;      // is not equal

console.log (value6);
console.log (value7);
console.log (value8);
console.log (value9);
console.log (value10);
console.log (value11);

// Logical Operators
// (|| - OR), (&& - AND), !

const mansName = "peter";
const mansAge = 24;
                    // or
if(mansName === "bob" || mansAge === 24) {      // one of these conditions are met, hello there will display        && means both conditions must be met
    console.log ("Hello there user");
}
else {
    console.log("Wrong values");
}

// Switch
// dice values: 1-6

const dice = 1;

/* else if

if (dice === 1) {
    console.log("You got one");
    }
else if (dice === 2) {
        console.log("You got two");
    }
    if (dice < 1 || dice > 6) {
        console.log("You did not roll the dice");
    }

/* all if

if (dice === 1) {
console.log("You got one");
}
if (dice === 2) {
    console.log("You got two");
}
if (dice < 1 || dice > 6) {
    console.log("You did not roll the dice");
}   */

switch(dice) {
    case 1: 
    console.log ("You got one");
    //without a break, the other case scripts will run
    break
    case 2: 
    console.log ("You got two");
    break
    case 3: 
    console.log ("You got three");
    break
    default:
    console.log("You did not roll the dice");
}

// Loops
// repeatedly run a block of code while condition is true
// do while loop
// code block first, condition second
// runs at least

let amount3 = 10;     // must use let, as amount3 will be changing

while(amount3 > 0) {        FIXME: // this worked strangely for me? only one iteration in console
    console.log ("I have " + amount + " dollars and I'm going to the mall");
amount3 --;             // on every iteration, supposed to subtract one? according to next logic
}

let money = 0;

do {
    console.log("You have " + money + " dollars");      // this one worked fine
    money++;        // on every iteration, adds 1
}
while (money < 10);

// for loop

let i;                                       
for(i = 0; i < 10; i++) {
    console.log("and the number is: " + i);         // counts to 9
}

for (let numberino = 11; numberino >= 0; numberino --) {        // detracts from 11
    console.log("and the number is: " + numberino);
}
// String properties and methods
// wrapper String Object, dont memorise methods
let text = "Peter Jordan";

const person = {
    name: "Peter", // property
    greeting() {
        //method
        console.log("Hey, I'm Peter");
    },
};

console.log(person);

console.log(person.name);
person.greeting();




















