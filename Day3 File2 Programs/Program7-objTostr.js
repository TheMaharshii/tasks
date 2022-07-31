function objToStr(obj){
    let str = "";
    for(element in obj){
        str += element + " = " + obj[element] + " , ";
    }
    return str;
}

const employee = {
    name : "Deep Prajapati",
    id : 1001,
    age : 23,
    role : "java Devloper",
    salary : 30000,
    
}

console.log(objToStr(employee))