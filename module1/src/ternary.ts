{
    console.clear();
// ternary operator || optional chaining

const age: number = 18;

// if (age >= 18) {
//     console.log("Adult")
// }else{
//     console.log("not adult")
// }

const result = age >= 18 ? "Adult" : "Not Adult";

// console.log(result)

type TAddress = {
    village: string;
    post: string;
    postCode: number;
    upazila: string;
    city: string;
  };
  
  type TPerson = {
    name: string;
    age: string;
    email: string;
    address: {
      permanent?: TAddress;
      present: TAddress;
    };
  };
  
const person: TPerson = {
    name: "MD. HASAN MIA",
    age: "05/04/2004",
    email: "hasanmiaweb@gmail.com",
    address: {
        present: {
            city: "Natore",
            post: "Purulia",
            postCode: 6400,
            upazila: "Gurudaspur",
            village: "Purulia"
        }
    }
} 


console.log(person?.address?.permanent ?? "Not Applicable")







// 
}