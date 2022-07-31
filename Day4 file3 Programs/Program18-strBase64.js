let string = "Deep Prajapapti";

function encode(str){
    str = btoa(str);
    return str;
}
function decode(str){
    str = atob(str);
    return str;
}

let encodeStr = encode(string);

console.log(encode(string));

console.log(decode(encodeStr));