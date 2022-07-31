let string = "Deep Prajapati";

console.log(givenOccur(string,"e"))

function givenOccur(str,char){
    let count = 0;
    for(i = 0;i<str.length;i++){
        if(str.charAt(i) == char){
            count++;
        }
    }
    return count;
}