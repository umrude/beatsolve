
// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
// if you don't want answers viewable in the code, then you should use PHP and mySQL database
var questions = [
        ["Why does JavaScript and Java have similar names?", "Javascript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both orginated ont he island of Java", "The creators loved coffee", "B"],
        ["What are variables used for in JavaScript programs?", "Storing numbers, dates or other values", "Varying randomnly", "Causing high-school alegra flashbacks", "Creating variation in a function", "A"],
        ["What is the correct JavaScript syntax to write 'Hello World'?", "System.out.println('Hello World)", "write.me'Hello World'", "document.write('Hello World')", "response.write('Hello World')", "C"],
        ["Inside which HTML element do we put the JavaScript", "'< script >'", "'< js >'", "'< javascript >'", "'< dothing >'", "A"],
        ["How does JavaScript store dates in a date object?", "The number of milliseconds since January 1st, 1970", "The number of seconds since the earth's first rotation", "It looks at a clock", "Number of days since January 1st, 1899", "A"]
    ];
// this get function is short for the getElementById function  
function get(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
        pos = 0;
        correct = 0;
    // stops rest of renderQuestion function running when test is completed
        return false;
    }
    get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>" + question + "</h3>";
  // the += appends to the data we started on the line above
    test.innerHTML += "<input type='radio' name='choices' value='A'>  " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'>  " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "  + chC + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br><br>";

}
function checkAnswer() {
  // use getElementsByName because we have an array which it will loop through
    var i;
    choices = document.getElementsByName("choices");
    for (i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
  // checks if answer matches the correct choice
    if (choice === questions[pos][5]) {
    //each time there is a correct answer this value increases
        correct++;
    if (correct === 5){
    window.location.href = "beatsolve.html"// when the user reaches 5 correct questions, they are able to move on to next portion of beatsolve
}
    }
  // changes position of which character user is on
    pos++;
  // then the renderQuestion function runs again to go to next question
    renderQuestion();

}
window.addEventListener("load", renderQuestion, false);

