
console.log(creatMultiStr("Deep","Prajapati","Kishorbhai","Java Devloper","Jay Panchal"))

function creatMultiStr(...str){
    let ans = "";
    for(i in str){
        ans += str[i] + "\n";
    }
    return ans;
}