const Employee = [
    {
    name:"Deep prajapati",
    age:40,
    role:"Java Devloper",
    gender: "Male"
    },
    {
    name:"Jay Panchal",
    age : 22,
    role :"JavaScript Devloper",
    gender : "Male"
    },
    {
        name:"Maharshi Jha",
        age :19,
        role:"Front-end",
        gender:"Male"
    }

];





Employee.sort((a,b)=>{
    return a.age - b.age;
})

Employee.sort((a,b)=>{
    if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()){
        return 1;
    }
    else if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()){
        return -1;
    }else{
        return 0;
    }
})

Employee.forEach( i => {
    console.log(i.name + " age is :" + i.age)
});