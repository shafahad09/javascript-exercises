const repeatString = function(string, num) {

    if(num < 0) {

        return "ERROR"
    }

    let ans = '';
    for(let i = 1; i <= num; i++) {

        ans = ans + string;
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
