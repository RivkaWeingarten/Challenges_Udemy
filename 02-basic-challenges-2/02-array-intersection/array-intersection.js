function arrayIntersection(arr1, arr2) {
nonUniqueArray=[]
for (let i=0; i< arr1.length; i++){
if (arr2.includes(arr1[i]) && !nonUniqueArray.includes(arr1[i])){
    nonUniqueArray.push(arr1[i])
}
}
return nonUniqueArray
}

module.exports = arrayIntersection;
