console.log("Hello is anyone there")


// This is a single-line comment

/*
multi line comment
in 
here 
*/

// python vs JS data types

/*
strings? -- same
booleans? -- same (except for capital letters)
int? -- only float or numeric type
*/

//SYNTAX -- snake_case is standard for python
// camelCase is standard for JS, but both work

myVariable = 9087;
my_variable = 98723;
myvar4 = 948238432943;
x = 1246;

//we want to be more specific about variable declaration/defintion
var x = 876;

console.log(x)

var teach = "Brandt";

console.log(teach)
console.log(typeof teach)

var bool1  = true;
var bool2 = false;

console.log(bool1);
console.log(typeof bool2);

// arrays 

var myArr= [13, 345, 456, "a string", true, 'last'];

console.log(myArr[0])
console.log(myArr[3])

console.log(myArr)

//Object
var myObject = {'aKey' : "A Value"};

console.log(myObject)

console.log(myObject['aKey]'])

console.log(myObject.aKey) 


// let
    // allows for re-definition but not re-declaration
// const
    //doesn't all for either

// let myVar2 = 45;
// myVar2 += 34
// const myVar1 = 56

// myVar1 += 34


arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(myArr){
    for (let i = 0; i < arr.length; i++){
        if (i%2 == 0){
            arr.splice(i, i, "even index");
        }
    }
    return myArr;
}

console.log(replaceEvens(arr))