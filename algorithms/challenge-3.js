function isLeapYear(year) {
    if(year % 4 === 0){
        return true
    }
    else{
        return false
    }
    }
isLeapYear(1996);
isLeapYear(2000);
isLeapYear(2010);

module.exports = isLeapYear;
