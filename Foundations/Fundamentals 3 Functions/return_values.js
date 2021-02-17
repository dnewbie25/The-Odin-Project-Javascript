const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num){
    return num * num;
}

function cubed(num){
    return num * num * num;
}

function factorial(num){
    if (num < 0) return undefined;
    if (num == 0) return 1;
    
    factorial_result = 1;
    for (i = 1; i <= num; i++){
        factorial_result *= i
    }
    return factorial_result;
}

input.onchange = function() {
    const num = input.value;
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.textContent = `${num} squared is ${squared(num)}.\n
                            ${num} cubed is ${cubed(num)}.\n
                            ${num} factorial is ${factorial(num)}.`
    }
}