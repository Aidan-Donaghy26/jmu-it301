// Lab 10
let message = "Please enter the total restaurant bill amount:";
let input;
let price;
let isValid = false;

do {
    input = prompt(message);
    price = Number(input);

    if (price === 0 || price === null) {
            document.write(`Please enter a valid amount`);
        } else if (price < 0) {
            document.write(`Please enter a valid amount greater than zero`)
        } else if (isNaN(price)){
            document.write(`Please enter an actual number`);
        } else {
            isValid = true;
        }
    } while (!isValid);

let new_price = price * 0.1
console.log(`For a bill of $${price}, the tip should be $${new_price}.`)
document.write(`For a bill of $${price}, the tip should be $${new_price}.`)

