module.exports = function getZerosCount(number) {
  zeros = 0;
  while (number >= 5) {
    number = Math.floor(number / 5);
    zeros += number;
  }
  return zeros;
}