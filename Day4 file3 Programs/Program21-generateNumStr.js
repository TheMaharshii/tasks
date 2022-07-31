function generate(start,end){
    if(typeof start === 'string'){
        let result= [...print(start.charCodeAt(),end.charCodeAt())].map(value=>String.fromCharCode(value));
        
        console.log(result);
    }
    else{
        let result = [...print(start,end)];
        console.log(result);
    }
}

function* print(start,end){
    for(let i = start;i<=end;i++){
        yield i;
    }
}

generate('a','z');

