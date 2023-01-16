let yellowBtn = document.getElementById("btn1");
let blueBtn = document.getElementById("btn2");
let redBtn = document.getElementById("btn3");
let greenBtn = document.getElementById("btn4");

let arrowSymbol1 = document.getElementById("arrow1");
let arrowSymbol2 = document.getElementById("arrow2");
let arrowSymbol3 = document.getElementById("arrow3");
let arrowSymbol4 = document.getElementById("arrow4");

let containerElement = document.getElementById('myContainer');

function onChangeArrowYellow() {
    yellowBtn.style.backgroundColor = "#b3b0aa";
    arrowSymbol1.textContent = '';
    let h1Element = document.createElement('h1');
    h1Element.classList.remove("btn");
    h1Element.classList.add('primary-btn');
    containerElement.appendChild(h1Element);
}

let containerElement1 = document.getElementById('myContainer1');

function onChangeArrowBlue() {
    blueBtn.style.backgroundColor = "#b3b0aa";
    arrowSymbol2.textContent = '';
    let h1Element = document.createElement('h1');
    h1Element.classList.add('primary-btn');
    containerElement1.appendChild(h1Element);
}

let containerElement2 = document.getElementById('myContainer2');

function onChangeArrowRed() {
    redBtn.style.backgroundColor = "#b3b0aa";
    arrowSymbol3.textContent = '';
    let h1Element = document.createElement('h1');
    h1Element.classList.add('primary-btn');
    containerElement2.appendChild(h1Element);
}

let containerElement3 = document.getElementById('myContainer3');

function onChangeArrowGreen() {
    greenBtn.style.backgroundColor = "#b3b0aa";
    arrowSymbol4.textContent = '';
    let h1Element = document.createElement('h1');
    h1Element.classList.add('primary-btn');
    containerElement3.appendChild(h1Element);
}

let containerEl = document.getElementById('containerElement');
let imgSrc = 'https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png';

function onChangeReset() {
    yellowBtn.style.backgroundColor = 'yellow';
    blueBtn.style.backgroundColor = 'blue';
    redBtn.style.backgroundColor = 'red';
    greenBtn.style.backgroundColor = 'green';
let yellowBtn = document.getElementById("btn1");
let blueBtn = document.getElementById("btn2");
let redBtn = document.getElementById("btn3");
let greenBtn = document.getElementById("btn4");

let arrowSymbol1 = document.getElementById("arrow1");
let arrowSymbol2 = document.getElementById("arrow2");
let arrowSymbol3 = document.getElementById("arrow3");
let arrowSymbol4 = document.getElementById("arrow4");

let containerElement = document.getElementById('myContainer');

function onChangeArrowYellow() {
    yellowBtn.style.backgroundColor = "#b3b0aa";
    arrowSymbol1.textContent = '';
    let h1Element = document.createElement('h1');
    h1Element.classList.remove("btn");
    h1Element.classList.add('primary-btn');
    containerElement.appendChild(h1Element);
}

let containerElement1 = document.getElementById('myContainer1');

function onChangeArrowBlue() {
    blueBtn.style.backgroundColor = "#b3b0aa";
    arrowSymbol2.textContent = '';
    let h1Element = document.createElement('h1');
    h1Element.classList.add('primary-btn');
    containerElement1.appendChild(h1Element);
}

let containerElement2 = document.getElementById('myContainer2');

function onChangeArrowRed() {
    redBtn.style.backgroundColor = "#b3b0aa";
    arrowSymbol3.textContent = '';
    let h1Element = document.createElement('h1');
    h1Element.classList.add('primary-btn');
    containerElement2.appendChild(h1Element);
}

let containerElement3 = document.getElementById('myContainer3');

function onChangeArrowGreen() {
    greenBtn.style.backgroundColor = "#b3b0aa";
    arrowSymbol4.textContent = '';
    let h1Element = document.createElement('h1');
    h1Element.classList.add('primary-btn');
    containerElement3.appendChild(h1Element);
}

let containerEl = document.getElementById('containerElement');
let imgSrc = 'https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png';

function onChangeReset() {
    yellowBtn.style.backgroundColor = 'yellow';
    blueBtn.style.backgroundColor = 'blue';
    redBtn.style.backgroundColor = 'red';
    greenBtn.style.backgroundColor = 'green';

    arrowSymbol1.classList.add("opposite-primary-btn");
    arrowSymbol2.classList.add("opposite-primary-btn");
    arrowSymbol3.classList.add("opposite-primary-btn");
    arrowSymbol4.classList.add("opposite-primary-btn");


    yellowBtn.classList.remove('btn1');
    blueBtn.classList.remove('btn1');
    blueBtn.classList.remove('btn1');
    greenBtn.classList.remove('btn1');
    yellowBtn.classList.add('opposite-btn');
    blueBtn.classList.add('opposite-btn');
    redBtn.classList.add('opposite-btn');
    greenBtn.classList.add('opposite-btn');
}
    arrowSymbol1.classList.add("opposite-primary-btn");
    arrowSymbol2.classList.add("opposite-primary-btn");
    arrowSymbol3.classList.add("opposite-primary-btn");
    arrowSymbol4.classList.add("opposite-primary-btn");


    yellowBtn.classList.remove('btn1');
    blueBtn.classList.remove('btn1');
    blueBtn.classList.remove('btn1');
    greenBtn.classList.remove('btn1');
    yellowBtn.classList.add('opposite-btn');
    blueBtn.classList.add('opposite-btn');
    redBtn.classList.add('opposite-btn');
    greenBtn.classList.add('opposite-btn');
}
