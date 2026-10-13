// Task 6: let and const
let studentName = "Amit";
const collegeName = "KIET";

console.log("Before:", studentName, collegeName);

// let variable change ho jata hai
studentName = "Rohan";
console.log("let changed:", studentName);

// const variable change karne par error aata hai
try {
  collegeName = "ABES";
} catch (error) {
  console.log("const error:", error.message); // Assignment to constant variable.
}

console.log("After:", studentName, collegeName);

/*
Observation:
- let: value easily change ho jati hai (reassign allowed).
- const: value change karne par TypeError aata hai
  ("Assignment to constant variable."), value same rehti hai.
*/
