function mathSequences(arr) {
  let arithmeticArr = new Set();
  let geometricArr = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arithmeticArr.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geometricArr.add(number2);
  }

  if (arithmeticArr.size === 1) {
    return "Arithmetic";
  }

  if (geometricArr.size === 1) {
    return "Geometric";
  }

  return -1;
}

console.log(mathSequences([2, 4, 6, 8]));
console.log(mathSequences([3, 9, 27, 81]));
console.log(mathSequences([2, 5, 14, 89]));
