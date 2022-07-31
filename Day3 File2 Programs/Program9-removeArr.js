const numbers = [2,4,5,65,32,42,12,4,65];
console.log(numbers);

console.log(removeInArr(numbers,65));


function removeInArr(arr,element){
    for(i in arr){
        if(arr[i] == element){
            arr.splice(i,1);
        }
    }
    return arr;
}
