let num;

console.log(isUndefinedOrNull(num));

function isUndefinedOrNull(variable){
    if(variable == undefined || variable == null){
        return true;
    }
    else{
        return false;
    }
}