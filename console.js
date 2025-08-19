// console.js

// Basic console outputs
console.log("Hello, World!"); 
console.info("This is an info message.");
console.warn("This is a warning message!");
console.error("This is an error message!");

// Displaying variables
let user = { name: "Aditi", role: "Developer", active: true };
console.log("User object:", user);

// Tabular display
let users = [
  { id: 1, name: "Aditi", role: "Developer" },
  { id: 2, name: "Rahul", role: "Designer" },
  { id: 3, name: "Sneha", role: "Tester" }
];
console.table(users);

// Grouping logs
console.group("Debug Group");
console.log("Step 1: Initialization");
console.log("Step 2: Processing");
console.log("Step 3: Completed");
console.groupEnd();

// Measuring time
console.time("loop");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("loop");
