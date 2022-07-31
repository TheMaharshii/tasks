function LCM(num1,num2){
    let max = (num1>num2) ? num1:num2;

    for(i = 1;i<=num1 && i<num2;i++){
        if(max%num1 == 0 &&  max%num2 == 0){
          return max;  
        }
    }
    return 0;
}

console.log(LCM(23,46));