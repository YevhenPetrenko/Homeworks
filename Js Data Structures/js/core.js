//#region Task1

class Stack {
    constructor(){
        this.items = [];
        this.lenght = 0;
    }
    push(item) {
        this.items[this.lenght] = item;
        this.lenght = this.lenght + 1;
    }
    pop() {
        this.lenght = this.lenght -1;
        return this.items.pop();
   }
   isEmpty() {
    return this.lenght === 0;
  }
}

function checkBrackets(str){
    const stack = new Stack();
    str.split("").forEach(s => stack.push(s));
    let leftCounter = 0;
    let rightCounter = 0;
    while(!stack.isEmpty()){
        let value = stack.pop();
        if(value === ')'){
            leftCounter++;
        }
        if(value === '('){
            rightCounter++;
        }
    }
    return rightCounter === leftCounter;
}

console.log(checkBrackets("()()((()))"));

//#endregion

//#region Task2

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor(args) {
        this.head = null;
        args.forEach(s => this.add(s));
    }
    add(data) { // thanks https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/#:~:text=A%20linked%20list%20is%20a,there%20is%20no%20next%20node. ¯\_(ツ)_/¯
        // create a new node
        const newNode = new LinkedListNode(data);
                
        //special case: no items in the list yet
        if (this.head === null) {

            // just set the head to the new node
            this.head= newNode;
        } else {

            // start out by looking at the first node
            let current = this.head;

            // follow `next` links until you reach the end
            while (current.next !== null) {
                current = current.next;
            }
           
            // assign the node into the `next` pointer
            if(current.data !== newNode.data){ //check required in task
                current.next = newNode;
            }
        }
    }

    *values(){ //generator method, a bit tricky       
        let current = this.head;
        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }
    [Symbol.iterator]() {
        return this.values();
    }    
}

const linkedList = new LinkedList(prompt("Numbers for a Linked List: ").split(""));

let strRes = ""
for(let item of linkedList){
   strRes += item + ',';
}
strRes = strRes.slice(0, strRes.length - 1);

console.log(strRes);

//#endregion