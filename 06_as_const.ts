// as const is a powerful TypeScript feature used to tell the compiler:
// ➡️ Make this value completely immutable
// ➡️ Infer the narrowest possible literal types, not the wider default ones.
// It is like saying:
// “TypeScript, do NOT change this type. Keep it exactly as it is.”


// ❌ Without as const (type is widened)
const statusss = "success";
// type: string

// With as const (literal type)
const statusz = "success" as const;
// type: "success"
