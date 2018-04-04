// For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

// Simple function that prints to the browser console when called
function addedExcitement(message) {
    console.log(message);
    // document.write(message);
    // //return yourMessage;
}

addedExcitement("Hello World");

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if (i > 1 && i % 3 === 0) {
            buildMeUp += `${theWordArray[i]}`;
            buildMeUp += `!`.repeat(i /3);
        }  else {
        // Concatenate the new word onto buildMeUp
            buildMeUp += `${theWordArray[i]} `;
        // Print buildMeUp to the console
            console.log(buildMeUp);
        }
    }

}

// Invoke the function and pass in the array
addExcitement(sentence);   



