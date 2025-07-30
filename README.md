# Time to text

### Given the time in numerals we may convert it into words, as shown below:

5,00 => five o' clock  
5,01 => one minute past five  
5,10 => ten minutes past five  
5,15 => quarter past five  
5,30 => half past five  
5,37 => twenty three minutes to six  
5,40 => twenty minutes to six  
5,45 => quarter to six  
5,47 => thirteen minutes to six  
5,28 => twenty eight minutes past five  


Usage : 

```
const timeToText = require('convert-time-to-text');

console.log(timeToText.convertTimeToText(5,00));
console.log(timeToText.convertTimeToText(5,0));
console.log(timeToText.convertTimeToText(5,01));
console.log(timeToText.convertTimeToText(5,1));
console.log(timeToText.convertTimeToText(5,9));
console.log(timeToText.convertTimeToText(5,10));
console.log(timeToText.convertTimeToText(5,15));
console.log(timeToText.convertTimeToText(5,30));
console.log(timeToText.convertTimeToText(5,37));
console.log(timeToText.convertTimeToText(5,40));
console.log(timeToText.convertTimeToText(5,45));
console.log(timeToText.convertTimeToText(5,47));
console.log(timeToText.convertTimeToText(12,24));
console.log(timeToText.convertTimeToText(11,50));
console.log(timeToText.convertTimeToText(12,50));
console.log(timeToText.convertTimeToText(12,20));
```

Output : 
```
five o' clock
five o' clock
one minute past five
one minute past five
nine minutes past five
ten minutes past five
quarter past five
half past five
twenty three minutes to six
twenty minutes to six
quarter to six
thirteen minutes to six
twenty four minutes past twelve
ten minutes to twelve
ten minutes to one
twenty minutes past twelve
```

To publish packages : https://itnext.io/setting-up-github-packages-for-npm-2bc9f8e4b11e


Note : To publish to npm, might have to remove `publishConfig` and `repository` in package.json and remove `@name/` from name.
