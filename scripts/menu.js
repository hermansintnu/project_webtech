// Marius and Ståle
var minus = document.getElementsByClassName('minus');
var plus = document.getElementsByClassName('plus')

let data=1
document.getElementById("root").innerText=data;

minus.addEventListener('click', function decrement(){
    data=data-1;
    document.getElementById("root").innerText=data;
})

function increment(){
    data=data+1;
    document.getElementById("root").innerText=data;
}
