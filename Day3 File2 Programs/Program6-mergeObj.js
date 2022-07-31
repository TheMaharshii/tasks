const person = {
    firstName: "Deep",
    lastName: "Prajapati",

}

const employee = {
    name : "Deep Prajapati",
    id : 1001,
    age : 23,
    role : "java Devloper",
    salary : 30000,
    giveBonus : function(bonus){
        this.salary += bonus;
        return this.salary;
    }
}

console.log(Object.assign(person,employee));


console.log(mergeObj(person.firstName,employee.role));

function mergeObj(obj1,obj2){
     return obj1 + obj2;
}
