// //EXAMINE THE DOCUMENT

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.title)
// document.title='List of Items'

// //GetElementById
// // console.log(document.getElementById("header-title"))
// var headerTitle=document.getElementById("header-title")
// // headerTitle.innerText='hello';
// // headerTitle.textContent='Hello';
// headerTitle.style.borderBottom='3px solid black'



// //GetElementByTagName

// var li=document.getElementsByTagName('li');

// li[2].style.backgroundColor='green';
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
//     li[i].style.color='blue';
// }

// //GetElementByClassName
// var addItems=document.getElementsByClassName("title")
// console.log(addItems)
// addItems[0].style.color="green";
// addItems[0].style.fontWeight="bold";
// var items=document.getElementsByClassName('list-group-item');
// for(var i of items){
//     console.log(i);
// }

// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
//     items[i].style.color='black';
// }

// //QuerySelector
// var header=document.querySelector('#main-header');
// header.style.borderBottom='10px solid beige';

// var input = document.querySelector('input');
// input.value='Hello world';

// var submit =document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var lastItem=document.querySelector('.list-group-item:last-child');
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';

// //Query Selector All

// var secondItem=document.querySelectorAll('.list-group-item:nth-child(2)')
// secondItem[0].style.color='green';

// var odd=document.querySelectorAll('.list-group-item:nth-child(odd)')
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }


// //Traversing the DOM
// var itemsList=document.querySelector('#items');

// //parentNode
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.backgroundColor='blue';
// console.log(itemsList.parentNode.parentNode.parentNode);
// //parentElement
// console.log(itemsList.parentElement);
// itemsList.parentElement.style.backgroundColor='blue';
// console.log(itemsList.parentElement.parentElement.parentElement);
// //lastChild
// console.log(itemsList.lastChild)
// //lastElementChild
// console.log(itemsList.lastElementChild)
// itemsList.lastElementChild.style.backgroundColor='blue'
// //firstChild
// console.log(itemsList.firstChild)
// //firstElementChild
// console.log(itemsList.firstElementChild)
// itemsList.firstElementChild.style.backgroundColor='blue'
// //previousSibling
// console.log(itemsList.previousSibling)
// //previousElementSibling
// console.log(itemsList.previousElementSibling)
// itemsList.previousElementSibling.style.backgroundColor='grey'
// //nextSibling
// console.log(itemsList.nextSibling)
// //nextElementSibling
// console.log(itemsList.nextElementSibling)
// // itemsList.nextElementSibling.style.backgroundColor='grey'

// //createElement

// ////create div
// var newDiv=document.createElement('div');

// ////Add class
// newDiv.className='hello';
// ////Add id
// newDiv.id='hello123';
// ////Add attribute
// newDiv.setAttribute('title','Hello Div');
// ////Create text node
// var newDivText = document.createTextNode('Hello World')
// ////Add text to div
// newDiv.appendChild(newDivText)
// newDiv.style.fontSize='30px'
// newDiv.style.fontWeight='bold'
// console.log(newDiv);

// var container=document.querySelector("header .container")
// var h1=document.querySelector('header h1')
// container.insertBefore(newDiv,h1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newDescription =document.getElementById('description').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem+" "+newDescription));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  var editBtn=document.createElement('button');
  editBtn.className= 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemChilds=item.childNodes;
    var itemName = itemChilds[0].textContent;
    var itemDescription=itemChilds[1].textContent;
    console.log(itemDescription);
    if(itemName.toLowerCase().indexOf(text) == -1 && itemDescription.toLowerCase().indexOf(text)==-1){
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });
}
