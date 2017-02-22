// Declare global variables for use throughout
var targetNumber, userNumber, winCount, lossCount, message;


// Consturct image objects for each crystal and assign to image
var imageDiamond = new Image();
imageDiamond.src = "assets/diamond2.jpg";

var imageRuby = new Image();
imageRuby.src = "assets/ruby2.jpg";

var imageSaphire = new Image();
imageSaphire.src = "assets/saphire2.jpg";

var imageCitrin = new Image();
imageCitrin.src = "assets/citrin2.jpg";


// Reset user score
function scoreReset() {
  winCount = 0;
  lossCount = 0;
}


//







// var imgDiamond = new Image();
// imageDiamond.src = "assets/diamond2.jpg";

$('#resultMessage').html(imageDiamond);
