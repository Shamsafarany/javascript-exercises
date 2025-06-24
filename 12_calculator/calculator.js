const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(a) {
  let result = 0;
	for (let i = 0; i < a.length; i++) {
    result += a[i];
  }
  return result;
};

const multiply = function(a) {
  let result = 1;
  for (let i = 0; i < a.length; i++) {
    result *= a[i];
  }
  return result;
};

const power = function(x , y) {
	return x ** y;
};

const factorial = function(x) {
  let fact = 1;
	for (let i = 1; i <= x; i++) {
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
