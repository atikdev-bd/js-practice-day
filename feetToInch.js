function feetToInch() {
    const oneFeet = 12;
    const inch = feet * oneFeet;
    return inch;
}
const feet = 7;
const inch = feetToInch(feet);
console.log("Inch:",inch)