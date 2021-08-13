const isAdult = (number) => {
  if (isNaN(number) || typeof number !== 'number') {
    throw new TypeError("null");
  }
  return number >= 18;
};

console.log(isAdult(122));
// ==========================================================================
const checkMultiplicity = (number1, number2) => {
  if (isNaN(number1 - number2)) {
    throw new TypeError("null");
  }
  return number1 % number2 === 0;
};
console.log(checkMultiplicity(15, 5));
// ==========================================================================
const Triangle = (a, b, c) => {
    if (isNaN(a - b - c)){
         throw new TypeError ('null');
    }
    
    if (a <= 0 || b <= 0 || c <= 0) {
        throw new TypeError ('null')
    }
    return a < b + c && b < a + c &&  c < a + b;
};

console.log(Triangle(3,2,3))
// ===========================================================================
const areaOfTriangle = (base, height) => {
    if (isNaN(base - height)) {
        throw new TypeError ('null')
    }
    
    if (base <= 0 || height <= 0) {
        throw new RangeError ('null')
    }
    return (base * height) / 2;
}

console.log(areaOfTriangle(2,4));

