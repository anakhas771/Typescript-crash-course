// keyof is an operator that returns the union of all property names (keys) of a given type.
// It basically extracts the keys of an object type.
// ✅ Why is keyof useful?
// It helps you write code that:
// ✔ is type-safe
// ✔ avoids hard-coded strings
// ✔ prevents mistakes with object keys
interface Users {
  name: string;
  age: number;
  isAdmin: boolean;
}
type UserKeys = keyof Users;
// "name" | "age" | "isAdmin"


// Using keyof to access object properties safely
function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}
const userz = { name: "Anakha", age: 22 };
getValue(userz, "name"); // OK
// getValue(userz, "email"); // ❌ Error (email is not a key)
