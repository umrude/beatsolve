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
///////GLOBAL VARIABLES

var questions = [
    ["What is Tempo?", "The pace of the song", "The repeated sequences of a song", "The notes in a song","The volume of the song", "A"],
    //
    ["What do you use to calculate the speed of a song?", "Metronome","Guessing","Playing an instrument","Asking a instructor", "A"],
    //
    ["What is the level and intensity of sound measured in?", "Sound level meter","Decibels","Frequency","Distance", "B"],
    //
    ["What do we call the section of the song with the same lyrics and the same melody every-time?", "Bridge","Solo","Introduction","Chorus", "D"],
    //
    ["What is harmony in music?", "The strong, regular, repeated pattern of movement or sound", "The combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect","A sequence of single notes that is musically satisfying","The character or quality of a musical sound or voice as distinct from its pitch and intensity", "B"]
    //
];
///////QUESTIONS IN ARRAY FORM

function get(x) {
    return document.getElementById(x);
}
//
function renderQuestion() {
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("test_status").innerHTML = "Test completed";
        //
        pos = 0;
        correct = 0;
        //
        return false;
    }

///
get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
question = questions[pos][0];
chA = questions[pos][1];
chB = questions[pos][2];
chC = questions[pos][3];
chD = questions[pos][4];
test.innerHTML = "<h3>" + question + "</h3>";
//
test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
//
test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
//
test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
//
test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br><br>";
}
///
function checkAnswer() {
var i;
choices = document.getElementsByName("choices");
for (i=0; i < choices.length; i +=1) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
//
    if (choice === questions [pos][5]) {
        correct += 1;
    }

//
pos +=1;
if (correct !== 5 && pos == 5) {
    window.alert(test.innerHTML= "You got " + correct + " of " + questions.length + " questions correct! Please try again to unlock the next stage.");
    renderQuestion(false);
}
    else if (correct === 5) {
        window.alert("You got " + correct + " of " + questions.length + " questions correct! Nice work, advance to the next level");
//
    }
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

