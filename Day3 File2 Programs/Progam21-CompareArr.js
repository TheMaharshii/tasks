const num1 = [10,20,30,40,50];
const num2 = [10,20,30,40,50];

console.log(compare(num1,num2));

function compare(arr1,arr2){
    let ans = false;
    for(i = 0;i<arr1.length;i++){
            if(arr1[i] === arr2[i]){
                ans = true;
            }
            else{
                ans = false;
            }
    }
    return ans;
}