let form = document.getElementById('addForm');
let itemList = document.querySelector('#items');
let filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);
// Removing Event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);

// addItem
function addItem(e){
  e.preventDefault(); // to stop the normal submission of the form so we can use the submit button as whatever we want

  // get the input value. The newItem is the input with id item
  let newItem = document.getElementById('item');

  //create new li
  let li = document.createElement('li');
  // add a class to li, the same as the rest of the li in the page so they inherit the same style
  li.className = 'list-group-item';
  
  // add text node with the input value
  li.appendChild(document.createTextNode(newItem.value));

  itemList.appendChild(li);

  // create the delete button
  let button = document.createElement('button');
  button.className = 'btn btn-danger btn-sm float-right delete';
  button.appendChild(document.createTextNode('X'));

  li.appendChild(button);
}


// removeItem
function removeItem(e){
  let li = e.target.parentElement;
  // if the clicked element contains the class delete the proceed
  if(e.target.classList.contains('delete')){
    // after clicking we want to confirm the deletion
    if(confirm("Do you want to delete this item?")){
      itemList.removeChild(li);
    }
    
  }
}

// filterItems
function filterItems(e){
  // convert to lower case
  let text = e.target.value.toLowerCase();
  // get list of li elements
  let items = itemList.getElementsByTagName('li');
  // items is a collection, we need to convert it to an array
  let itemsArray = Array.from(items);
  // the first child of the items is only the li text content, so we don't get all the html, nor the X in the result
  itemsArray.forEach((item) => {
    let itemName = item.firstChild.textContent;
    // if indexOf is not equal to -1, then it is a match
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none'; // will hide itemas that doesn't match the search value
    }
  });
}