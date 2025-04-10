const repeatString = (word, num) => {
  if (num < 0) return "ERROR";
  if (num === 0) return "";
  return word + repeatString(word, num - 1);
};

// Do not edit below this line
module.exports = repeatString;
