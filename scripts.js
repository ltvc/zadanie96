console.log(window);
console.log(document);
var list = document.getElementById('list');
var add=document.getElementById('addElem');
add.addEventListener("click", 
function(){
document.getElementById('addElem');
var element = document.createElement('li');
var numer = document.getElementsByTagName("li");
var dodajNumer=numer.length;
element.innerHTML = 'item '+dodajNumer;
list.appendChild(element);
});
