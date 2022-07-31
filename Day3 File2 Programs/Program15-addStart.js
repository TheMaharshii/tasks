const nums = [20,30,40,50,60];

console.log(addStart(nums,10));


function addStart(arr,element){
    arr.splice(0,0,element);
    return arr;
}