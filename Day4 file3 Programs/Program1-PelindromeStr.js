
function pelindromeStr(str){
    let original = str;
    let reverseStr = "";
    for(let i = str.length - 1;i>=0;i--){
        reverseStr += str.charAt(i);
    }
    if(original == reverseStr){
        return true;
    }
    return false;
}

console.log(pelindromeStr("noono"));