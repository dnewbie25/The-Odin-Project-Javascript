const container = document.querySelector('.container');

const content = document.createElement('div');

content.classList.add('content');

content.textContent = 'This is the text content of the .content element';

container.appendChild(content);

/** add the following:
 *  a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color with the following elements inside of it:
      another <h1> that says “I’m in a div”
      a <p> that says “ME TOO!”
      Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
 */

const para = document.createElement('p');
para.textContent = "Hey I'm red!"
para.style.color = 'red';
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3";
h3.style.color = 'blue';
container.appendChild(h3);

// new div appended as a sibling of container
const childDiv = document.createElement('div');
childDiv.classList.add('child-div');
childDiv.style.border = '2px solid black';
childDiv.style.backgroundColor = 'pink';
container.insertAdjacentElement('afterend', childDiv);

// h1 inside the new childDiv
const childDivH1 = document.createElement('h1');
childDivH1.textContent = "I'm inside the div with class .child-div";
childDiv.appendChild(childDivH1);


// a tag with link and target blank attributes
const link = document.createElement('a');
link.href = "https://www.youtube.com/watch?v=TqcPjwKU_zc&list=RD1QD0FeZyDtQ&index=8";
link.setAttribute('target', '_blank');
link.textContent = "ME TOO! I'm a link <a>";
childDiv.appendChild(link);

// button 2 script
const button2 = document.querySelector('#button2');
button2.onclick = () => alert('Hello World by Button 2');

// button 3 script
const button3 = document.querySelector('#button3');
button3.addEventListener('click', () => {
  alert("Hello World! Button 3");
});

// button 4 call back
const button4 = document.querySelector('#button4');
// button4.addEventListener('click', function (e) {
//   console.log(e);
// });

button4.addEventListener('click', function (e){
  e.target.style.backgroundColor = 'lightblue';
});

// buttons inside the .container
// selecting a node list
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.className);
  });
});