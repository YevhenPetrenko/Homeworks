//#region Tasks from Google Class

//#region Task1

class MyArray{
    constructor(...args){
        this.length = 0;
        args.forEach(s => {
            this[this.length] = s;
            this.length++;
        })
    }
    flat(depth = 1){
        const resArr = [];
        const arrCopy = [];
        for(let i = 0; i < this.length; i++){
            arrCopy.push(this[i]);
        }
        (function toFlat(arr, depth){
            for(let item of arr){
                if(Array.isArray(item) && depth){
                    toFlat(item, depth - 1);
                }
                else{
                    resArr.push(item);
                }
            }
        })(arrCopy,depth);   
        return resArr;
    } 
}

const arr = new MyArray(1,2,3,4,5,[6,7,8],[9,[10,11,12]]);

console.log("Task 1 from Google Class: ");

console.log(arr);

console.log(arr.flat(Infinity));

//#endregion

//#region Task2

function objectFlat(obj) {
    const resObj = new Object();
    getProp(obj);
    function getProp(o) {
        for(var prop in o) {
            if(typeof(o[prop]) === 'object') {
                getProp(o[prop]);
            } else {
                resObj[prop] = o[prop];
            }
        }
    }
    return resObj;
}

const obj = {
    obj1: {
        test: "test",
        test1: 1
    },
    state: true,
    obj2:{
        field1: "some field",
        objectField: {
            objectField1: "anything",
            someField: "IDK"
        }
    }
};

console.log(obj);

console.log(objectFlat(obj));

//#endregion

//#region Task3

function logParenthis(number){
    const resArr = [];
    for(let i = 0; i < number; i++){
        resArr.push("(");
    }
    resArr.forEach(() => resArr.push(")"));
    return resArr.join("");
}

console.log(logParenthis(3));

//#endregion

//#region Task4

class User{
    constructor(name, dob, hours, rate){
        this._name = name;
        this._dob = dob;
        this._hours = hours;
        this._rate = rate;
    }
    get age(){ //thanks https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd ¯\_(ツ)_/¯
        var ageDifMs = Date.now() - this._dob.getTime(); 
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    get salary(){
        return this._hours * this._rate;
    }
}

const user = new User("John", new Date('December 17, 1968 03:24:00'), 160, 150);

console.log(user.age);

console.log(user.salary)

//#endregion

//#endregion

//#region Tasks from Practice

//#region Task1

function getVowels(str){
    return str.split("").filter(s => s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u').join("");
}

console.log(getVowels("tesituefwewflvokmwejncwj"));

//#endregion

//#region Task2

function fizzBuzzers(number){
    let resStr = "";
    for(let i = 1; i <= number; i++){
        if(!(i%3)){
            resStr += "fizz" + ',';
            continue;
        }
        if(!(i%5)){
            resStr += "buzz" + ','
            continue;
        }
        resStr += i + ','
    }
    resStr = resStr.slice(0, resStr.length - 1);
    return resStr;
}

console.log(fizzBuzzers(100));

//#endregion

//#region Task3

function avg(...args){
    let sum = 0;
    args.forEach(s => sum += Number(s));
    return sum/args.length;
}

console.log(avg(1,2,3,4,5,6,7,8,9,10));

//#endregion

//#region Task4

function addNum(n){
    return (arg) => {
        return n + arg;
    }
}

console.log(addNum(10));

const func = addNum(10);

console.log(func(20));

//#endregion

//#region Task5

function operation(num1, num2, fn){
    return fn(num1, num2);
}

console.log(operation(5,6,(a,b) => a + b));

//#endregion

//#region Task6

class MyObj{
    method1(){
        return this;
    }
    method2(){
        return this;
    }
    method3(){
        return this.method3;
    }
}

const myObj = new MyObj();

console.log(myObj.method1().method2().method3());

//#endregion

//#endregion