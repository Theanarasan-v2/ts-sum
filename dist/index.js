"use strict";
class Adder {
    constructor() {
        this.add = (b) => this.setNextValue(b + b);
        this.inc = (b) => this.setNextValue(b + 1);
        this.dec = (b) => this.setNextValue(b - 1);
        this.mul = (b) => this.setNextValue(b * b);
        this.setNextValue = (nextValue) => {
            var e1 = document.getElementById("userInput");
            return (e1.value = nextValue);
        };
    }
}
class Child extends Adder {
    callAdd(b) {
        return this.add(b);
    }
    callInc(b) {
        return this.inc(b);
    }
    callDec(b) {
        return this.dec(b);
    }
    callMul(b) {
        return this.mul(b);
    }
}
// Demo to show it works
const child = new Child();
var buttonArray = document.getElementsByClassName("mainButton");
for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", myFunction1);
}
function myFunction1(event) {
    if (event.target.id == "addition") {
        var num = parseInt(document.getElementById("userInput").value);
        child.callAdd(num);
    }
    if (event.target.id == "increament") {
        var num = parseInt(document.getElementById("userInput").value);
        child.callInc(num);
    }
    if (event.target.id == "decreament") {
        var num = parseInt(document.getElementById("userInput").value);
        child.callDec(num);
    }
    if (event.target.id == "multiplication") {
        var num = parseInt(document.getElementById("userInput").value);
        child.callMul(num);
    }
}
//# sourceMappingURL=index.js.map