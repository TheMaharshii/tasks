const nums = [204,5,23,2,534,12,43,231,24,56,23,12,54,65,643,23,45];

console.log(getRandomItem(nums));

function getRandomItem(arr){
    let random = Math.floor(Math.random() * 10);
    if(random < arr.length){
        return arr[random];
    }
}