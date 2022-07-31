let string = "this is a universe and everything is an object in this univers";

console.log(isContains(string,"everything is an object in this univers"));

function isContains(str,substr){
    for(char in str){
        for(i in substr){
            if(str.charAt(char) == substr.charAt(i)){
                return true;
            }
        }
    }
    return false;
}