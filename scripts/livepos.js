// Pål and Herman

function whichDay() {
    var d = new Date();
    var elem = document.getElementById("h2-day");
//    var tungaMap = document.getElementById('map2');
  //  var kalvskinnetMap = document.getElementById('map3');
    //var dragvollMap = document.getElementById('map4');

    if (d.getDay() == 1,2) {
        elem.innerHTML = "Tunga";
        elem.className = "tunga";
        document.getElementById('map3').style.display = "none";
        document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 3) {
      elem.innerHTML = "Kalvskinnet";
      elem.className = "kalvskinnet";
      document.getElementById('map2').style.display = "none";
      document.getElementById('map4').style.display = "none";
    }
    else if (d.getDay() == 4,5) {
      elem.innerHTML = "Dragvoll"
      elem.className = "dragvoll"
      document.getElementById('map2').style.display = "none";
      document.getElementById('map3').style.display = "none";
    }
}
