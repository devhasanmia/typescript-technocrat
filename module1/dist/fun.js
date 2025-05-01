"use strict";
// Learnig Function
// Nurmal Function
// Arrow Function
function add(num, num2) {
    return num + num2;
}
add(2, 5);
const addArrow = (num, num2) => {
    return num + num2;
};
const person = {
    name: "MD. HASAN MIA",
    balance: 40,
    addBalance(b) {
        return this.balance + b;
    }
};
const arr = [10, 20, 30];
const newArr = arr.map((ele) => ele * ele);
console.log(newArr);
