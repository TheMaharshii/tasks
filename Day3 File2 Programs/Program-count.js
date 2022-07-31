function count(obj){
    let count = 0;
    for(i in obj){
        if(obj[i]){
            count++;
        }        
    }
    return count;
}

const person = {
    name : "Deep",
    gender : "Male",
    message : function(message){
        return message + this.name;
    }
}

console.log(count(person));
console.log(person);