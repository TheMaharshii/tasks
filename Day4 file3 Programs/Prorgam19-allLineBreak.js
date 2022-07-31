let para = `Deep Prajapati.
Silver Oak University.
Lucent Innovation.
`;
document.getElementById('demo').innerHTML = breakLine(para);

function breakLine(str){
    str = str.split("\n").join("<br>");
    return str; 
}