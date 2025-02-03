# Runtime Type Errors in TypeScript Despite Static Typing

This repository demonstrates a common pitfall in TypeScript: the reliance solely on the compiler's type checking. While TypeScript's static typing helps prevent many errors during development, it doesn't eliminate all possibilities of runtime errors. This example highlights a scenario where functions pass TypeScript's type checking but fail during execution when provided with unexpected input data types.

## The Bug

The `bug.ts` file contains functions that, while correctly typed according to TypeScript, lack runtime type validation. Consequently, these functions would throw runtime errors if they receive non-number values, even though TypeScript's compiler wouldn't flag any issues during compilation.

## The Solution

The `bugSolution.ts` file demonstrates the corrected version of the functions.  These functions include additional checks to validate input data types before performing calculations, thereby preventing runtime errors caused by inappropriate inputs.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Compile and run `bug.ts` and then `bugSolution.ts` using a TypeScript compiler (tsc) and a Node.js runtime. Observe the difference in behavior when providing valid and invalid input types to the functions.