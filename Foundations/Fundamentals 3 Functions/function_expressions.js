// Because function expressions are statements you end them with a semicolon ;

let sayHi = function(){
    alert('Hello!');
};

let func = sayHi;

// Callback functions

function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

// function showOk(){
//     alert('You agreed.')
// }

// function showCancel(){
//     alert('You canceled the execution.')
// }

ask('Do you agree?',
    function() {alert('You agreed.')},
    function(){alert('You canceled the execution.')});

