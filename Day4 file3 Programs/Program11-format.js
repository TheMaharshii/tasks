

function formatStr(currensy,...number){
    let op = "";
    let ans = "";
    switch(currensy){
        case '$' :
            op += '$';
            break;
        case '₨':
            op += '₨';
            break;
        case '£':
            op += '£';
            break;
        default :
            op+='₹';
            break;
    }

    for(num in number){
        ans += op + number[num] + "\n";
    }
    return ans;
}

console.log(formatStr('₹',2000,3000,4000));