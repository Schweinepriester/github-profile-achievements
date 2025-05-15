console.log("hello wrld")
console.log("hello to all people out there") //hell yeah
console.log("hello omg")
console.log("hello to all yessssssssssssssssssss out there") //hell yeah

console.group("User Info");
console.log("Name: John Doe");
console.log("Age: 25");
console.groupEnd();

// Timing code execution
console.time("Loop Timer");
for (let i = 0; i < 1000000; i++) {
  // Simulate work
}
console.timeEnd("Loop Timer");

console.count("Button Clicked");
console.count("Button Clicked");
console.count("Button Clicked");

// Assertions
let shouldBeTrue = false;
console.assert(shouldBeTrue, "Assertion failed: shouldBeTrue is false");

const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
console.table(user);
