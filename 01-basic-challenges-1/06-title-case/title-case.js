function titleCase(phrase) {
  const phraseArray = phrase.toLowerCase().split(" ");
  for (let i = 0; i < phraseArray.length; i++) {
    phraseArray[i] = phraseArray[i][0].toUpperCase() + phraseArray[i].slice(1);
  }
  return phraseArray.join(" ");
}

module.exports = titleCase;
