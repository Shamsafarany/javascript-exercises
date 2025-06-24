const repeatString = function(string, x) {
    let result = "";
    for (let i = 0; i < x; i++) {
        result.concat(string);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
