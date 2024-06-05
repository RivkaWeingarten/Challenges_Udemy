function findFirstNonRepeatingCharacter(str) {
    fullStrArr=str.split('')
    for (let i= 0; i < str.length; i++){
        if(str.split(str[i]).join('').length + 1 === str.length ){
        return str[i]
        }

     }
     return null

}

module.exports = findFirstNonRepeatingCharacter;
