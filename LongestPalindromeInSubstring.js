/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  var stringArr = s.split("");
  var reversedString = stringArr.slice().reverse().join("");
  var str = "", letter;
  for(var i=0;i<stringArr.length;i++) {
      letter = stringArr[i];
      str = str + letter;
      if(reversedString.indexOf(str) === -1){
          if(i!== stringArr.length-1) str = str.slice(1);
          else str = str.slice(0, str.length-1);
          
      }
      
  }
  return str;
};

//does not pass all test cases

//working 
var longestPalindromeInSubstring = function(s) {
  const str = s;
  if (str.length < 2) return str;
  let palindrome = '';

  function strReverse (start, length) {
    const reversed = str.substr(start, length).split('').reverse().join('');
    return reversed;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j <= str.length - i; j++) {
      if (str.substr(i, j) === strReverse(i, j)) {
        if (j > palindrome.length) {
          palindrome = str.substr(i,j);
        }
      }
    }
  }

  if (!palindrome) return null;
  return palindrome;
}
