// Learnig Function
// Nurmal Function
// Arrow Function

function add(num: number, num2: number) {
  return num + num2;
}

add(2, 5);

const addArrow = (num: number, num2: number): number => {
  return num + num2;
};

const person = {
    name: "MD. HASAN MIA",
    balance: 40,
    addBalance(b: number){
        return this.balance + b
    }
}


const arr: number[] = [10,20,30];

const newArr: number[] = arr.map((ele: number): number => ele * ele);


console.log(newArr)