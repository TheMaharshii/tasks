const Vehicle = {
    type : "Car",
    name : "Audi",
    seats : 2,
    wheel : 4,
    engine : "Disal"
}


console.log(objToArr(Vehicle));

function objToArr(obj){
    const arr = [];
    for(element in obj){
        arr.push(element);
        arr.push(obj[element]);
    }
    return arr;
}