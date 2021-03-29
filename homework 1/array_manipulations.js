function tuckIn(a1, a2) {
    let midArrayIdx = a1.length / 2;
    a1.splice(midArrayIdx, 0, ...a2);
    return a1;
}

console.log("TuckIn Testing:")
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));


function minMax(array) {
    return [Math.min(...array), Math.max(...array)];
}

console.log("MinMax Testing:")
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));


function canNest(arr1, arr2) {
    let arrMinMax1 = minMax(arr1);
    let arrMinMax2 = minMax(arr2);
    return arrMinMax1[0] > arrMinMax2[0] && arrMinMax1[1] < arrMinMax2[1];
}

console.log("CanNest Testing:")
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));
