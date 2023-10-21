function capitalizeText(text) {
  return text
    .toLowerCase()
    .split(" ")
    .filter((word) => word)
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

const stringOperations = {
  capitalizeText,
};

module.exports = stringOperations;
