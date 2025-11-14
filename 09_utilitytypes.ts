// Utility types are pre-built types provided by TypeScript to help you:
// ✔ transform existing types
// ✔ modify properties
// ✔ make types optional or required
// ✔ pick or remove fields
// ✔ enforce immutability
// They save time and reduce errors.

// 1️⃣ Partial<T>
// Makes all properties optional.

interface Users {
  name: string;
  age: number;
}
type UpdateUser = Partial<User>;
const users: UpdateUser = {
  name: "Aanya", // age optional
};



// 2️⃣ Required<T>
// Opposite of Partial — makes every property required.
interface Userzz {
  name?: string;
  age?: number;
}
type StrictUser = Required<User>;



// 3️⃣ Readonly<T>
// Makes all properties read-only.
interface Config {
  theme: string;
  version: number;
}
const settings: Readonly<Config> = {
  theme: "dark",
  version: 1,
};
// settings.theme = "light"; // ❌ Error



// 4️⃣ Pick<T, K>
// Pick specific keys from a type.

interface Users {
  id: number;
  name: string;
  email: string;
}
type UserPreview = Pick<User, "id" | "name">;



// 5️⃣ Omit<T, K>
// Opposite of Pick — removes specific keys.
type PublicUser = Omit<User, "email">;



// 6️⃣ Record<K, T>
// Creates an object type with fixed keys and values of a given type.
type Roles = "admin" | "user" | "guest";
const permissions: Record<Roles, boolean> = {
  admin: true,
  user: true,
  guest: false,
};



// Exclude<T, U>
// Removes types from a union.
type Statusz = "loading" | "success" | "error";
type WithoutError = Exclude<Statusz, "error">;
// "loading" | "succes



// 8️⃣ Extract<T, U>
// Opposite of Exclude — extracts types that match.
type StringTypes = Extract<string | number | boolean, string>;
// string



// 9️⃣ ReturnType<T>
// Gets the return type of a function.
function getUser() {
  return { id: 1, name: "Aanya" };
}
type UserType = ReturnType<typeof getUser>;



// 🔟 Parameters<T>
// Gets all parameter types of a function as a tuple.
function sum(a: number, b: number) { return a + b; }
type Args = Parameters<typeof sum>;
// [number, number]



// 1️⃣1️⃣ ReadonlyArray<T>
// Array that cannot be modified.
const nums: ReadonlyArray<number> = [1, 2, 3];
// nums.push(4); // ❌ Error



// 1️⃣2️⃣ NonNullable<T>
// Removes null and undefined.
type Value = string | null | undefined;
type SafeValue = NonNullable<Value>;
// string



// 🎯 Real React Example: Partial + Pick
interface ButtonProps {
  label: string;
  size: "sm" | "md" | "lg";
  onClick: () => void;
}
type OptionalButton = Partial<ButtonProps>;
type ButtonTextOnly = Pick<ButtonProps, "label">;



// 🎯 Real Backend Example: Omit Password
interface Userzz {
  id: number;
  username: string;
  password: string;
}
type SafeUser = Omit<User, "password">;



// 🎯 For Form Validation (React Hook Form)
type LoginForm = Partial<User>;

