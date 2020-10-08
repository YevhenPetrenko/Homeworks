//#region task1

const calculateButton = document.getElementById("calculateButton");
const radiusInp = document.getElementById("radiusInp");
const sphereVolume = document.getElementById("sphereVolume");
const dynamicCheck = document.getElementById("dynamicCheck");

calculateButton.disabled = true;
sphereVolume.disabled = true;
dynamicCheck.checked = true;

radiusInp.addEventListener('input', radiusEditValueChanging)
dynamicCheck.addEventListener('input', dynamickCheckCahnged)
calculateButton.addEventListener('click', radiusEditValueChanging);

function radiusEditValueChanging(e){
    calculateSphereVolumebyRadius(radiusInp.value, sphereVolume);
}

function dynamickCheckCahnged(e){
    radiusEditValueChanging(e);
    if(e.target.checked){
        radiusInp.addEventListener('input', radiusEditValueChanging)
        calculateButton.disabled = true;
    }else{
        radiusInp.removeEventListener('input', radiusEditValueChanging)
        calculateButton.disabled = false;
    }
}

function calculateSphereVolumebyRadius(radius, control){
    control.value = (4*Math.PI*Math.pow(radius,3))/3;
}

//#endregion

//#region task2

const element = document.getElementById("elem");

function addClass(elem = element, className = "www"){
    elem.classList.add(className);
}

function removeClass(elem = element, className = "www"){
    elem.classList.remove(className);
}

function containsClass(elem = element, className = "www"){
    return elem.classList.contains(className);
}

function addOrRemoveClass(elem = element, className = "www"){
    if(elem.classList.contains(className)){
        elem.classList.remove(className);
    }
    else{
        elem.classList.add(className);
    }
}

addClass();
removeClass();
containsClass();
addOrRemoveClass();

//#endregion

//#region task3

const objectArr = [
    {id: "1", title: "first", description: "item1"}, 
    {id: "2", title: "second", description: "item2"}, 
    {id: "3", title: "third", description: "item3"}, 
];

const list = document.getElementById("someList");

function insertListItems(list, objectArray){
    objectArray.forEach(element => {
        const listItem = createElementWithProperty("li", undefined, undefined, 'click', (e) => onListItemEventHandler(e, listItem));
        listItem.classList.add("unclickedListItem");
        listItem.appendChild(createElementWithProperty("label", "innerHTML", `ID: ${element.id} `));
        listItem.appendChild(createElementWithProperty("label", "innerHTML", `Title: ${element.title} `));
        listItem.appendChild(createElementWithProperty("label", "innerHTML", `Description: ${element.description} `));
        listItem.appendChild(createElementWithProperty("button", "textContent", `Delete`, 'click', (e) => onButtonClickHandler(e, listItem)));
        list.appendChild(listItem);
    });
}

function createElementWithProperty(type, propertyName, propertyValue, event, eventHandler){
    const elem = document.createElement(type);
    elem[propertyName] = propertyValue;
    elem.addEventListener(event, eventHandler);
    return elem;
}

function onListItemEventHandler(e, listItem){
    for(const li of list.getElementsByTagName("li")){
        if(!li.classList.contains("unclickedListItem")){
            li.classList.add("unclickedListItem");
        }
    }
    listItem.classList.remove("unclickedListItem");
    listItem.classList.add("clickedListItem");
}

function onButtonClickHandler(e, listItem){
    list.removeChild(listItem);
}

insertListItems(list, objectArr);

//#endregion

//#region task4

class Elem{
    constructor(selector){
        this._element = document.getElementById(selector); //implementation by getElementById instead querySelector cause of return one exact element instead first
    }
    html(text){
        this._element.innerHTML = text;
        return this;
    }
    append(text){
        this._element.append(text);
        return this;
    }
    prepend(text){
        this._element.prepend(text);
        return this;
    }
    attr(atr,value){
        this._element.setAttribute(atr, value);
        return this;
    }
}

const root = document.getElementById("body");

const someElem = document.createElement("div");
someElem.id = "testId";
root.appendChild(someElem);

const elemInstance = new Elem("testId");
elemInstance.html('hello').append('!').prepend('!').attr('class', 'www').attr('title', 'hello');

//#endregion