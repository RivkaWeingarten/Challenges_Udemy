function isPalindrome(phrase) {
  const formattedArray = phrase.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedFormattedArray = formattedArray.split("").reverse().join("");

  return formattedArray === reversedFormattedArray;
}

module.exports = isPalindrome;
