function pentagonalNumber(num) {
 	return  (3 * (num ** 2) - num) / 2;
}

console.log(pentagonalNumber(1)); // 1
console.log(pentagonalNumber(2)); // 5
console.log(pentagonalNumber(5)); // 35
console.log(pentagonalNumber(9)); // 117