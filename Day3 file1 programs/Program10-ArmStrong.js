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

console.log("Is ArmStrong = " + isArmStrong(1634));