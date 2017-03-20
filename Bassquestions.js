function multipleChoice() {
    "use strict";
    var questions = [10],
        choices = [10],
        answers = [10];
   
    //questions
    questions[0] = "Why does JavaScript and Java have similar names?";
    questions[1] = "What are variables used for in JavaScript Programs?";
    questions[2] = "What is the correct JavaScript syntax to write 'Hello World'?";
    questions[3] = "Inside which HTML element do we put the JavaScript?";
    questions[4] = "The _______ method of an Array object adds and/or removes elements from an array.";
    questions[5] = "Using _______ statement is how you test for a specific condition.";
    questions[6] = "How does JavaScript store dates in a date object?";
    questions[7] = "Is it possible to nest functions in JavaScript?";
    questions[8] = "What is the correct syntax for referring to an external script called 'abc.js'?";
    questions[9] = "Which of the following is not a valid JavaScript variable name?";
    
    // choices
    choices[0] = ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "None of the above"];
    choices[1] = ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "Creating variation in a function"];
    choices[2] = ["System.out.println('Hello World')", "write.me.'Hello World'", "document.write('Hello World')", "response.write('Hello World')" ];
    choices[3] = ["<script>", "<js>", "<javascript>", "<dothing>"];
    choices[4] = ["remove", "deleteMe", "splice", "cut"];
    choices[5] = ["where", "if", "then", "do"];
    choices[6] = ["The number of milliseconds since January 1st, 1970", "The number of seconds since the earth's first rotation", "It looks at a clock", "Number of days since January 1st, 1899"];
    choices[7] = ["True", "False"];
    choices[8] = ["<script href='abc.js'>", "<script name='abc.js'>", "<script src='abc.js'>", "None of the above"];
    choices[9] = ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"];
   
    //answers
    answers[0] = ["JavaScript's syntax is loosely based on Java's"];
    answers[1] = ["Storing numbers, dates, or other values"];
    answers[2] = ["document.write('Hello World!')"];
    answers[3] = ["<script>"];
    answers[4] = ["splice"];
    answers[5] = ["if"];
    answers[6] = ["The number of milliseconds since January 1st, 1970"];
    answers[7] = ["True"];
    answers[8] = ["<script src='abc.js'>"];
    answers[9] = ["2names"];

   // 
    
    
    
}
