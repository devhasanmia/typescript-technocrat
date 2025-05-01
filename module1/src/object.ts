// Reference Type ---> object

// const user = {
//     firstName: "MD",
//     lastName: "HASAN",
//     middleName: "MIA"
// }

const user: {
    readonly company: "SOLUTION POINT" // Access Modifire
    firstName: string;
    middleName?: string; // Optional Type
    lastName: string;
} = {
    company: "SOLUTION POINT",
    firstName: "MD",
    middleName: "MIA",
    lastName: "HASAN",
}