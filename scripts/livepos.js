
// Function whichDay is for displaying the right location on the location page and
// Maps for payment.html and the second option on pick-up
var d = new Date();
function whichDay() {

    if (d.getDay() == 1 && 2) {
        document.getElementById('map3').style.display = "none";
        document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 3) {
      document.getElementById('map2').style.display = "none";
      document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 4 && 5) {
      document.getElementById('map2').style.display = "none";
      document.getElementById('map3').style.display = "none";
    }
    else {
      document.getElementById('livePosH1').innerHTML = "We are closed, come back on monday";
      document.getElementById('tungah2').innerHTML = "Tunga position";
      document.getElementById('kalvh2').innerHTML = "Kalvskinnet position";
      document.getElementById('dragvollh2').innerHTML = "Dragvoll position";
    }
}

// Function to specify the
function chooseLocation() {
    if (d.getDay() == 1 && 2) {
      document.getElementById('choice2').innerHTML = "Tunga"
    }
    else if (d.getDay() == 3) {
      document.getElementById('choice2').innerHTML = "Kalvskinnet"
    }
    else {
      document.getElementById('choice2').innerHTML = "Dragvoll"
    }
  }

var option1 = document.getElementById('gloshaugen')
var option2 = document.getElementById('annet')
// Sends customer to the right confirmation page
function changeAction() {
  if(option1.checked == true ) {
    document.getElementById('payment-form').action = "confirmationglos.html"
  }
  else {
    document.getElementById('payment-form').action = "confirmation2.html"
  }
}
