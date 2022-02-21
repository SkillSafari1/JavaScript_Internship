// Conditional Statements
// IF and Else Statements

// Small Story
// IF you are hungry
// Eat apple
// Will not eat apple

// Example 1

var boo = false

if (boo) {
    console.log("It is true")
} else {
    console.log("It is false")
}

// Example 2

var num = 3>2
console.log(num)

if (num) {
    console.log("The statement is True")
} else {
    console.log("The statement is false")
}

// Example 3

var Name = "Kiran"
var age = 30
var work = "abc"

if (work == "trainer") {
    console.log(Name + " is " + age + " years old is a trainer")
} else if (work == "developer") {
    console.log(Name + " is " + age + " years old is a developer")
} else if (work == "designer") {
    console.log(Name + " is " + age + " years old is a designer")
} else {
    console.log(Name + " is " + age + " years old. " + Name + " is doing some other work")
}

// ------------------------------------------------------------------------

// Function
// Function is a block of code

function sample () {
    console.log("Function done")
}

console.log("Print 1")
console.log(sample())
console.log("Print 2")

// Return in Function

function demo () {
    return 10 + 20
}

console.log("Print 1")
console.log(demo())
console.log("Print 2")

// Parameter for function

function calculator (num1, num2, opp) {
    if (opp == "ADD") {
        return num1 + num2
    } else if (opp == "SUB") {
        if (num1 > num2) {
            return num1 - num2
        } else {
            return num2 - num1
        }
    } else if (opp == "MUL") {
        return num1 * num2
    } else if (opp == "DIV") {
        return num1 / num2
    } else {
        return "Invalid Operation"
    }
}

console.log("Print 1")
console.log("Print 2")
console.log(calculator(10, 15, "SUB"))

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// &&	logical and
// ||	logical or
// !	logical not