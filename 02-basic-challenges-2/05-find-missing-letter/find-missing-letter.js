function findMissingLetter(arr) {
 firstCharCode=arr[0].charCodeAt(0)
 
for (let i =0; i < arr.length +1; i++){
   let  char = i + firstCharCode
   if (arr[i].charCodeAt(0)!==char){
    return String.fromCharCode(char)
   }
   
    
}

}

module.exports = findMissingLetter;
