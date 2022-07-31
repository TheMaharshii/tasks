function sumOfAll(start, end) {
  let sum = 0;
  for (let num = start; num <= end; num++) {
    if (num < 0) {
      num *= -1;
    }
    sum += num;
  }
  return sum;
}

console.log("The Sum of All is " + sumOfAll(-20,50));
