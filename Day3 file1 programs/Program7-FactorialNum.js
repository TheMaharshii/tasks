function findFactorial(num){
    let fact = 1;
    for(let i = 1;i<=num;i++){
        fact *= i;
    }
    return fact;
}

console.log("Factorial of number is: " + findFactorial(6));