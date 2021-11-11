// Pål and Herman

// Function whichDay is for displaying the right location on the location page
function whichDay() {
  var d = new Date();
  var tunga = document.getElementById("tungah2");
  var kalvskinnet = document.getElementById("kalvh2");
  var dragvoll = document.getElementById("dragvollh2");

    if (d.getDay() == 1 && 2) {
        tunga.innerHTML = "Tunga position";
        document.getElementById('map3').style.display = "none";
        document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 3) {
      kalvskinnet.innerHTML = "Kalvskinnet position";
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


// The following function is for the maps on the payment page and confirmation page
function chooseLocation() {
    var d = new Date();
    if (d.getDay() == 1 &&2) {
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
