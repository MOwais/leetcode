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