
// Function whichDay is for displaying the right location on the location page and
// Maps for payment.html and the second option on pick-up
var d = new Date();
function whichDay() {
  var tunga = document.getElementById("tungah2");
  var kalvskinnet = document.getElementById("kalvh2");
  var dragvoll = document.getElementById("dragvollh2");

    if (d.getDay() == 1 && 2) {
        tunga.innerHTML = "Tunga position";
        document.getElementById('choice2').innerHTML = "Tunga"
        document.getElementById('map3').style.display = "none";
        document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 3) {
      kalvskinnet.innerHTML = "Kalvskinnet position";
      document.getElementById('choice2').innerHTML = "Kalvskinnet"
      document.getElementById('map2').style.display = "none";
      document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 4 && 5) {
      dragvoll.innerHTML = "Dragvoll position"
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


function chooseLocation() {
    if (d.getDay() == 1 && 2) {
      document.getElementById('choice2').innerHTML = "Tunga"
      document.getElementById('map3').style.display = "none";
      document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 3) {
      document.getElementById('choice2').innerHTML = "Kalvskinnet"
      document.getElementById('map2').style.display = "none";
      document.getElementById('map4').style.display = "none";
    }
    else {
      document.getElementById('choice2').innerHTML = "Dragvoll"
      document.getElementById('map2').style.display = "none";
      document.getElementById('map3').style.display = "none";
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
