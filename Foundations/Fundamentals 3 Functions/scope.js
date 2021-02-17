'use strict';

let x = 1;

function a() {
  let y = 2;
  output(z);
}

function b() {
  let z = 3;
  output(y);
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = 'Value: ' + value;
}