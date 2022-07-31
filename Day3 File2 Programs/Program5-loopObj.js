const Employee = {
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

for(property in Employee){
    console.log(Employee[property]);
}