const nums = [2,4,5,7,6,4,33,56];

console.log(insertInArr(nums,10,2));

console.log(insertInArr(nums,90,5));

function insertInArr(arr,value,index){
    for(let i = 0;i<arr.length;i++){
        if(index == i){
            arr.splice(i,0,value);
        }
    }
    return arr;
}