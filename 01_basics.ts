// Infer Types

// Type inference (or implicit typing) means that TypeScript automatically determines the type of a variable, parameter, or return value — even if you don’t explicitly write it.

// let Uname = "Anakha";     // TypeScript infers: name is a string
// Uname = 123;             // ❌ Error — number not assignable to string


// Explicit Typing
let Username: string = "Anakha";
let age: number = 22;
let isOnline: boolean = true;
let skillss: string[] = ["JS","Python"]
let num: number[] = [1,2,3,4]
let emptyArray: [] = []
let userDetailss: {name: string; age: number} = {
    name: "anakha",
    age: 20
}


// interfaces
// Interfaces define the shape of an object.

interface user{
    name: string;
    age: number;
}
let userDetail: user = {
    name: "anakha",
    age: 20
}


//Type
type users = {
    name: string;
    age: number;
}
let userDetails: users = {
    name: "anakha",
    age: 20
}


//union operator

let skillsss: (number | string)[] = ["JS","Python",10,20,30];
