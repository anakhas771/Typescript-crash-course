// Generics in TypeScript allow you to create reusable components that work with multiple types while maintaining type safety. They act as type placeholders that get replaced when the function or class is used.
// 1. Avoids using any
// 2. Provides type safety
// 3. Makes code reusable + scalable
// 4. Used heavily in: React (useState, useRef, useReducer), Axios responses, API wrappers, Utility functions, Library development

function getFirst<T>(arr: T[]): T {
  return arr[0];
}
const n = getFirst([10, 20, 30]);  // T = number
const s = getFirst(["a", "b"]);    // T = string


// Generics with Interfaces
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Anakha", age: 21 },
  success: true
};


// Generics with Classes
class Store<T> {
  constructor(public item: T) {}
}
const s1 = new Store<string>("Camera");
const s2 = new Store<number>(100);

