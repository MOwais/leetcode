const romanMap = { 
 M :1000,
 D :500,
 C :100,
 L :50,
 X :10,
 V :5,
 I :1,
};
var romanToInt = function(s) {
   //s = "MCMXCIV";
    s = s.split("");
    //[M,C,M,X,I,V];
    let converted = [];
    for(i in s) converted.push(romanMap[s[i]]);
    for(var i=0; i<converted.length; i++) { 
        if(converted[i] < converted[i+1]) {
            converted[i] *= -1;
            i++;
        }
    }
    return converted.reduce((a,b) => a+b);
};


console.log("RESULT", romanToInt("XIV"));