/**
 * Guess the output
 */

function Candidate(name, age, stream, grad, school) {
  this.name = name;
  this.age = age;
  this.stream = stream;
  this.grad = grad;

  this.display = (p) => {
    console.log(`First name: ${p.name.firstName}`);
    console.log(`Age: ${p.age}`);
    console.log(`Stream: ${p.stream}`);
    console.log(`School: ${p.school.name}`);
    console.log(`Grad: ${p.grad}`);
  };
}

const candidate = new Candidate(
  "Álvaro",
  (new Date().getFullYear() - 1989),
  "IT",
  "B. Tech",
  "IES Polígono Sur",
);

candidate.display(candidate);

// Solution

// Line 12: undefined
// Line 13: 32 at the moment I'm coding this
// Line 14: 'IT'
// Line 15: Error because school is undefined and name can't be accesed
// ⚠️ Line 16: Never happens due to execution break in previous line
