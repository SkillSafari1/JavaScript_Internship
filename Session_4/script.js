// Working with Arrays
// Array - collection of data

// 1D Array
var myArray = ["Kiran", "Naveen", "Amar"]
console.log(myArray)

// 2D Arrays
var myArray1 = [["Kiran", 30, true], ["Naveen", 30, false], ["Amar", 29, true]]
console.log(myArray1)

// Multi D Array
var myArray2 = [[1,2,3],[4,5,6],[[7],[8,9]]]
console.log(myArray2)

// To access these arrays

// 1D
var data = myArray[2]
console.log(myArray[2])
console.log(data)

// Multi D array
console.log(myArray1[2][1])

// complex
console.log(myArray2[2][1][1])

var myArray = ["Kiran", "Naveen", "Amar"]

// To change the value of an element
myArray[1] = "NAVEEN"
console.log(myArray)

// PUSH - POP - SHIFT - UNSHIFT

// PUSH - used to append element or array in an array
myArray.push("Manoj")
console.log(myArray)

myArray.push("Vicky", "Prabu")
console.log(myArray)

// POP - to remove the last element for the array
myArray.pop()
console.log(myArray)
myArray.pop()
console.log(myArray)

// SHIFT - to remove the first element form the array
myArray.shift()
console.log(myArray)

// UNSHIFT - to add an element in the front of an array
myArray.unshift("Kiran")
console.log(myArray)

// -----------------------------------------------------------------------

// Switch
// Switch statement

function switch1 (data) {
    var answer = ""
    switch(data) {
        case 1:
            answer = "Value is one"
            break
        case 2:
            answer = "Value is Two"
            break
        case 3:
            answer = "Value is Three"
            break
        case 4:
            answer = "Value is Four"
            break
        default:
            answer = "Other Number"
    }
    return answer
}

console.log(switch1(5))

function switch2(data) {
    var answer = ""
    switch(data) {
        case 1:
        case 2:
        case 3:
            answer = "Value is between 1 and 3"
            break
        case 4:
        case 5:
        case 6:
            answer = "Value is between 4 and 6"
            break
        default:
            answer = "Other Number"
    }
    return answer
}

console.log(switch2(5))

// --------------------------------------------------------------------