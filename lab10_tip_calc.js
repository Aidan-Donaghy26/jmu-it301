// Lab 10
let price = Number(prompt("Please the cost of the dinner "))
if (price === 0 || price === "") {
        document.write(`Please enter a valid amount`);
    } else if (price < 0) {
        document.write(`Please enter a valid amount greater than zero`)
    } else if (!isNaN(price)){
        document.write(`Please enter an actual number`);
    } else {
        let new_price = price * 1.1
        console.log(`For a bill of $${price}, the tip should be $${new_price}.`)
        document.write(`For a bill of $${price}, the tip should be $${new_price}.`)
    }