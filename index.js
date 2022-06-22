let errorMessage = 'Error : Please provide integer values.';
exports.convertTimeToText = function(h, m) {
    if(!Number.isInteger(h) || !Number.isInteger(m)){
        console.log(errorMessage);
        return errorMessage;
    }
    
    h = h % 12;
    m = m % 60;

    let numberArray = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'
    ],tempM = m, hourString = h > 0 ? numberArray[h] : numberArray[12], minuteString = null, timeText,timeTextSubString = "to";

    // Check for minute
    if (m == 0){
        timeText = hourString + " o' clock";
    } else if(m == 15){
        timeText = "quarter past " + hourString;
    } else if (m == 30) {
        timeText = "half past " + hourString;
    } else if (m == 45) {
        timeText = "quarter to " + numberArray[h + 1];
    } else {
        if (m > 30) {
            // If minute is greater than 30, increment hour
            tempM = 60 - m;
            hourString = numberArray[h + 1];
        }
        //  If present in the array use that, else we have to compute.
        //  Example : If minutes is 29 this will be split to 20 + 9 and corresponding text will be fetched from the map above.
        tempM = (numberArray[tempM] || numberArray[(tempM/10|0) *10] + ' ' +
            numberArray[tempM%10|0]) + ' minute';
        //  Changes minute to minutes
        if(m >1){
            tempM = tempM + 's';
        }
        //  Depending on the value of the minute, the text display changes
        if (m > 30) {
            timeText = tempM + ' to '+ hourString;
        } else {
            timeText = tempM + ' past '+ hourString;
        }
    }
    //console.log(h + ' ' + m + ' ' + timeText);
    return timeText;
}

