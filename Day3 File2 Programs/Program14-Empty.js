const nums = [10,20,30,40,50];

console.log(emptyArray(nums));

console.log(nums);

console.log(isEmpty(nums));


function emptyArray(arr){
    if(arr.length > 0){
        arr.length = 0;
    }
    return arr.length;
}

function isEmpty(arr){
    if(arr.length == 0){
        return true;
    }
    return false;
}