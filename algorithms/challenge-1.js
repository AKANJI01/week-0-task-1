function countCharOccurrences(str, char){
    let count = 0;
    for(i=0; i<str.length; i++){
        if(str[i] == char){
            count++;
            
            
        }
    }
    console.log(count)
    return count
};

countCharOccurrences("hello", "l");

module.exports = countCharOccurrences;
    