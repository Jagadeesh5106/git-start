//EXAMINE THE DOCUMENT

console.log(document.domain)
console.log(document.URL)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.title)
document.title='List of Items'

//GetElementById
// console.log(document.getElementById("header-title"))
var headerTitle=document.getElementById("header-title")
// headerTitle.innerText='hello';
// headerTitle.textContent='Hello';
headerTitle.style.borderBottom='3px solid black'



//GetElementByTagName

var li=document.getElementsByTagName('li');

li[2].style.backgroundColor='green';
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
    li[i].style.color='blue';
}

//GetElementByClassName
var addItems=document.getElementsByClassName("title")
console.log(addItems)
addItems[0].style.color="green";
addItems[0].style.fontWeight="bold";
var items=document.getElementsByClassName('list-group-item');
for(var i of items){
    console.log(i);
}

items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
    items[i].style.color='black';
}