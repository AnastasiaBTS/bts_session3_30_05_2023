// //Code the function processNumbers inside processNumbers.js
// //# **Level up**
// > Create a function called _processNumbers_ that receives a JSON object with one property _numbers_ as array of integers and returns an object containing the maximum number and the total sum.
// Do you know the [Math library](https://syllabus.migracode.org/courses/introduction-3/course-content/javascript-i/week-1)?
// Test it via a console application.
// Test it with Jest.
// ![bg left:20% h:100%](https://www.freecodecamp.org/news/content/images/2023/02/image3-1.png)

// JSON stands for JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page
// JSON is "self-describing" and easy to understand

function ProcessNumbers (JSONObject){
    //JSON.parse = Json object -> JavaScript object
const object = JSON.parse (JSONObject)
const numbers = object._numbers_
//"..." separate array
const maxNumber = Math.max (...numbers)

let sum = 0
for (number of numbers) {
    sum += number
}
//"{}"" to declare object and all code blocks
return {
maxNumber ,
sum
}
}

module.exports = ProcessNumbers;
