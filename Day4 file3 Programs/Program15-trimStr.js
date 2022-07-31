let string = "this is a Universe";

console.log(trimStr(string));

function trimStr(str){
    const charArr = [];
    for(char in str){
        charArr.push(str.charAt(char));
    }
    for(element in charArr){
        if(charArr[element] == ' '){
            charArr.splice(element,1);
        }
    }
    let ans = "";
    for(i in charArr){
        ans += charArr[i];
    }
    return ans;
}