function Employee(){
    this.name = "Deep Prajapati";
    this.age = 19;
    this.skills = ["java","python","javascript","mysql","html","css"];
    this.salary = 20000;
    this.giveBonus = function(bonus){
        this.salary += bonus;
        return this.salary;
    }
}

const deep = new Employee();

console.log(deep.age);
console.log(deep.giveBonus(5000));
console.log(deep.salary)


console.log("*****************************************")

class Account{

    constructor(id,name,age,balance){
        this.name = name;
        this.id = id;
        this.age = age;
        this.balance = balance;
    }

    withdraw(amount){
        this.balance = this.balance - amount;
        return this.balance;
    }

    deposit(amount){
        this.balance += amount;
        return this.balance;
    }

    getDeatails(){
        let str = "Id = " + this.id + " name = " + this.name + " age is = " + this.age + " total balance = " + this.balance;
        return str;
    }
}

const boi = new Account(101,"Deep Prajapati",19,10000);

console.log(boi.balance);
boi.deposit(5000);
console.log(boi.getDeatails())
boi.withdraw(7000);
console.log(boi.getDeatails())

delete boi.age;
console.log(boi.age);
 



