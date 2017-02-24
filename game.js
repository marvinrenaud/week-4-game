$(document).ready(function() {


    // Declare global variables for use throughout
    var targetNumber, userNumber, winCount, lossCount, message;
    var crystalOneNumber, crystalTwoNumber, crystalThreeNumber, crystalFourNumber;

    winCount = 0;
    lossCount = 0;
    userNumber = 0;
    var targetNumber = 120;




    // Construct image objects for each crystal and assign to image
    var imageDiamond = new Image();
    imageDiamond.src = "assets/diamond2.jpg";
    imageDiamond.id = "diamond";

    var imageRuby = new Image();
    imageRuby.src = "assets/ruby2.jpg";
    imageRuby.id = "ruby";

    var imageSaphire = new Image();
    imageSaphire.src = "assets/saphire2.jpg";
    imageSaphire.id = "saphire"

    var imageCitrin = new Image();
    imageCitrin.src = "assets/citrin2.jpg";
    imageCitrin.id = "citrin"


    // Create an array to store the crystals...
    var crystalsArray = [];
    crystalsArray[0] = imageDiamond;
    crystalsArray[1] = imageCitrin;
    crystalsArray[2] = imageSaphire;
    crystalsArray[3] = imageRuby;


    // Function to shuffle the array randomly to re-arrange the array
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    //Function to generate random target number between 19 and 120 and write to page
    function generateTargetNumber() {
        targetNumber = parseInt(Math.floor((Math.random() * 101) + 19));
        $("#spotTarget").html(targetNumber);
        console.log("Your random number is " + targetNumber);
        return parseInt(targetNumber);

    }

    // Create an array to store the crystals' values and a function to populate with random numbers between 1 and 12
    var crystalsNumbersArray = [];

    function generateCrystalsNumbers() {
        for (var i = 0; i < 4; i++) {
            crystalsNumbersArray[i] = Math.floor((Math.random() * 12) + 1);
            console.log(crystalsNumbersArray[i]);
            //Assign these random numbers to crystals and associated index in the crystalsArray
            $(crystalsArray[i]).val(crystalsNumbersArray[i]);

        }
    }

    generateCrystalsNumbers();
    console.log(crystalsNumbersArray);

    var valueTest = $(crystalsArray[1]).val();
    console.log("value for crystal at index 1 is " + valueTest);


    // Call the function that generates the random Target Number and writes to page
    generateTargetNumber();


    // Call the crystals array shuffle function and write the shuffled crystals to the page
    shuffleArray(crystalsArray);
    $("#crystalsID").html(crystalsArray);
    console.log(crystalsArray);


    //Functions that monitor click events on the crystals and add/increments the associated values to the user score
    function crystalsClicks() {

        $("#diamond").on("click", function() {          
            userNumber = userNumber + parseInt($(crystalsArray[0]).val());
            writeUserNumber();
            console.log("Diamond works on click " + userNumber);
        });

        $("#ruby").on("click", function() {
            userNumber = userNumber + parseInt($(crystalsArray[1]).val());
            writeUserNumber();
            console.log("Ruby works on click " + userNumber);
        });

        $("#saphire").on("click", function() {
            userNumber = userNumber + parseInt($(crystalsArray[2]).val());
            writeUserNumber();
            console.log("Saphire works on click " + userNumber);
        });

        $("#citrin").on("click", function() {
            userNumber = userNumber + parseInt($(crystalsArray[3]).val());
            writeUserNumber();
            console.log("Citrin works on click " + userNumber);
        });
    }
    crystalsClicks();



    //Function to write user's Current Number to the screen and check against target number
    function writeUserNumber() {
        $("#spotUserNumber").html(userNumber);
        console.log(userNumber);
        console.log(targetNumber);
        if (userNumber == targetNumber) {
            youWin();
        }
        if (userNumber > targetNumber) {
            youLose();
        }

    }

    //Function to wrap and reset game with a win
    function youWin() {
        $("#resultMessage").html("You won the last round. Good go!");
        winCount = winCount + 1;
        $("#winsNumber").html(winCount);
        roundReset();
    }


    //Function to wrap and reset game with a loss
    function youLose() {
        $("#resultMessage").html("Last round was tough...do better!");
        lossCount = lossCount + 1;
        $("#lossesNumber").html(lossCount);
        roundReset();
    }

    // Reset all elements needed to start a new round (but not new game)
    function roundReset() {
        userNumber = 0;
        $("#spotUserNumber").html(userNumber);
        shuffleArray(crystalsArray);
        generateCrystalsNumbers();
        generateTargetNumber();
        $("#crystalsID").html(crystalsArray);
        crystalsClicks();
    }









});
