const num1 = [10,20,30,30,30,40,50,90];

const num2 = [40,50,60,70,80,90,90,50,40];

console.log(mergeArr(num1,num2));

function mergeArr(arr1,arr2){
    
    arr1 = removeDuplicates(arr1);
    arr2 = removeDuplicates(arr2);

    for(let i = 0;i<arr1.length;i++){
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]){
                arr1.splice(i,1);
            }
        }
    }
    return arr1.concat(arr2);
}

function removeDuplicates(arr){
    const newArr = [];
    for(i in arr){
        if(newArr.includes(arr[i]) == false){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
