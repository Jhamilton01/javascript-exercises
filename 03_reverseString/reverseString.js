const reverseString = function(word) {
    let reverse = ''

    for (let i = 0;  i < word.length+1 ; i++) {
        let lastChar = word.charAt(word.length-i);
        reverse = reverse + lastChar;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
