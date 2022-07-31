const nums = [23,5,4,3,7,6,4,32,56,76];

function shuffle(arr){
    for(let i = 0;i<=arr.length;i++){
        
        let first = Math.floor(Math.random() * 10);
        let second = Math.floor(Math.random() * 10);

        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp; 
    }
}
shuffle(nums)
console.log(nums);