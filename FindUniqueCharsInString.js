function findUnique(str) {
  let uniq = "";

  for (let i = 0; i < str.length; i++) {
    if (uniq.includes(str[i]) === false) {
      uniq += str[i];
    }
  }
  return uniq;
}

console.log(findUnique("Happy and happy"));
console.log(findUnique("This is not a unique string"));
