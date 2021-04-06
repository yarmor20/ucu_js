function toArr(obj) {
	return Object.entries(obj);
}


console.log(toArr({ key1: 'value1', key2: 'value2' })); // [["key1", "value1"], ["key2", "value2"]]
console.log(toArr({})); // [] Returns an empty array if the object is empty.