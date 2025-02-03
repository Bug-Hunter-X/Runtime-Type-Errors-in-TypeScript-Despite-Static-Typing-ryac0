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

//This will throw an error because of type mismatch
//const result5 = addSafe("5",3); 
//const result6 = addSafe(10,"4"); 