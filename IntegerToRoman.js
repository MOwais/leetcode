var intToRoman = function(num, str="") {
    var lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
  };

  for(key in lookup) { 
    if(num >= lookup[key]) { 
        str = str + key;
        return intToRoman(num-lookup[key],str);
    }
  }
  return str;
}