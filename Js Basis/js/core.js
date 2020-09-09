//#region Variables Tasks

//#region Task1

const a  = 3;
const b = 6;

console.log(`Variables Task 1: ${a} * ${b} = ${a * b}`);

//#endregion

//#region Task2

const c = 5;
const d = 6;

console.log(`Variables Task 2: ${c} / ${d} = ${c/d}`);

//#endregion

//#region Task3

const e = 4;
const f = 7;

console.log(`Variables Task 3: ${e} + ${f} = ${e + f}`);

//#endregion

//#region Task4

const resArr = [];
const num = 11;
const boolVar = true;
const str = "java script";
const strNum = "100";

resArr.push(num, boolVar, str, strNum);

console.log("Variables Task 4: ");
resArr.forEach(s => console.log(s));

//#endregion

//#region Task5

/*let num = 1;
num = num + 11;
num = num - 11;
num = num * 11;
num = num / 11;
num = num + 1;
num = num - 1;*/

let numVar = 1;
numVar += 11;
numVar -= 11;
numVar *= 11;
numVar /= 11;
numVar++;
numVar--;

console.log(`Variables Task 5: ${numVar}`);

//#endregion

//#endregion

//#region Promt Tasks

//#region Task1

console.log(`Promt Task 1: ${Math.pow(prompt("Give me a number: "),2)}`);

//#endregion

//#region Task2

console.log(`Promt Task 2 : Average: ${(Number(prompt("First Value: ")) + Number(prompt("Second Value: "))) / 2}`);

//#endregion

//#region Task3

console.log(`Promt Task 3 : Seconds: ${Number(prompt("Minutes: ")) * 60}`);

//#endregion

//#region Task4

const greeting = "Hello, ";
let userName = "";

userName = prompt("What is your name?");

console.log(`Promt Task 4 : ${greeting + userName}!`);

alert(`${greeting + userName}!`);

//#endregion

//#endregion

 //#region Condition Tasks

 //#region Task1

 console.log(`Condition Task 1: ${Number(prompt("Number(must be 10): ")) === 10 ? "Correct" : "Not Correct"}`);

 //#endregion

 //#region Task2

 let test = true;

 console.log("Condition Task 2: ");

 console.log(`Variable test = ${test}: ${test ? "Correct" : "Not Correct"}`);

 test = false;

 console.log(`Variable test = ${test}: ${!test ? "Correct" : "Not Correct"}`);
 
 //#endregion

 //#region Task3

const sum = prompt("Sum(>500 -3% off, >800 -5% off): ");

console.log(`Condition Task 3: ${sum > 800 ? Math.round(sum * 0.95) :
     sum > 500 ? Math.round(sum * 0.97) : sum }`);

 //#endregion

 //#endregion
 
 //#region Loop Tasks

//#region Task1

let resStr = "";

for(let i = 25; i >= 0; i--){
    resStr += i + ',';
}
resStr = resStr.slice(0, resStr.length-1);

console.log(`Loop Task 1(for): ${resStr}`);

resStr = "";

let contrlVar = 25;
while(contrlVar >= 0){
    resStr += contrlVar + ',';
    contrlVar--;    
}
resStr = resStr.slice(0, resStr.length-1);

console.log(`Loop Task 1(while): ${resStr}`);

resStr = "";

contrlVar = 25;
do{
    resStr += contrlVar + ',';
    contrlVar--;
}while(contrlVar >= 0);

resStr = resStr.slice(0, resStr.length-1);

console.log(`Loop Task 1(do while): ${resStr}`);

resStr = "";

//#endregion

//#region Task2

resStr = ""; //alreadyDefined in previous task

for(let i = 10; i <= 50; i++){
    if(!(i%5)){
        resStr += i + ',';
    }
}

resStr = resStr.slice(0, resStr.length-1);

console.log(`Loop Task 2(for): ${resStr}`);

resStr = "";

contrlVar = 10;
while(contrlVar <= 50){
    if(!(contrlVar%5)){
        resStr += contrlVar + ',';
    }
    contrlVar++;
}

resStr = resStr.slice(0, resStr.length-1);

console.log(`Loop Task 2(while): ${resStr}`);

resStr = "";

contrlVar = 10;
do{
    if(!(contrlVar%5)){
        resStr += contrlVar + ',';
    }
    contrlVar++;
}while(contrlVar <= 50);

resStr = resStr.slice(0, resStr.length-1);

console.log(`Loop Task 2(do while): ${resStr}`);

//#endregion

//#region Task3

let sumVar = 0;

for(let i = 1; i <= 100; i++){
    sumVar += i;
}

console.log(`Loop Task 3(for): ${sumVar}`);

sumVar = 0;
contrlVar = 100; //declared in precious task

while(contrlVar){
    sumVar += contrlVar;
    contrlVar--;
}

console.log(`Loop Task 3(while): ${sumVar}`);

sumVar = 0;

contrlVar = 100; //declared in previous task

do{
    sumVar += contrlVar;
    contrlVar--;
}while(contrlVar);

console.log(`Loop Task 3(do while): ${sumVar}`);

sumVar = 0;

//#endregion

//#region Task4

console.log("For");
for(;;){
    let result = Number(prompt("(2 + 2 * 2) = "));
    if(result === 6){
        console.log("Correct");
        break;
    }
}

console.log("While");
while(true){
    let result = Number(prompt("(2 + 2 * 2) = "));
    if(result === 6){
        console.log("Correct");
        break;
    }
}

console.log("Do While");
do{
    let result = Number(prompt("(2 + 2 * 2) = "));
    if(result === 6){
        console.log("Correct");
        break;
    }
}while(true);

//#endregion

 //#endregion

 //#region Function Tasks

//#region Task1

const age1 = 4;
const age2 = 20;
 
function isAdult(age){
    return Number(age) >= 18 ? true : false;
}

console.log(`isAdult(${age1}) ${isAdult(age1)}`);
console.log(`isAdult(${age2}) ${isAdult(age2)}`);

//#endregion

 //#endregion
