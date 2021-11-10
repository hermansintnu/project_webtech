// Pål and Herman
function openOverlay1() {
    document.getElementById("myOverlay1").style.display = "block";}
function closeOverlay1() {
    document.getElementById("myOverlay1").style.display = "none";}


function openOverlay2() {
    document.getElementById("myOverlay2").style.display = "block";}
function closeOverlay2() {
    document.getElementById("myOverlay2",).style.display = "none";}


function openOverlay3() {
    document.getElementById("myOverlay3").style.display = "block";}
function closeOverlay3() {
    document.getElementById("myOverlay3",).style.display = "none";}


function openOverlay4() {
    document.getElementById("myOverlay4").style.display = "block";}
function closeOverlay4() {
    document.getElementById("myOverlay4",).style.display = "none";}


function openOverlay5() {
    document.getElementById("myOverlay5").style.display = "block";}
function closeOverlay5() {
    document.getElementById("myOverlay5",).style.display = "none";}


function openOverlay6() {
    document.getElementById("myOverlay6").style.display = "block";}
function closeOverlay6() {
    document.getElementById("myOverlay6",).style.display = "none";}




var overlayArray = ['myOverlay1','myOverlay2','myOverlay3','myOverlay4','myOverlay5','myOverlay6'];
window.addEventListener('mouseup', function(event){
       
    for(var i=0; i < overlayArray.length; i++){
         var overlay = document.getElementById(overlayArray[i]);
         if(event.target !=overlay && event.target.parentNode !=overlay) {
             overlay.style.display = 'none';
        }
    }
});


// Add class to parent visstnok

// function setParent(){
//     document.myOverlay1.appendChild(document.getElementsByClassName('choices'));}

// const myElement = document.querySelector('.choices');
// myElement.parentElement.classList.add('overlay');

// $(this).parent('overlay').addClass('choices');


// $('#bx-pager').parent('overlay').addClass('choices');

// jQuery(this).parent('overlay').addClass('choices');


// $().ready(function(){
//     $('.overlay').addClass('choices');
// });

// $(overlay.parentNode).addClass('choices,choicesPrice');


// Close on outside overlayclick uten å lukke når trykk på en class inni overlay

// var overlayArray = ['myOverlay1','myOverlay2','myOverlay3','myOverlay4','myOverlay5','myOverlay6'];
// const innhold = ['overlayBilde','dish','allergiesOverlay','priceOverlay','infoOverlay','extraTopping','choices','choicesPrice','orderCounter','minusOverlay','tellerOverlay','plusOverlay','addToCart',]
// window.addEventListener('mouseup', function(event){
       

//     for(var i=0; i < overlayArray.length; i++){
//         var overlay = document.getElementById(overlayArray[i]);
//         if(event.target !=overlay && event.target.parentNode !=overlay) {
//             overlay.style.display = 'none';
//         }
//     }

//     for(var i=0; i <innholdArray.length; i++){
//         var innhold = document.getElementById(innholdArray[i]);
//         if(event.target !=innhold && event.target.parentNode !=innhold) {
//             overlay.style.display = 'none';
//         }
//     }
// });



