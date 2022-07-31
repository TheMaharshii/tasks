let str = "Hello my name is Deep";
str.to
let words = ["Deep", "hello"];

function sort(str) {
  const ans = str.split(" ");
  str = "";
  ans.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    return 0;
  }); 
  return ans.toString();
}

console.log(sort(str));
