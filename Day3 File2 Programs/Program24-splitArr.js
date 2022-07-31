const data = ["Deep Prajapti",19,"Male","Jay Panchal",20,"Male","Maharshi jha",22,"Male"];

console.log(splitArr(data,3));

function splitArr(arr,size){
    const ans = [];
    for(i = 0;i<arr.length;i+=size){
        const temp = arr.slice(i,i+size);
        ans.push(temp);
    }
    return ans;
}