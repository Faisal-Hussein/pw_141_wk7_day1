//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string1 = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names1 = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for (let i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log("Matched" + ' ' + dog_names[i]);
        }
        else{
            console.log("No Matches");
        }
    }
}

console.log(findWords(dog_string1, dog_names1));



/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(myArr){
    for (let i = 0; i < arr.length; i++){
        if (i%2 == 0){
            arr.splice(i, 1, "even index");
        }
    }
    return myArr;
}

console.log(replaceEvens(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
*/

function evenOrOdd(number) {
    if(number % 2 == 0){
      return "Even"
    }
    else{
      return "Odd"
    }
  }


/*Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

https://www.codewars.com/kata/53dc54212259ed3d4f00071c
*/

function sum (numbers) {
    "use strict";
    let sums = 0;
    if (numbers.length == 0){
      sums = 0;
    }
    for(let i = 0; i < numbers.length; i++){
      sums += numbers[i];
    }
    return sums
};