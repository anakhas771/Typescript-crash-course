// Enums (Enumerations) let you define a group of named constant values.
// They make your code more readable and restrict values to a controlled set.
// Types of Enums
        // Numeric Enums
            enum Direction {
            SUCCESS,
            PENDING,
            FAILED
            }
            console.log(Direction.SUCCESS); // 0
            console.log(Direction.PENDING); // 1
            console.log(Direction.FAILED); // 2
           
        // String Enums
             enum UserRole {
                Admin = "ADMIN",
                User = "USER",
                Guest = "GUEST"
                }
            const role: UserRole = UserRole.Admin;

        // There is also:
        // Const Enums (optimized, faster)
            const enum Colors {
                Red,
                Green,
                Blue
                }
            const bg = Colors.Red;
