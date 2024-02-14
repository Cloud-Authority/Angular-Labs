class DisplayNumbers {
    num1: number = 1000;
    num2: number = 2000;

    add() {
        let sum = this.num1 + this.num2;
        console.log(`Sum = ${sum}`)
    }
}

let obj: DisplayNumbers = new DisplayNumbers();
obj.add();

let obj2: any = new DisplayNumbers();
obj2 = 1000;