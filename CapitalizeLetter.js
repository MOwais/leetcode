function capitalize(str) {
  let words = str.split(" ").map((word) => {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let remainingLetters = word.slice(1);
    return `${firstLetter}${remainingLetters}`;
  });

  return words.join(" ");
}

console.log(capitalize("I woke up early today"));
console.log(capitalize("I went straight to the beach"));
