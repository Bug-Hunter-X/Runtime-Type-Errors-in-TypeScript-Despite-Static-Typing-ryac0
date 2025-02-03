function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6

console.log(result1,result2); // 8,6

//In this example, the TypeScript compiler will not flag any errors because both functions correctly return numbers. However, there is a potential bug. If either function received a non-number value (like a string), it would cause an error at runtime. 

// To prevent this kind of error, it's better to add input validation to the functions:

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function subtractSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a - b;
}

const result3 = addSafe(5, 3); // 8
const result4 = subtractSafe(10, 4); // 6

console.log(result3,result4); // 8,6

const result5 = addSafe("5",3); // throws error
const result6 = addSafe(10,"4"); // throws error