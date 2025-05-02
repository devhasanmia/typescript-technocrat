console.clear();

// Type Assertion Example

let anything: any;

anything = "Next Level Web Development";
anything = 5220.000055456;

const kgToGram = (value: string | number): number => {
  if (typeof value === "string") {
    const parsedValue = parseFloat(value);
    return parsedValue * 1000;
  }

  return value * 1000 as number;
};

console.log(kgToGram(0.5));
console.log(kgToGram("2"));    
