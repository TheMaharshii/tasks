let string = "this is a universe";

console.log(checkStart(string,"this"));

function checkStart(str,target){
    const arr = str.split(" ");
    if(arr[0] == target){
        return true;
    }
    return false;
}