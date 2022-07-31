let message = "apple is king of fruit";

console.log(replaceChar(message,"a","K"))

function replaceChar(str,target,char){
    const arr = [];
    for(i = 0;i<=str.length;i++){
        arr.push(str.charAt(i));
    }
    for(i in arr){
        if(arr[i] == target){
            arr[i] = char;
        }
    }
    return arr.toString();
}