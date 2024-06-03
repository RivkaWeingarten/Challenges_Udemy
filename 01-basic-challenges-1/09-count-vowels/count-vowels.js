function countVowels(phrase) {
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerCasePhrase = phrase.toLowerCase();

  for (let i = 0; i < lowerCasePhrase.length; i++) {
    if (vowels.includes(lowerCasePhrase[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

module.exports = countVowels;
