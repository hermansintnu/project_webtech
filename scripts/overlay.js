// Pål and Herman
function openOverlay1() {
    document.getElementById("myOverlay1").style.display = "block";
  }
function closeOverlay1() {
    document.getElementById("myOverlay1").style.display = "none";
  }

function openOverlay2() {
    document.getElementById("myOverlay2").style.display = "block";
  }
function closeOverlay2() {
    document.getElementById("myOverlay2",).style.display = "none";
  }

function openOverlay3() {
    document.getElementById("myOverlay3").style.display = "block";
  }
function closeOverlay3() {
    document.getElementById("myOverlay3",).style.display = "none";
  }

function openOverlay4() {
    document.getElementById("myOverlay4").style.display = "block";
  }
function closeOverlay4() {
    document.getElementById("myOverlay4",).style.display = "none";
  }

function openOverlay5() {
    document.getElementById("myOverlay5").style.display = "block";
  }
function closeOverlay5() {
    document.getElementById("myOverlay5",).style.display = "none";
  }

function openOverlay6() {
    document.getElementById("myOverlay6").style.display = "block";
  }
function closeOverlay6() {
    document.getElementById("myOverlay6",).style.display = "none";
}

var overlayAmount = document.getElementsByClassName('.input-overlay')
for (var i = 0; i < overlayAmount.length; i++) {
    var input = overlayAmount[i]
    input.addEventListener('change', amountChanged)
}

function amountChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
}

// Er jeg på riktig spor?
function checkboxChecked() {
  var checkedValue = document.querySelector('.choices:checked').value;
  for (var i = 0; i < checkValue.length; i++) {
      var button = checkedValue[i]
      button.addEventListener('click', updateOrderTotal)
  }
  console.log(checkboxChecked())
}

// Prøve meg på dette i morgen
// Få updatert prisen på lik måte som total i shopping cart
function updateOrderTotal() {
  var overlayContent = document.getElementsByClassName('myOverlay1')[0]
  var total = 0
  for (var i = 0; i< overlayContent.length; i++) {
    var overlayCont = overlayContent[i]
    var priceElement = overlayCont.getElementsByClassName('choicesPrice')
    total = total + price
  }
  document.getElementsByClassName('order-total-price')[0].innerText = total + 'kr'
}



/* var overlayArray = ['myOverlay1','myOverlay2','myOverlay3','myOverlay4','myOverlay5','myOverlay6'];

function addToCartClicked() {
    var cartItems = document.getElementsByClassName('choices')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
} */


/*
function addToCartClicked() {
  var clist = document.getElementsByClassName("choices");
  for (var i = 0; i < clist.length; ++i) {
    clist[i].checked = false;
  }
} */



/*
var overlayArray = ['myOverlay1','myOverlay2','myOverlay3','myOverlay4','myOverlay5','myOverlay6'];
window.addEventListener('mouseup', function(event){

    for(var i=0; i < overlayArray.length; i++){
         var overlay = document.getElementById(overlayArray[i]);
         if(event.target !=overlay && event.target.parentNode !=overlay) {
             overlay.style.display = 'none';
        }
    }
}); */
