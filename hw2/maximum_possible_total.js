function maxTotal(arr) {
	arr.sort((a, b) => b - a);

	let res = 0;
	for (let i = 0; i < arr.length && i < 5; i++) {
			res += arr[i];
	}

	return res;
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); // 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 40
