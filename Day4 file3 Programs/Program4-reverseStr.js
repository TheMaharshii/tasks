let string = "Deep Prajapati";

console.log(reverse(string));

function reverse(str){
    let reverseStr = "";
    for(i = str.length - 1;i>=0;i--){
        reverseStr += str.charAt(i);
    }
    return reverseStr;
}