//refer to the button from html, using # for ID, since unique
const button = document.querySelector("#click-button");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
//return the value of displayed number
let counter = number.innerText;
// console.log(typeof counter)

function addOneToNumber() {
    counter = parseInt(counter, 10);
    counter = counter + 1;
    number.innerText = counter;

    updateMessage();
}

function updateMessage() {
    if (counter == 10) {
        message.innerText = `Way to go!`;
    } else if (counter == 20) {
        message.innerText = `Keep going!`;
    } else if (counter == 30) {
        message.innerText = `Wow!`;
    } else if (counter == 40) {
        message.innerText = `Now stop`;
    } else if (counter == 50) {
        message.innerText = `Please`;
    } else {
        message.innerText = ``;
    }
}

button.addEventListener("click", addOneToNumber);

