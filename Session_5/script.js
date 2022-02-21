// Objects

var myObject = {
    "name": "Pikachu",
    "type": "Electric",
    "Special": "Thunder Bolt"
}

// To access the object
console.log(myObject)
console.log(myObject["name"])

// dot notation
var data = myObject.type
console.log(data)

// If you want to edit the values
myObject.name = "Raichu"
console.log(myObject)

// To add new values

myObject.owner = "Ash"
console.log(myObject)

// To delete a value

myObject.sample = "Sample"
console.log(myObject)

delete myObject.sample
console.log(myObject)

// ---------------------------------------------------------------------------

// Loops
// While - FOR - DO WHILE

// While Loop

var i = 0

while (i<=5) {
    console.log(i)
    i++
}

// Do While loop

var myArray = []
var i = 0

do {
    myArray.push(i)
    i++
} while (i<5)

console.log(myArray)

// FOR loop

for (var i = 0; i<5; i++) {
    console.log(i + " is the current value")
}

for (var i = 0; i<13; i+=2) {
    console.log(i + " is the current value")
}

for (var i = 13; i>0; i-=2) {
    console.log(i)
}

// For lop using an array

var myArray = [1,2,3,4,5,6,7,8,9]

for (var k=0; k<myArray.length; k++) {
    console.log(myArray[k])
}

var sample = "Skill Safari"

for (var k=0; k<sample.length; k++) {
    console.log(sample[k])
}