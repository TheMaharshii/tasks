let a = 10
let b = 20
let c = 20
let d =  b*b - 4*a*c;

if(d>0){
    let root1 = (-b - Math.sqrt(d))/(2*a);
    let root2 = (-b + Math.sqrt(d))/(2*a);
    console.log(root1 + " " + root2);
}
else if( d == 0){
    let root = -b / (2*a);
    console.log(root);
}
else{s
    let real = (-b/(2*a)).toFixed(2);
    let img = Math.sqrt(-d/(2*a)).toFixed(2);
    console.log(real + " " + img);
}


