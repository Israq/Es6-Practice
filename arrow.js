const add = num => num + 4;
const result = add(4);
console.log(result);
const sum = (x,y,z) => (x=6,y**8,z**1234565);
const result2 = sum(1023,3322,5465);
console.log(result2);

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const mult = sum * diff;
    return mult;
}
const result3 = doMath(65,11);
console.log(result3);