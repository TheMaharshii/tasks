const numbers = [2,4,5,65,32,42,12,4,65];

console.log(isContains(numbers,32));


function isContains(arr,target){
    for(i in arr){
        if(arr[i] == target){
            return true;
        }
    }
    return false;
}