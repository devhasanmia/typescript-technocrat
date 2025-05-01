"use strict";
{
    //  Spread And Rest Operator
    //  Destructuring
    // Frontend
    const frontend = ["HTML CSS, JAVASCRIPT", "REACTJS"];
    // Backend
    const backend = ["Express", "NODEJS", "MONGOOSE"];
    // Full Stack Skill
    const fullStack = [...frontend, ...backend];
    // Person Info
    const person = {
        name: "MD. HASAN MIA",
        age: "05-04-2004",
        address: "Chandrapur"
    };
    const person2 = {
        names: "MD. HRIDAY SONER",
        ages: "04-06-2010",
        addresss: "Purulia"
    };
    // get All Person
    const getAllPerson = Object.assign(Object.assign({}, person), person2);
    console.log(getAllPerson);
}
