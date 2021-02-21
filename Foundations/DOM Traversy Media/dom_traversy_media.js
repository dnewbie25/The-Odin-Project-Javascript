// // Examine the document object //
// // console.dir(document);

// // console.log(document.domain);
// // console.log(document.URL);

// // document.title = 'Hello folks!';

// // let headerTitle = document.getElementById('header-title');
// // let header = document.getElementById('main-header');

// // // prints out all the text even when 123 is hidden
// // console.log(headerTitle.textContent);

// // // prints out only what the page is rendering. Pays attentions to the styles
// // console.log(headerTitle.innerText);

// // // prints out all the HTML code with tags included. This one works for changing all the html content of the specified selector
// // console.log(headerTitle.innerHTML);

// // // STYLES

// // headerTitle.style.borderBottom = '5px dotted pink';
// // header.style.borderBottom = '3px solid black';

// // GET ELEMENTS BY CLASS NAME

// // let items = document.getElementsByClassName('list-group-item');
// // this is how you put the same style to all elements in a node list. Using forEach doesn't work
// // for (i = 0; i < items.length; i++){
// //   items[i].style.backgroundColor = 'lightgreen';
// // }


// // GET ELEMENTS BY TAG NAME - Grabs all elements that match the tag name
// let li = document.getElementsByTagName('li');
// // forEach works only with querySelectorAll()
// for (i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = 'lightgreen';
// }

// // QUERY SELECTOR - Grabs the first element that matches the value. It can grab tags, id and classes

// let header = document.querySelector('#main-header');
// let input = document.querySelector('input');
// input.value = 'hello';

// let submit = document.querySelector("input[type = 'submit']");
// submit.value = 'Apachurrame!';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'white';
// lastItem.style.fontWeight = 'bold';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'pink';

// // QUERY SELECTOR ALL - Returns a node list with all the elements that match

// let oddItem = document.querySelectorAll('.list-group-item:nth-child(odd)');
// oddItem.forEach((item) =>{
//   item.style.backgroundColor = 'lightblue';
// });

/** *****************************TRAVERSING THE DOM************************************************ */

let itemList = document.querySelector('#items');

// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'pink';

// // childNodes - returns all the html, whitespaces included
// console.log(itemList.childNodes);

// // children - returns only the children elements, PREFERRED
// console.log(itemList.children);
// itemList.children[0].style.backgroundColor = 'yellow';

// // firstChild - returns the first child but with all the information, like the yellow color and so on
// console.log(itemList.firstChild);
// itemList.firstChild.textContent = 'Helloo'; // you can see that this put Hello outside the items, because the firstchild is a whitespace aka textNode
// // firstElementChild - returns the first child without useless extra data, PREFERRED
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello!!!'; // this one worked. It put the text IN the first item

// // nextSibling
// console.log(itemList.nextSibling); // the next sibling is a whitespace
// // nextElementSibling
// console.log(itemList.nextElementSibling); // it doesn't have a sibling. THe items are the last elements in the DOM

// let h2 = document.querySelector('.title'); // grabs the first h2 element with class title
// console.log(h2.nextElementSibling); // the form is the next sibling

// // previousSibling
// console.log(h2.previousSibling); // again a textNode
// // previousElementSibling
// console.log(h2.previousElementSibling); // returns the previous h2 sibling 'Hehe I'm the previous sibling'

// // Create Elements

// let newDiv = document.createElement('div');

// // Add Class
// newDiv.className = 'Hello';

// // Add id
// newDiv.id = 'World';

// // Add attribute
// newDiv.setAttribute('title', 'hello-world');

// // Create TextNode

// let newDivText = document.createTextNode('Hello World!!');

// // Append element
// newDiv.appendChild(newDivText);

// // Insert the above in the DOM - We will add it in the container

// let container = document.querySelector('header .container'); // the same way as you use selectors in CSS
// let h1 = document.querySelector('header h1');

// // insertBefore - will insert the newDiv before the h1 tag that is inside the container

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '1.5rem';

// console.log(newDiv);

/*********************************************** EVENTS************************************************** */

// let button = document.getElementById('button');

// button.addEventListener('click', buttonClicked);

// function buttonClicked(e){
//   // console.log('Button clicked!');
//   // document.getElementById('header-title').textContent = 'Changed by button';
//   // document.querySelector('#main').style.backgroundColor = 'pink';
//   // console.log(e);
//   console.log(e.target);
//   console.log(e.target.className); // return the class as a string
//   console.log(e.target.classList); // returns a list with the indexes of the classes
//   let output = document.querySelector('#output');
//   output.innerHTML = `<h3>${e.target.id}</h3>`;

//   console.log(e.type);
//   // returns the position of the cursor in the browser window
//   // console.log(e.clientX);
//   // console.log(e.clientY);

//   // returns the position of the cursor inside the element
//   // console.log(e.offsetX);
//   // console.log(e.offsetY);
//   console.log(e.shiftKey);
// }

// let outputArea = document.querySelector('#output');
// outputArea.addEventListener('mousemove', changeColorWithMovement);

// function changeColorWithMovement(e){
//   outputArea.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }