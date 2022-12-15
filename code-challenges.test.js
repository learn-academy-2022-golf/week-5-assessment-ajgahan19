// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest 

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

//RANTS:
// This past weekend I went over the syllabus and watched 8 lectures one of them being "Testing with Jest", Reviwed notes and tired out a couple problems. This problem below I've ran about 9 or 10 different times. 
// QUESTION: How many functions can you pass within a function within a it block? In the Lecture that was given Elyse talked about passing anonomous functions within a function. I guessing an anonmous functions is when you dont have anything in the parenthesis. 
//For this problem I will start with a describe statement, I will call it saltySpittune. 

//         const secretCodeWord1 = "Lackadaisical"
//         // Expected output: "L4ck4d41s1c4l"
//         const secretCodeWord2 = "Gobbledygook"
//         // Expected output: "G0bbl3dyg00k"
//         const secretCodeWord3 = "Eccentric"
//         // Expected output: "3cc3ntr1c"
//         
             //For my first act I will start by sawing a man in half. 
             // I will start the show with a describe statement, I will call it saltySpittune. 
            //For my "it" statements function, I will have three expect statements, one per variable...
            //nothing to hide here folks; other than some broken code that will need to be defined.
            // lastly, I will use .toEqual as my method. 
            // We use the method, .toEqual to compaire values. Just like we use Strick Equality operators. ===
            //Remember: You do not use console log to invoke the function. The function is invoked within the parentheis after, expext.
//          

//         
// describe ("saltySpittune", () => {
//     it("takes in a string and returns a string with a coded message", () => {
//         expect(saltySpittune(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(saltySpittune(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(saltySpittune(secretCodeWord3)).toEqual("3cc3ntr1c")
//      })
//     })


//     This is a good fail! We are getting some feed back on what needs to be addressed.   
//                  Reference   Error: saltySpittune is not defined

//     36 |         // Expected output: "3cc3ntr1c"
//     37 |         //Remember: You invoke the function within the parentheis of 
//   > 38 |         expect(saltySpittune(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//        |         ^
//     39 |         expect(saltySpittune(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     40 |         expect(saltySpittune(secretCodeWord3)).toEqual("3cc3ntr1c")
//     41 |      })

//     at Object.expect (code-challenges.test.js:38:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.186 s
// Ran all test suites.

//Since we did not get our function to pass we need to create one that will. 
// b) Create the function that makes the test pass.

//First thing that comes to mind is a conditional statement per each letter. 
// I also think a for loop is befitting of a junior bevloper lol. So I shall itterate through the strings characters and identify them. 
// I think there should be other ways but I might come back and see if I can do better. 


// Create a function that takes in a parameter named string.
// The single parameter will take in a string as an argument.
// Find a way to iterate through the string.
// Replace the character with a number. <- I was looking around on google to broaden my understanding of .toEqual then I thought why can I just replace the letters with .replace
// Return the string 

const morecushinforthe = []
    for(let i = 0; i < string.length; i++){
    if (string[i] == "a"){
        morecushinforthe.push(string[i].replace("a", 4))
    }
    else if (string[i] == "e"){
        morecushinforthe.push(string[i].replace("e", 3))
    }
    else if (string[i] == "E"){
        morecushinforthe.push(string[i].replace("E", 3))
    }
    else if (string[i] == "i"){
        morecushinforthe.push(string[i].replace("i", 1))
    }
    else if (string[i] == "o"){
        morecushinforthe.push(string[i].replace("o", 0))
    }
    else {morecushinforthe.push(string[i])}
}
    return morecushinforthe.join("")
}




// const saltySpittune = (string) => {
//      return (Lackadaisical).split("");
// }
//The initial troubleshooting step was to confirm that I converted the string into an array.
// Expected: "L4ck4d41s1c4l"
//     Received: ["L", "a", "c", "k", "a", "d", "a", "i", "s", "i", …]
//     Test Suites: 1 failed, 1 total
//     Tests:       1 failed, 1 total



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("particularlatters", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("returns an array of all the words containing that particular letter", () => {
        expect"particularlatters(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect"particularlatters(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
    })
//This is a good fail 

    // ReferenceError: wordSearch is not defined
//     Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total


// b) Create the function that makes the test pass.

/*
Create a function named wordSearch.
The function will take in two parameters named array and letter.
The argument that will be passed into the parameter array will be an array of words.
The argument that will be passed into the parameter array will be variable that will contain one character inside of a string.
Using the .filter() method, you can use the variable as the call back function
The function will return a new array that contains only the words that match the character
*/
// const wordSearch = (array, letter) => {
//     return array.filter((value) => value.toLowerCase().includes(letter.toLowerCase()))
// }
/*
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Reading the documentation on the .filter() method, there is an example of how to use the method to find a string to uses the filter criteria and push it into a new array.
Using the .toLowerCase() method, I converted all of the strings inside of the array to lowercase in order to ensure that the search parameter will match the character regardless if it was originally uppercase or lowercase.
*/





REWRITE VARiables ect.
hit up ruby then push to main 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.


// a) Create a test with expect statements using the variable provided.

/*
For my tests describe statement I will use the name "fullHouse"
For the it statement arguement string I will put the end part of the prompt as it is explaining what the test function will do. 
I will make one expect statement per variable declaration to take in each hand array with numbers in it and it will return me a boolean value of true or false depending on if the "hand" has exactly one pair and a three of a kind. So if it does it will return true stating it is a fullHouse
*/

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouse", () => {
    it("function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
    })
  })

  //    ReferenceError: fullHouse is not defined



// b) Create the function that makes the test pass.

/* This first method of using for look and conditional at least in this first way was only party effective. only worked for the first and last array. 
*/

// const fullHouse = (array) => {
//     for (i=0; i < array.length; i++)
//     if (array.indexOf(array[i], 3)){
//     return true
//     }
//     else (array.indexOf(array[i], 4))
//     { 
//     return false
//     }
//  }

/*
This one Im not really proud of in my head it seemed pretty straight forward. 
However, when it came to writitng it, I hit a roadblock in how I can articulate what im trying to do. 
It took some diggin through the sylubus to find something that works.  
So as you plow through your for loop. + 1 will keep going. 
*/

const fullHouse = (array) => {
    let countObj = {}
    for(let i of array){
      countObj[i] = (countObj[i] || 0) + 1;
    }

let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }

// console.log(fullHouse(hand1));