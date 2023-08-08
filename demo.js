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

//GetElementByClassName
var addItems=document.getElementsByClassName("title")
console.log(addItems)
addItems[0].style.color="green";
addItems[0].style.fontWeight="bold";

