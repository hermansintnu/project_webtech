// Pål and Herman

function openOverlay1() {
    document.getElementById("myOverlay1").style.display = "block";
  }

function openOverlay2() {
    document.getElementById("myOverlay2").style.display = "block";
  }

function openOverlay3() {
    document.getElementById("myOverlay3").style.display = "block";
  }

function openOverlay4() {
    document.getElementById("myOverlay4").style.display = "block";
  }

function openOverlay5() {
    document.getElementById("myOverlay5").style.display = "block";
  }

function openOverlay6() {
    document.getElementById("myOverlay6").style.display = "block";
  }

// Closes overlays
function closeOverlay() {
  document.getElementById('myOverlay1').style.display = "none"
  document.getElementById('myOverlay2').style.display = "none"
  document.getElementById('myOverlay3').style.display = "none"
  document.getElementById('myOverlay4').style.display = "none"
  document.getElementById('myOverlay5').style.display = "none"
  document.getElementById('myOverlay6').style.display = "none"
}

/*
function closeOverlay() {
  var close = document.getElementsByClassName('closebtn')
  for (var i = 0; i < close.length; i++) {
      var button = close[i]
      button.addEventListener('click', closeOverlayClicked)
 }
}

function closeOverlayClicked() {
  document.getElementById('myOverlay1').style.display = "none"
  document.getElementById('myOverlay2').style.display = "none"
  document.getElementById('myOverlay3').style.display = "none"
  document.getElementById('myOverlay4').style.display = "none"
  document.getElementById('myOverlay5').style.display = "none"
  document.getElementById('myOverlay6').style.display = "none"
} */
