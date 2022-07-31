const numbers = [
    [2,30,4,20],
    [42,13,54,23],
    [75,54,23,56],
    [65,34,25,12]
];

let str = "";
for(let i in numbers){
    str += "[";
    for(let j in numbers[i]){
        str += " " + numbers[i][j] + " , ";
    }

    str += "]\n";
}

console.log(str);

