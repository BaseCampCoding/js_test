// Import the function (Node.js style)
const { add } = require('./mathUtils');

// Basic test case
function testAdd() {
    const result = add(2, 3);
    const expected = 5;

    if (result === expected) {
        console.log('✅ testAdd passed');
    } else {
        console.error(`❌ testAdd failed: expected ${expected}, got ${result}`);
    }
}

testAdd();
