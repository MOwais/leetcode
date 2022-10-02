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