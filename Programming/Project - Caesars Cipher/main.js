const input = document.querySelector('.input-field__text');
const cipher = document.getElementById('cipher');
const decipher = document.getElementById('decipher');
const finalMessage = document.querySelector('.result-message');
const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let shift = document.querySelector('.shift');
shift = Number(shift.value);

// Cipher function
function cipherMessage(message){
    newMessage = [];
    for (char = 0; char < message.length; char++){
        if (lowerAlpha.includes(message[char])){
            index = (lowerAlpha.indexOf(message[char]) + shift) % 26;
            newMessage.push(lowerAlpha[index]);
        }else if(upperAlpha.includes(message[char])){
            index = (upperAlpha.indexOf(message[char]) + shift) % 26;
            newMessage.push(upperAlpha[index]);
        }else{
            newMessage.push(message[char]);
        }
    }
    return newMessage.join('');
}

// Decipher function
function decipherMessage(message){
    newMessage = [];
    for (char = 0; char < message.length; char++){
        if (lowerAlpha.includes(message[char])){
            index = ((lowerAlpha.indexOf(message[char]) - shift) % 26);
            // Substract index from 26 (length of the alphabet)
            if(index < 0){
                index = 26 + index;
            }
            newMessage.push(lowerAlpha[index]);
        }else if(upperAlpha.includes(message[char])){
            index = ((upperAlpha.indexOf(message[char]) - shift) % 26);
            // Substract index from 26 (length of the alphabet)
            if(index < 0){
                index = 26 + index;
            }
            newMessage.push(upperAlpha[index]);
        }else{
            newMessage.push(message[char]);
        }
    }
    return newMessage.join('');
}

// Event Listeners
cipher.addEventListener('click', function(e) {
    e.preventDefault();
    finalMessage.style.display = 'block';
    finalMessage.lastElementChild.textContent = `${cipherMessage(input.value)}`;
});

decipher.addEventListener('click', function(e){
    e.preventDefault();
    finalMessage.style.display = 'block';
    finalMessage.lastElementChild.textContent = `${decipherMessage(input.value)}`;
});