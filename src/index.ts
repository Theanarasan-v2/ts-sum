class sum {
    constructor() { }

    add = (b: number) => this.setNextValue(b + b);
    inc = (b: number) => this.setNextValue(b + 1);
    dec = (b: number) => this.setNextValue(b - 1);
    mul = (b: number) => this.setNextValue(b * b);

    setNextValue = (nextValue: any) => {
        var e1 = document.getElementById("userInput")! as HTMLInputElement;
        return (e1.value = nextValue);
    };
}
class Child extends sum {
    callAdd(b: number) {
        return this.add(b);
    }

    callInc(b: number) {
        return this.inc(b);
    }
    callDec(b: number) {
        return this.dec(b);
    }
    callMul(b: number) {
        return this.mul(b);
    }
}
// Demo to show it works
const child = new Child();
var buttonArray = document.getElementsByClassName("mainButton");
for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", myFunction1);
}
function myFunction1(event: Event) {
    if ((event.target as Element).id == "addition") {
        var num = parseInt(
            (document.getElementById("userInput") as HTMLInputElement).value
        );
        child.callAdd(num);
    }
    if ((event.target as Element).id == "increament") {
        var num = parseInt(
            (document.getElementById("userInput") as HTMLInputElement).value
        );
        child.callInc(num);
    }
    if ((event.target as Element).id == "decreament") {
        var num = parseInt(
            (document.getElementById("userInput") as HTMLInputElement).value
        );
        child.callDec(num);
    }
    if ((event.target as Element).id == "multiplication") {
        var num = parseInt(
            (document.getElementById("userInput") as HTMLInputElement).value
        );
        child.callMul(num);
    }
}
