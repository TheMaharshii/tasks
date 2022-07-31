function isExist(obj,target){
    for(i in obj){
        if(obj[i] == target){
            return true;
        }
    }
    return false;
}

const person = {
    name : "Deep",
    age : 19,
    hobbies : ["cricket","songs","movies","swimming"]
}

console.log(isExist(person,person.age))