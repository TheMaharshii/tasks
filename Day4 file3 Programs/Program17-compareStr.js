
console.log(compare("Deep","Jay"));

function compare(str1,str2){
    for(char in str1){
        for(i in str2){
            if(str1.charAt(char) == str2.charAt(i)){
                return true;
            }
        }
    }
    return false;
}