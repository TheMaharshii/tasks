function fibonacci(num){
    let prev = 0;
    let cur = 1;

    let count = 2;

    while(count<=num){
        let temp = cur;
        cur = prev + cur;
        prev = temp;
        count++;
        console.log(cur);
    }
}

fibonacci(8);