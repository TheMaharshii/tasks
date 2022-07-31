let string = "hello my name is deep";

console.log(convertFirstChartoUpper(string));

function convertFirstChartoUpper(string){
    const ans = string.split(" ");
    const newAns = [];
    for(str in ans){
        let newStr = ans[str].charAt(0).toUpperCase();
        for(i = 1;i<ans[str].length;i++){
            newStr += "" + ans[str].charAt(i);
        }
        newAns.push(newStr);
    }
    let realAns = "";
    for(i in newAns){
        realAns += newAns[i] + " ";
    }
    
    return realAns;
}