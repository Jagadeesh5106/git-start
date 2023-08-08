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

//QuerySelector
var header=document.querySelector('#main-header');
header.style.borderBottom='10px solid beige';

var input = document.querySelector('input');
input.value='Hello world';

var submit =document.querySelector('input[type="submit"]');
submit.value='SEND';

var lastItem=document.querySelector('.list-group-item:last-child');
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';

//Query Selector All

var secondItem=document.querySelectorAll('.list-group-item:nth-child(2)')
secondItem[0].style.color='green';

var odd=document.querySelectorAll('.list-group-item:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}


//Traversing the DOM
var itemsList=document.querySelector('#items');

//parentNode
console.log(itemsList.parentNode);
itemsList.parentNode.style.backgroundColor='blue';
console.log(itemsList.parentNode.parentNode.parentNode);
//parentElement
console.log(itemsList.parentElement);
itemsList.parentElement.style.backgroundColor='blue';
console.log(itemsList.parentElement.parentElement.parentElement);
//lastChild
console.log(itemsList.lastChild)
//lastElementChild
console.log(itemsList.lastElementChild)
itemsList.lastElementChild.style.backgroundColor='blue'
//firstChild
console.log(itemsList.firstChild)
//firstElementChild
console.log(itemsList.firstElementChild)
itemsList.firstElementChild.style.backgroundColor='blue'
//previousSibling
console.log(itemsList.previousSibling)
//previousElementSibling
console.log(itemsList.previousElementSibling)
itemsList.previousElementSibling.style.backgroundColor='grey'
//nextSibling
console.log(itemsList.nextSibling)
//nextElementSibling
console.log(itemsList.nextElementSibling)
// itemsList.nextElementSibling.style.backgroundColor='grey'

//createElement

////create div
var newDiv=document.createElement('div');

////Add class
newDiv.className='hello';
////Add id
newDiv.id='hello123';
////Add attribute
newDiv.setAttribute('title','Hello Div');
////Create text node
var newDivText = document.createTextNode('Hello World')
////Add text to div
newDiv.appendChild(newDivText)
newDiv.style.fontSize='30px'
newDiv.style.fontWeight='bold'
console.log(newDiv);

var container=document.querySelector("header .container")
var h1=document.querySelector('header h1')
container.insertBefore(newDiv,h1);


