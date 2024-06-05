function areAllCharactersUnique(arr) {
const uniqueArr=[]
const arr1=arr.split('')
for (let i =0; i < arr1.length; i++){
if (!uniqueArr.includes(arr1[i])){
    uniqueArr.push(arr1[i])
}

}


// console.log(`unique ${uniqueArr} entireArr: ${arr1}`)
return uniqueArr.length===arr1.length

}

module.exports = areAllCharactersUnique;
