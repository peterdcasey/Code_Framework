/*
    Peter Casey
    v 0.002
    
    NOTE: The Input: and Output: elements are INTERNAL inputs
          and outputs. Input from HTML elements and output to
          HTML elements is EXTERNAL input and output.
*/

// Cube the number input and return it
//   Parameters:
//      Input: How many numbers to output
//      Output: The result of input^3
function cube(inputNumber) {
    let outputValue;
    outputValue = inputNumber * inputNumber * inputNumber;
    return outputValue;
}

// Test the cube() function, pass it a number
//   and alert the result.  3 --> 27
// Input: none
// Output: none
function testCube() {
    let numToCube = 3;
    let result = cube(numToCube);
    alert(result);
}

// Print the numbers from 0..howmany to a text area
// Input: How many numbers to print
// Output: none
function outputNumbers(howMany) {
    let textBox1 = document.getElementById("text01");
    textBox1.value = "";

    // for looping structure...
    //  initialize    test      increment
    for (let i = 0; i < howMany; i += 1) {
        textBox1.value = textBox1.value + i + '\n';
    }
}

// Call the outputNumbers() function
// Input: none
// Output: none
function textAreaExample() {
    outputNumbers(100);
}

// Demonstrate working with a text area and an input box
//   Get the two HTML elements
//   Add the text from the input box to the text box
// Input: none
// Output: none
function textAreaExample2() {
    let textBox1 = document.getElementById("text01");
    //textBox1.value = "";    // clear the text box, not needed
    let inputBox1 = document.getElementById("stuff");
    let inputText = inputBox1.value;
    // assign the current value, the line break, and the new value
    textBox1.value = inputText + '\n' + textBox1.value;
    // Optional example below, comment out to disable
    // example of splitting a string on a specific character
    let names = textBox1.value.split("\n");
    // assign the resulting array to the text box
    textBox1.value = names;
}

// Demonstrate reading/writing with input boxes
// Input: none
// Output: none
function readText() {
    // Grab the input element from the document
    let inputItem;
    inputItem = document.getElementById("stuff");
    // Grab the text from the input element
    let theText = inputItem.value;
    // Demonstrate...
    alert("value is " + theText);
    // Convert the text to uppercase
    let theTextUpper = theText.toUpperCase();
    // Grab the output element from the document
    let outputItem = document.getElementById("stuff2");ou
    // Put the text into the output input box
    outputItem.value = theTextUpper;        
}