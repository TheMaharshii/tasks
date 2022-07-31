let string = "radar";


console.log(checkStartAndEnd(string,'r'));
function checkStartAndEnd(str, char) {
  if (str.charAt(0) == char && str.charAt(str.length - 1) == char) {
    return true;
  }
  return false;
}
