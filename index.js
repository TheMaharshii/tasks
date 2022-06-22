//To check string is plaidrome or not

// function checkPalindrome(string) {
//   let length = string.length;

//   for (let i = 0; i < length / 2; i++) {
//     if (string[i] == string[length - 1 - i]) {
//       return console.log("This is palindrome string");
//     }
//   }

//   return console.log("This is not palindrome string");
// }

// console.log(checkPalindrome('madam'));

// sort an string

// function sortString(string){
//     const arr=string.split("");
//     arr.sort();

//     return arr.toString();
// }

// console.log(sortString("how are you today"));

// replace value of string

// const string=["A great day awaits"];
// const newString=string.replace('a','z');

// console.log(newString);

// reverse a string

// function reverseTheString(string) {
//     var newString = "";
//     for (var i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//     }
//     return newString;
// }
// console.log(reverseTheString('hello world'))

//count number of occurunces

// function numberOfOccur(string,char){
//     let occur = 0;
//     for(i = 0;i<string.length;i++){
//         if(string.charAt(i) == char){
//             occur++;
//         }
//     }
//     return occur;
// }

// console.log(numberOfOccur("Welcome to the new world","e"))

//convert to capital

// const str = "i have learned something new today";
// function convertToUppercase(string){
// const arr = string.split(" ");
// for (var i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// const string2 = arr.join("");
// return string2;
// }

// console.log(convertToUppercase('hello welcome to the new world'));

// count the number of vowels

// function countVowels(string) {
//   var count = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let words of string) {
//     if (vowels.includes(words)) {
//       count++;
      
//     }
//   }
//   return count;
// }

// console.log(countVowels("aeiou not therer vwls"));


    //         const string=["hellohowareyou"]
    // for(var words of string){
    //     console.log(words);
    // }
    
    
//check first and last


// function firstAndLast(string, word) {
//   if (string.charAt(0) == word && string.charAt(string.length - 1) == word) {
//     return true;
//   }
//   return false;
// }
// console.log(firstAndLast("malyalaf",'m'));


// multiline stting



// function multiLine(string){
//     let newString = "";
//     for(i in string){
//         newString =newString+ string[i] + "\n";
//     }
//     return newString;
// }

// console.log(multiLine('Hello welcome to new world'))


