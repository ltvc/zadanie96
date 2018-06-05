console.log(window);
console.log(document);
var list = document.getElementById('list');
var add=document.getElementById('addElem');
add.addEventListener("click", 
function(){
document.getElementById('addElem');
var element = document.createElement('li');
//var numer = document.getElementsByTagName("list");
//var dodajNumer=document.getElementsByName("item").length;
//var dodajNumer=document.getElementById('list').length;
var dodajNumer = list.length;
console.log(dodajNumer);
element.innerHTML = 'item '+dodajNumer;
list.appendChild(element);
});
