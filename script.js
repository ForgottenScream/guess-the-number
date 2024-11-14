//Elements' initial display:
let title_text = document.getElementById("title_text").innerHTML = `Guess the Number!`;//Title
let introduction_text = document.getElementById("introduction_text").innerHTML = `The aim of the game is to try and guess the number with the least amount of tries!`;//Introduction
let select_range_text = document.getElementById("select_range").innerHTML = `Select a range:`;//Range Selection Text
let guess_attempt_text = document.getElementById("guess_attempt_text").innerHTML = `Guess Attemps:`;//Guess Attempt Title

//Play Button Script
let play_button_div = document.getElementById("play_button_div");//Play Button Div
let play_button = document.getElementById("play_button");//Play Button
play_button.disabled = true;//Disabled at start.

//Flex Container Script
let flex_container = document.getElementById("flex_container");
flex_container.style.display = "none";

//Game Display Script
let label_input = document.getElementById("label_input");//Label for input box.

//Submit/Check Button 
let check_number_button = document.getElementById("check_number_button");//Check Button

//Game Display Text Scripts
let highlow = document.getElementById("highlow");//Text to display whether the number inputted by the user was too high or too low.
let number_guesses_left = document.getElementById("number_guesses_left");//Text to display the number of guesses left for the user.
let attempt_list = document.getElementById("attempt_list");//Unsorted Attempt List

//Replay Dialog Box Script
let replay_dialog = document.getElementById("replay_dialog")//Dialog Box at the end of the game
replay_dialog.style.display = "none"; //replay dialog is hidden until the end of the game
let winlose = document.getElementById("winlose");//Text to indicate whether the user won or lost.

//Number Variables
let guess_number; //Number for the user to guess
let number_inputted; //Number that the user has submitted.
let max_attemps;//Maximum number of attemps for the user.
let max_range;//Maximum value that a user should be able to input.

//Mode 10 Function - Will change the game mode so the user has to guess a number between 1 and 10.
function mode10(){
    play_button.disabled = false;
    label_input.innerHTML  = `Enter a number between 1 and 10:`
    //generate random number between 1 to 10
    guess_number = Math.floor(Math.random() * 10) + 1;
    console.log(guess_number);
    //maximum number of guesses: 3
    max_attemps = 3;
    max_range = 10;
}
//Mode 100 Function - Will change the game mode so the user has to guess a number between 1 and 100.
function mode100(){
    play_button.disabled = false;
    label_input.innerHTML  = `Enter a number between 1 and 100:`
    //generate random number between 1 to 100
    guess_number = Math.floor(Math.random() * 100) + 1;
    console.log(guess_number);
    //maximum number of guesses: 7
    max_attemps = 7;
    max_range = 100;
}
//Mode 1000 Function - Will change the game mode so the user has to guess a number between 1 and 1000.
function mode1000(){
    play_button.disabled = false;
    label_input.innerHTML  = `Enter a number between 1 and 1000:`
    //generate random number between 1 to 1000
    guess_number = Math.floor(Math.random() * 1000) + 1;
    console.log(guess_number);
    //maximum number of guesses: 10
    max_attemps = 10;
    max_range = 1000;
}
//Play Button Funciton
function toggle() {
    if(flex_container.style.display === "none"){ //Checks that the game display is not visible in order to display everything that is necessary.
        document.getElementById("flex_container").style.display = "block";//Display the Game 
        play_button_div.style.display = "none";//Hide the play button.
        document.getElementById("select_mode_div").style.display = "none";//Hide the range selection division.
    }
}
// Submit Button Funciton
function submit() {
    let number = document.getElementById("number_input").value;
    if(isNaN(number)){document.getElementById("not_a_number").innerHTML = `Please input a number!`;} //This if statement checks that the user does not input anything other than a number.
    else if (document.getElementById("number_input").value <= max_range && //Checks that the user has not inputted a number higher than the range.
             document.getElementById("number_input").value >= 1) { //Checks that the user has not inputted a number less than 1.
        document.getElementById("not_a_number").innerHTML = ``;
        number_inputted = Number(document.getElementById("number_input").value);
        console.log(typeof number_inputted, number_inputted);
        //appending user attemps into unsorted list
        var li = document.createElement("li");
        li.innerHTML = number_inputted;
        attempt_list.appendChild(li);
        //When the user guesses the right number
        if (number_inputted === guess_number) {
            check_number_button.disabled = true;
            highlow.innerHTML = `Correct. Well Done!`
            winlose.innerHTML = `Congratulations!`;
            replay_dialog.style.display = "block";
        }
        else {//Increments the attemps to -1.
            max_attemps--;
            number_guesses_left.innerHTML = `Number of guesses left: ` + max_attemps;
            if (number_inputted > guess_number) {
                highlow.innerHTML = `Too high. Try Again!`;
            }else if (number_inputted < guess_number) {
                highlow.innerHTML = `Too low. Try Again!`;
            }
        }
    }
    if (max_attemps === 0 && number_inputted != guess_number) {//When there are no attempts left the user loses the game.
        //game over
        winlose.innerHTML = `No more guesses left.`;
        check_number_button.disabled = true;
        replay_dialog.style.display = "block"; //The Replay Dialog box will appear when the game is over.
    }
}
//Replay Button Function
function reset() {location.reload();} //This function resets the game so the user can play again.
