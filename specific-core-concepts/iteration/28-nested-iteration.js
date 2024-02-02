// Nested iteration
/* 
    - Nested iteration is when you have a loop inside another loop.
    - The inner loop will execute one time for each iteration of the outer loop.
    - Nested iteration is useful for working with arrays of arrays, or matrices.
*/

for (let x=0; x <= 3; x++) {
    for (let y = 200; y<=203; y++) {
        console.log('Outer loop x:', x,'Inner loop y:', y); 
    }
}

/*
Output:
Outer loop x: 0 Inner loop y: 200
Outer loop x: 0 Inner loop y: 201
Outer loop x: 0 Inner loop y: 202
Outer loop x: 0 Inner loop y: 203
Outer loop x: 1 Inner loop y: 200
Outer loop x: 1 Inner loop y: 201
Outer loop x: 1 Inner loop y: 202
Outer loop x: 1 Inner loop y: 203
Outer loop x: 2 Inner loop y: 200
Outer loop x: 2 Inner loop y: 201
Outer loop x: 2 Inner loop y: 202
Outer loop x: 2 Inner loop y: 203
Outer loop x: 3 Inner loop y: 200
Outer loop x: 3 Inner loop y: 201
Outer loop x: 3 Inner loop y: 202
Outer loop x: 3 Inner loop y: 203
*/
