//Named types let you create your own custom types instead of repeating complex structures everywhere.
type Username = string;
let user1: Username = "Anakha";
let user2: Username = "Yuvan";


// object type
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
};
const user: User = {
  name: "Aanya",
  age: 22
};

// Union Type Alias
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
currentStatus = "loading"; // ✅
// currentStatus = "failed";  // ❌ Error


// Function Type Alias
type AddFunction = (a: number, b: number) => number;
const addsss: AddFunction = (a, b) => a + b;

