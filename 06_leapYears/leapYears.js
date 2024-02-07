const leapYears = function(number) {
    // n % 4 === 0 => LEAP
    // n % 400 === 0 %% n % 100 === 0 => LEAP
    let n = number;
    if(n % 4 === 0){return true}
    else if( n % 100 ===0 && n % 100 === 0){return true}
    else {return false}
};

// Do not edit below this line
module.exports = leapYears;
