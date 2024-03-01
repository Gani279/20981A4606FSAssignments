function reverseArray(arr) {
    return arr.slice().reverse();
}
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray);
console.log(reversedArray); 
