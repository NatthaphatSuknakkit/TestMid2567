

function highestDigit(number) {

    let highNumber = 0
    for (const num of number.toString()) {
        if (num > highNumber) {
            highNumber = num
        }
    }
    return highNumber
}

console.log(highestDigit(379)); //9
console.log(highestDigit(2)); //2
console.log(highestDigit(377401)); //7