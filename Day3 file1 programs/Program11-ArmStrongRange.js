function findInRange(start,end){
    for(let num = start;num<=end;num++){
        if(isArmStrong(num)){
            console.log(num + " is ArmStrong = " +isArmStrong(num));
        }
    }
}

function isArmStrong(num){
    let original = num;
    let ans = 0;

    while(num>0){
        let digit = num % 10;
        ans = ans + (digit * digit * digit);
        num = Math.floor(num /10);
    }

    if(original == ans){
        return true;
    }
    return false;
}

findInRange(10,1000);