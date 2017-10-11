/*
    Peter Casey
    v 0.0001
    10/3/17
*/

<<<<<<< HEAD
// Output numbers to a text area
//   Parameters:
//      Input: How many numbers to output
//      Output: The result of n^3
function cube(inputNumber) {
    let outputValue;
    outputValue = inputNumber * inputNumber * inputNumber;
    return outputValue;
}

function testCube() {
    let numToCube = 3;
    let result = cube(numToCube);
    alert(result);
}

function outputNumbers(howMany) {
    let textBox1 = document.getElementById("text01");
    textBox1.value = "";

    for (let i = 0; i < howMany; i += 1) {
        textBox1.value = textBox1.value + i + '\n';
    }
}

function textAreaExample() {
    outputNumbers(100);
}

function textAreaExample2() {
    let textBox1 = document.getElementById("text01");
    //textBox1.value = "";
    let inputBox1 = document.getElementById("stuff");
    let inputText = inputBox1.value;
    textBox1.value = inputText + '\n' + textBox1.value;
    let names = textBox1.value.split("\n");
    textBox1.value = names;
=======
// Convience function to get HTML element
function getE(id) {
    return document.getElementById(id);
}

function getEleText(id) {
    return document.getElementById(id).value;
>>>>>>> c44df055b2f3f35c4a8125e7114fc4051e413635
}

// Simple function to test our setup
function test() {
<<<<<<< HEAD
    
=======
    alert("Testing getEleText(): " + getEleText("stuff"));
>>>>>>> c44df055b2f3f35c4a8125e7114fc4051e413635
}

function readText() {
    // Grab the input element from the document
    let inputItem;
    inputItem = document.getElementById("stuff");
    // Grab the text from the input element
    let theText = inputItem.value;
    // Demonstrate...
    alert("value is " + theText);
    let theTextUpper = theText.toUpperCase();
 //   inputItem.value = theTextUpper;
    // Grab the output element from the document
    let outputItem = document.getElementById("stuff2");
    outputItem.value = theTextUpper;        
}