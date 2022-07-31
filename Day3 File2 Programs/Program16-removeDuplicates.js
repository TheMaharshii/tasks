const nums = [10,20,30,20,10,40,40,40,40];

console.log(removeDuplicates(nums));

function removeDuplicates(arr){
    const newArr = [];
    for(i in arr){
        if(newArr.includes(arr[i]) == false){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}




