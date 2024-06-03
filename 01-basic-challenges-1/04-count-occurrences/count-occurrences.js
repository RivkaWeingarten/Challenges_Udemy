function countOccurrences(phrase, char) {
  //   return phrase.split(char).length - 1;
  let count = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === char) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
