//Detect a button press AND add an Event Listener
function addListenerToAllDrums() {
    //store buttons in array
    var buttonArray = document.querySelectorAll(".drum");
    //iterate thru each btn
    for (var i = 0; i < buttonArray.length; i++) {
        //add a listener each iter.
        buttonArray[i].addEventListener("click", function () {
            //store html of button (ie: `w`) to variable
            var buttonInnerHTML = this.innerHTML;
            //the stored html is passed to the checkSound function
            checkSound(buttonInnerHTML); //ie: `w` = case w
            buttonAnimation(buttonInnerHTML);
        });
    }
}

//Detect a keypress (on the entire doc) and check if it is related to the inner html
//check for keypress
document.addEventListener(`keydown`, function (event) {
    //event stores keypress into the `key` property
    var pressedKey = event.key
    //passes pressedKey as string (ie: `w`) to checkSound(`w`)
    checkSound(pressedKey);
    buttonAnimation(event.key);
});

//make a sound dependant on button press or keypress functions
function checkSound(input) {
    //Create Switch Statement based on keypress/button click input
    switch (input) {
        case `w`:
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        case `a`:
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case `s`:
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case `d`:
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case `j`:
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'k':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case `l`:
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;


        default:
            console.log(this.innerHTML)
    }
}
//Button Animation(current input == input)
function buttonAnimation(currentInput) {
    //Store the selected button as a className
    var activeButton = document.querySelector(`.` + currentInput);
    //add the `pressed` class to the class list of button
    activeButton.classList.add(`pressed`);
    //Remove button `pressed` class and give it a duration
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}



addListenerToAllDrums();