/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  const isNegative = x < 0;
  let reversedInt = parseInt(x.toString().split("").reverse().join(""));
  reversedInt = isNegative ? reversedInt * -1 : reversedInt;
  return (reversedInt > Math.pow(2,31) -1 || reversedInt < Math.pow(2,31) *-1) ? 0 : reversedInt;
};