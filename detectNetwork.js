// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstDigit = cardNumber.slice(0,1);
  var firstTwoDigits = cardNumber.slice(0, 2);
  var firstThreeDigits = cardNumber.slice(0,3);
  var firstFourDigits = cardNumber.slice(0,4);
  if (cardNumber.length == 14 && (firstTwoDigits == 38 || firstTwoDigits == 39)) {
    return 'Diner\'s Club';
  } else if (cardNumber.length == 15 && (firstTwoDigits == 34 || firstTwoDigits == 37)) {
    return 'American Express';
  } else if (firstDigit == 4 && (cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19)) {
    return 'Visa';
  } else if (51 <= firstTwoDigits <= 55 && cardNumber.length == 16) {
    return 'MasterCard';
  } else if (cardNumber.length == 16 || cardNumber.length == 19) {
    if (firstFourDigits == 6011) {
      return 'Discover';
    } else if (644 <= firstThreeDigits <= 649) {
      return 'Discover';
    } else if (firstTwoDigits == 65) {
      return 'Discover';
    }
  } else if (12 <= cardNumber.length <= 19) {
    if (firstFourDigits == 5018 || firstFourDigits == 5020 || firstFourDigits == 5038 || firstFourDigits == 6304) {
      return 'Maestro';
    }
  }
};


