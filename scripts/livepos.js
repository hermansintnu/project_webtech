// Pål and Herman

function whichDay() {
    var d = new Date();
    var tunga = document.getElementById("tungah2");
    var kalvskinnet = document.getElementById("kalvh2");
    var dragvoll = document.getElementById("dragvollh2");

    if (d.getDay() == 1) {
        tunga.innerHTML = "Tunga position";
        tunga.className = "tunga";
        document.getElementById('map3').style.display = "none";
        document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 3) {
      kalvskinner.innerHTML = "Kalvskinnet position";
      kalvskinnet.className = "kalvskinnet";
      document.getElementById('map2').style.display = "none";
      document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 4,5) {
      dragvoll.innerHTML = "Dragvoll position"
      dragvoll.className = "dragvoll"
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
