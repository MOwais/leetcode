function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log("longest word:", longestWord("I woke up early today"));
console.log("longest word:", longestWord("I went straight to the beach today"));
