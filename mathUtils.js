// A simple function to add two numbers
function add(a, b) {
    return a + b;
}

// Export the function (for environments like Node.js or bundlers)
if (typeof module !== 'undefined') {
    module.exports = { add };
}
