// typeof in TypeScript is used to get the type of a variable, object, or function.
// It lets you reuse existing types without rewriting them.
const agee = 22;
type AgeType = typeof agee;
// type: number


// typeof with objects
const userzzz = {
  name: "Anakha",
  age: 22,
};
type Userz = typeof userzzz;


// typeof + keyof (very powerful)
const COLORS = {
  primary: "#00f",
  secondary: "#f00",
} as const;
type ColorKeys = keyof typeof COLORS;
// "primary" | "secondary"
