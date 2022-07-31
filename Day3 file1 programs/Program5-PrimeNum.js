num = 11;

let isPrime = true;

for(let i = 2;i<=num/2;i++){
    if(num%i == 0){
        isPrime = false;
    }
}

if(isPrime){
    console.log("This is Prime");
}
else{
    console.log("This is not Prime");
}