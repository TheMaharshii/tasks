
function primeInRange(start,end){
    for(let num = start;num<=end;num++){
        if(num > 1){
            let isPrime = true;
            for(let i = 2;i<=num/2;i++){
                if(num%i == 0){
                    isPrime = false;
                }
            }
            if(isPrime){
                console.log("prime = " + num);
            }
        }
    }
}

primeInRange(10,100);