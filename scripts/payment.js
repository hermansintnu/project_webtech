/*var option1 = document.getElementById('gloshaugen')
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

// Maps for payment.html and confirmation2.html
function chooseLocation() {
    var d = new Date();
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
