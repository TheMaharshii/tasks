function getExtension(name){
    const ext = name.split('.');
    ext.shift();
    return ext.toString();
    
}

console.log(getExtension("deep.js"));
console.log(getExtension("deep.txt"));
