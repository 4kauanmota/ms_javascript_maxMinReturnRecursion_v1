function max(array){
    if(array.length == 2) return array[0] > array[1] ? array[0] : array[1];
    let maxUntilNow = max(array.splice(1));
    return array[0] > maxUntilNow ? array[0] : maxUntilNow;
};
console.log(max([4, 88, 8, 48]));
  
//
  
function min(array){
    if(array.length == 2) return array[0] < array[1] ? array[0] : array[1];
    let minUntilNow = min(array.splice(1));
    return array[0] < minUntilNow ? array[0] : minUntilNow;
};
console.log(min([4, 88, 8, 48]))