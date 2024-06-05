function fizzBuzzArray(num) {
    fizzBuzzArr=[]
    for (i =1; i <= num; i++ ){
 if(i % 3 ===0 && i % 5 ===0){
    result="FizzBuzz"
 }else if (i % 3 ===0 ){
    result='Fizz'
 }else if(i % 5===0){
    result = 'Buzz'
 } else{
    result = i
 }
    
 fizzBuzzArr.push(result)
    }
    return fizzBuzzArr
}

module.exports = fizzBuzzArray;
