
const firstName: string = "Carlos";
const lastName: string=  "Stevenson";
const thisYear:number = 1965;
const birthYear: number =  1947;

// The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."

// Add your code right below, good luck!
const fullName: string = `${firstName} ${lastName}`;
const age: number = thisYear - birthYear;
const greeting: string = `"Hello! My name is " + ${fullName} and I am ${age} years old.`

// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
