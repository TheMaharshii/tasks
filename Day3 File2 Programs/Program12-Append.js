const nums = [19,40,2,45,32,43,13];
// console.log(appendInArr(nums,"name","Deep Prajapati"));

const person = {
    name:"Deep",
    age:19
}

console.log(appendInArr(nums,person)); 


class Employee{
    constructor(id,salary,department){
        this.id = id;
        this.salary = salary;
        this.department = department;
    }
}

console.log(appendInArr(nums,new Employee(101,50000,"Back-end Devlopement")));

console.log(nums[nums.length -1]);

function appendInArr(arr,obj){
    arr.push(obj);
    return arr;
}