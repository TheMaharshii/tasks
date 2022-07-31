let string = "Neel ArmStrong";

console.log(ReplaceAllOcurrance(string,'e','o'));

function ReplaceAllOcurrance(str,char,replaceChar){
    const arr = [];
    for(i in str){
        arr.push(str.charAt(i));
    }
    for(i in arr){
        if(arr[i] == char){
            arr[i] = replaceChar;
        }
    }
    let realAns = "";
    for(i in arr){
        realAns += arr[i];
    }
    return realAns;
}