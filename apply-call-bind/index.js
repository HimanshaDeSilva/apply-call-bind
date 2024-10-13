// this keyword- refers to the object that is currently calling or  executing the function.

// apply - call a function with specific this value and arguments provided as an array
// call - call a function with specific this value and arguments provided as a single value
// bind - create a new function using the provided object and some initial arguments

//---The employee should get a bonus in addition to their current salary. (current salary + bonus)
//---calSalaryWithBonus(5000);

// Objects
const employeeOne = {
    name:"Harry",
    salary:50000,
}

const employeeTwo ={
    name: "Victor",
    salary: 40000
}

// --------------------- Apply ---------------------
// calSalaryWithBonus.apply(employeeOne,[5000]); // Object , [array]

// function calSalaryWithBonus (bonus){
//     console.log(`${this.name}'s total salary with bonus: ${this.salary + bonus}`);
// }

// --------------------- Call ---------------------
// calSalaryWithBonus.call(employeeTwo,10000); // Object , single value

function calSalaryWithBonus (bonus){
    console.log(`${this.name}'s total salary is ${this.salary+bonus}`)
}

// --------------------- Bind ---------------------
const employeeThree ={
    name:"Timothy ",
    salary:70000,
}

const res = calSalaryWithBonus.bind(employeeThree);

res(30000);// Timothy 's total salary is 100000

res.call(employeeOne,50000) //Timothy 's total salary is 120000
calSalaryWithBonus.call(employeeOne, 50000); //Harry's total salary is 100000