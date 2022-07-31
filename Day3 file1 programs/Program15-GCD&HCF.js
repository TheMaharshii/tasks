function HCFORGCD(num1,num2){
    let gcd = 0;
    for(i = 1;i<=num1 && i<num2 ;i++){
        if(num1%i == 0 && num2%i==0){
            gcd = i;
        }
    }
    return gcd;
}

console.log(HCFORGCD(60,36));