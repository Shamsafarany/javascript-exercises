const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    } else {
    if (typeof(num) === "string") {
        num = Number(num);
    }    
    if (num === 0 || num === 1) {
    return num;
    } else {
        return (fibonacci(num - 1) + fibonacci(num - 2));
    }
 }

    
};

// Do not edit below this line
module.exports = fibonacci;
