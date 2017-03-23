// pos is position of where the user in the test or which question they're up to
var pos = 0,
    test,
    test_status,
    question,
    choice,
    choices,
    chA,
    chB,
    chC,
    chD,
    correct = 0;

var questions = [
    ["Why do JavaScript and Java have similar names?", // question 1
        "Javascript is a stripped-down version of Java", //A
        "JavaScript's syntax is loosely based on Java's", //B
        "They both orginated on the island of Java", //C
        "The creators loved coffee", //D
        "B"],
    
    ["What are variables used for in JavaScript programs?", //question 2
        "Storing numbers, dates or other values", //A
        "Varying randomnly", //B
        "Causing high-school alegbra flashbacks", //C
        "Creating variation in a function", //D
        "A"],
    
    ["What is the correct JavaScript syntax to write 'Hello World'?", //question 3
        "System.out.println('Hello World')", //A
        "write.me'Hello World'", //B
        "document.write('Hello World')", //C 
        "response.write('Hello World')", //D
        "C"],
    
    ["Inside which HTML element do we put the JavaScript", //question 4
        "< script >", //A
        "< js >", //B
        "< javascript >", //C
        "< dothing >", //D
        "A"],
    
    ["How does JavaScript store dates in a date object?", //question 5
        "The number of milliseconds since January 1st, 1970", //A
        "The number of seconds since the earth's first rotation", //B
        "It looks at a clock", //C
        "Number of days since January 1st, 1899", //D
        "A"]
];

// this get function is short for the getElementById function  
function get(x) {
    "use strict";
    return document.getElementById(x);
}

function playAudio() {
    "use strict";
    var x = get("bass_audio");
    x.play();
}

function renderQuestion() {
    "use strict";
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct! Here's the bass part! Press 'Final' when you're ready to move on!</h2>";
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
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br><br>";
}

function checkAnswer() {
    "use strict";
    // use getElementsByName because we have an array which it will loop through
    var i;
    choices = document.getElementsByName("choices");
    for (i = 0; i < choices.length; i += 1) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // checks if answer matches the correct choice
    if (choice === questions[pos][5]) {
        //each time there is a correct answer this value increases
        correct += 1;
    }
    // changes position of which character user is on
    pos += 1;
    if (correct !== 5 && pos === 5) {
        window.alert(test.innerHTML = "You got " + correct + " of " + questions.length + " questions correct! Try again!");
        renderQuestion(false);
    } else if (correct === 5) {
        
        if (window.confirm("You got " + correct + " of " + questions.length + " questions correct! Nice Work, here's the next part of the song! Press 'OK' to head to the final part of the game or press 'Cancel' to chill here and listen to the rest of the track")) {
            
            window.location.href = "beatsolve_final.html"; // when the user reaches 5 correct questions, they are able to move on to next portion of beatsolve    
       
        } else {
        
            playAudio(); //plays the Audio when user presses 'cancel'
        
        }
    }
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
