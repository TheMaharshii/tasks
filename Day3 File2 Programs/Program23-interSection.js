const nums1 = [10,20,30,40,50,60,70,20,10];
const nums2 = [50,60,70,80,90,100];

console.log(removeDuplicates(nums1));
console.log(interSection(nums1,nums2));

function interSection(arr1,arr2){
    for(i = 0;i<arr1.length;i++){
        for(j = 0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                arr1.splice(i,1);
            }
        }
    }
    return arr1.concat(arr2);
}


function removeDuplicates(arr){
    const ans = [];
    for(let i = 0;i<arr.length;i++){
        if(!ans.includes(arr[i])){
            ans.push(arr[i]);
        }
    }
    return ans;
}