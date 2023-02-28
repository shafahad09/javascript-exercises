const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if(num1 < 0 || num2 < 0) return "ERROR";

    let ans = 0;

    if (num2 > num1) {
        for(let i = num1; i <= num2; i++) {
            ans = ans + i;
        }
    }

    if (num1 > num2) {
        for(let i = num2; i <= num1; i++) {
            ans = ans + i;
        }
    }

    return ans;
};

// Do not edit below this line
module.exports = sumAll;
