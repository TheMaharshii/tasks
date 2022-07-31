let userName = "Deep Prajapati";

console.log(replaceChar(userName,'K','D'));

function replaceChar(str,char,target){
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

