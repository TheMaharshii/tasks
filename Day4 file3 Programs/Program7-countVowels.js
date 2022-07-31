let string = "Deep Prajapti";
console.log(countVowels(string));

function countVowels(str){
    const temp = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
    for(i in str){
        for(j in temp){
            if(str.charAt(i) == temp[j]){
                count++;
            }
        }
    }
    return count;
}