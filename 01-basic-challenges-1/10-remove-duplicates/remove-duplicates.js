function removeDuplicates(phrase) {
  let uniquePhrase = [];

  for (let i = 0; i < phrase.length; i++) {
    if (!uniquePhrase.includes(phrase[i])) {
      uniquePhrase.push(phrase[i]);
    }
  }
  return uniquePhrase;
}

module.exports = removeDuplicates;
