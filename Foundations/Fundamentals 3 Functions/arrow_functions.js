// another way to create Function Expressions

//single line Arrow Function

let func = (name) => alert(`Hi, ${name}!`);

/*

-----the above is a shorter way to create:----

let func = function(name) {
    alert(`Hi, ${name}`);
};
*/

/*
Rewrite the following as an Arrow Function


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

*/


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask('Do you agree?',
() => alert('You agreed.'),
() => alert('You canceled the execution.'));