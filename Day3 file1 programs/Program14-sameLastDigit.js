function checkLastDigit(target,...num){

    for(let i = 0;i<num.length;i++){
        if(num[i] % 10 == target % 10){
            console.log( "Target = " + target + " Same last digit numbers is " + num[i])
        }
    }
}

checkLastDigit(124,12,3,34,2,54,76,64);
