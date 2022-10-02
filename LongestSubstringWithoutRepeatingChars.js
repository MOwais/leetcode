var lengthOfLongestSubstring = function(s) {
  var letters = s.split("");
  var max = 0;
  var result = new Map();

  for (var i = 0; i < letters.length; i++) {
    if (!result.has(letters[i])) {
      result.set(letters[i], i);
    } else {
      i = result.get(letters[i]);
      console.log("I", i);
      result.clear();
    }

    if (max < result.size) {
      max = result.size;
    }
  }
  return max;
};

//option 2
var lengthOfLongestSubstring = function(s) {
  if(!s) return 0;
  const lettersArr = s.split("");
  let resultsArr = [];
  let lengthArr = [];
  let i = 0;
  for(i; i<lettersArr.length; i++ ){ 
      const letter = lettersArr[i];
      if(resultsArr.indexOf(letter) === -1) { 
          resultsArr.push(letter);
      }
      else if(resultsArr.indexOf(letter) > -1 && i !== lettersArr.length -1) { 
          resultsArr.splice(0,resultsArr.indexOf(letter)+1);
          resultsArr.push(letter);
      }
      lengthArr.push(resultsArr.length);
      
  }
  return Math.max.apply(Math, lengthArr);

};