function avgWordLengthCalc(string) {
	let bareStrLength = 0;

	// get rid of punctuations
	string = string.replace(/[^a-zA-Z ]/g, "");
	let words = string.split(" ");

	for (let word of words) {
			bareStrLength += word.length;
	}

	return (bareStrLength / words.length).toFixed(2);
}

console.log(avgWordLengthCalc("q w e r t y.")); // 1.00
console.log(avgWordLengthCalc("The reduce method executes a reducer function.")); // 5.57
console.log(avgWordLengthCalc("callback is called, accumulator!")); // 6.75
console.log(avgWordLengthCalc("")); // 0
