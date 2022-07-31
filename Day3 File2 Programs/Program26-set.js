const nums = new Set();
nums.add({"Hello" : 10});
nums.add({"Deep" : 20});
nums.add({"jay" : 220});
// nums.add(100);

// nums.keys()

// for(let[key,value] of nums.entries()){
//     console.log(key);
// }

// console.log(nums.entries());
// const data = Array.from(nums);
// console.log(data);

const values1 =new Set ([132,43,23,12,53]);
const values2 = new Set ([43,53,132,10]);

// console.log(isSuperSet(values1,values2));

function isSuperSet(set,subset){
    for(let element of subset){
        if(set.has(element)){
            return true;
        }
    }
    return false;
}
// console.log(union(values1,values2));  

function union(set1,set2){
    const ans = new Set(set1);
    for(element of set2){
        ans.add(element);
    }
    return ans;
}

function intersection(set1,set2){
    const ans = new Set();
    for(element of set2){
        if(set1.has(element)){
            ans.add(element);
        }
    }
    return ans;
}
// console.log(intersection(values1,values2));

function symmetricDiff(set1,set2){
    const ans = new Set(set1);
    for(element of set2){
        if(ans.has(element)){
            ans.delete(element);
        }
        else{
            ans.add(element);
        }
    }
    return ans;
}
// console.log(symmetricDiff(values1,values2));


function diff(set1,set2){
    const ans = new Set(set1);

    for(element of set2){
        ans.delete(element);
    }
    return ans;
}

// console.log(diff(values1,values2));

function reverseDiff(set1,set2){
    const ans = new Set(set2);
    for(element of set1){
        ans.delete(element);
    }
    return ans;
}
console.log(reverseDiff(values1,values2))