const number = [12, 23, 32, 8, 5, 4, 0, -55, -22, -11, 77, 99]

function positiveNumber(array) {
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positive.push(array[i])
        }
        else{
        break;
        }
    }
    return positive;
}
const positiveNumbers = positiveNumber(number);
console.log(positiveNumbers)