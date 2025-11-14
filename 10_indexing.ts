// Indexing in TypeScript allows you to extract the type of a property using the syntax T[K], where T is a type and K is a key. It helps create flexible, reusable types without repeating structure.
// Example:
// type Name = User["name"];

// Basic Example
interface User {
  name: string;
  age: number;
}
type NameType = User["name"];   // string
type AgeType = User["age"];     // number



// 1️⃣ Indexing with keyof (MOST IMPORTANT COMBO)
type UserKeys = keyof User; 
// "name" | "age"
type UserValue = User[UserKeys];
// string | number



// 2️⃣ Indexing an array type
const roles = ["admin", "user", "guest"] as const;
type Role = typeof roles[number];
// "admin" | "user" | "guest"



// 3️⃣ Indexing inside nested types
interface Product {
  id: number;
  info: {
    title: string;
    price: number;
  };
}
type ProductTitle = Product["info"]["title"];
// string



// 4️⃣ Indexing Function Return Types
function getUser() {
  return { id: 1, name: "Anakha", active: true };
}
type User = ReturnType<typeof getUser>;
type ActiveType = User["active"];
// boolean



// 5️⃣ React Example — Extracting prop types
const defaultProps = {
  variant: "primary",
  size: "md",
} as const;
type SizeType = typeof defaultProps["size"];
// "md"



// 6️⃣ Dynamic function arguments
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Aanya", age: 21 };
getValue(user, "name");  // returns string
getValue(user, "age");   // returns number









