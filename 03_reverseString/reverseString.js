const reverseString = function(string) {
    
    let chars = string.split("");
    chars = chars.reverse();

    let ans = chars.join("");

    return ans;
};

// Do not edit below this line
module.exports = reverseString;
