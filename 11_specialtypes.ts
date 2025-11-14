// ypeScript special types:

// ✅ 1. any
// Meaning:
// any disables type checking and should be used only when migrating JS to TS or when exact type is truly unknown.
let value: any = 10;
value = "hello";  // allowed
value = {};       // allowed
value.abc();      // allowed (no error)



// ✅ 2. unknown
// Meaning:
// A safer version of any.
// You can assign anything to unknown, but you cannot use it directly without checking its type first.

let value: unknown = "hello";
value.toUpperCase();  // ❌ Error
// Needs narrowing:
if (typeof value === "string") {
  value.toUpperCase();  // ✅ OK
}



// ✅ 3. never
// Meaning:
// A type that can never happen.
// Used when:
// 🔹 A function never returns (crashes or infinite loop)
function error(msg: string): never {
  throw new Error(msg);
}
// 🔹 Exhaustiveness checking
type Status = "loading" | "success";
function check(s: Status) {
  if (s === "loading") return;
  if (s === "success") return;
  const impossible: never = s; // ensures all cases are handled
}


// ✅ 4. void
// Meaning:
// A function that does not return any useful value.

function log(message: string): void {
  console.log(message);
}
// This allows:
return undefined; // OK
// return null;      // ❌ Not allowed unless strict mode off



// 5. null
// Represents the intentional absence of a value.

let data: string | null = null;
data = "text";   // OK


