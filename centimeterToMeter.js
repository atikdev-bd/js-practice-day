function centimeterToMeter() {
    const oneCentimeter = 0.01;
    const meter = oneCentimeter * centimeter;
    return meter;
}
const centimeter = 522;
const meter = centimeterToMeter(centimeter);
console.log("Meter:",meter)