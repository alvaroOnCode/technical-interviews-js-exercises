/**
 * Guess the output
 */

function Candidate(name, age, stream, grad, school) {
  this.name = name;
  this.age = age;
  this.stream = stream;
  this.grad = grad;

  this.display = (p) => {
    console.log(`First name: ${p.name.firstName}`); // 1️⃣2️⃣
    console.log(`Age: ${p.age}`);                   // 1️⃣3️⃣
    console.log(`Stream: ${p.stream}`);             // 1️⃣4️⃣
    console.log(`School: ${p.school.name}`);        // 1️⃣5️⃣
    console.log(`Grad: ${p.grad}`);                 // 🤔🤔
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

// 1️⃣2️⃣ 👉 undefined
// 1️⃣3️⃣ 👉 32 at the moment I'm coding this
// 1️⃣4️⃣ 👉 'IT'
// 1️⃣5️⃣ 👉 Error because school is undefined and name can't be accesed
// 🤔🤔 👉 Never happens due to execution breaks in previous line
