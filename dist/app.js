"use strict";
let availableChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    ";",
    ":",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];
let pW1 = document.getElementById('pW1');
let pW2 = document.getElementById('pW2');
let pW3 = document.getElementById('pW3');
let pW4 = document.getElementById('pW4');
let lengthNum = document.querySelector('.lengthNum');
let randIndex;
let passLength = 12;
function genPass() {
    pW1.value = "";
    pW2.value = "";
    pW3.value = "";
    pW4.value = "";
    genPass1();
    genPass2();
    genPass3();
    genPass4();
}
;
function genPass1() {
    for (let i = 0; i < passLength; i++) {
        let randIndex = Math.floor(Math.random() * availableChars.length);
        pW1.value += availableChars[randIndex];
    }
    ;
}
function genPass2() {
    for (let i = 0; i < passLength; i++) {
        let randIndex = Math.floor(Math.random() * availableChars.length);
        pW2.value += availableChars[randIndex];
    }
    ;
}
function genPass3() {
    for (let i = 0; i < passLength; i++) {
        let randIndex = Math.floor(Math.random() * availableChars.length);
        pW3.value += availableChars[randIndex];
    }
    ;
}
function genPass4() {
    for (let i = 0; i < passLength; i++) {
        let randIndex = Math.floor(Math.random() * availableChars.length);
        pW4.value += availableChars[randIndex];
    }
    ;
}
function plus() {
    if (passLength < 15) {
        passLength++;
    }
    lengthNum.textContent = `${passLength}`;
    return;
}
function minus() {
    if (passLength > 5) {
        passLength--;
    }
    lengthNum.textContent = `${passLength}`;
    return;
}
//# sourceMappingURL=app.js.map