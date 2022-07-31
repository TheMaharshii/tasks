const strArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'
,'Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function generate(arr){
    let str = "";
    for(i = 0;i<arr.length;i++){
        let random = Math.floor(Math.random() * 100);
        if(random <arr.length){
            str += arr[random];
        }
    }
    return str;
}

console.log(generate(strArr));