// JavaScript 'use strict'
// In JavaScript, 'use strict'; status that the code should be executed in 'strict mode'. This makes it easier to write good and secure to write good and secure JS code.

'use strict';

// {
//     myVariable = 9;
//     console.log(myVariable);
// }

// Here, myVariable is created without declaring. This works As as a global variable in JavaScript. However, if you use this in strict mode , the program will throw an error.


// Strict Mode in variable

// In strict mode, using a variable without declaring it thorw an error.

// {
//     // console.log('some code');

//     // 'use strict' is ignored
//     // "use strict";

//     x = 21;   // does not an error
//     console.log(x);
// }

// Strict Mode in Function
// You can also use strict mode inside function

// {
//     myVariable = 9;
//     console.log(myVariable);  // 9
    
//     function hello(){
//         'use strict';

//         let string = 'hello'
//     }

//     hello();
// 
// }


// If you use 'use strict'; inside a function, the code inside the function will be in strict mode.

// {
//     function hello(){
//         string = 'hello';  // throws an error
//     }

//     hello();

//     // Note : strict mode doesn't apply to block statments with {} braces.
// }



// Things Not Allowed in Strict Mode.
// 1. Underclared variable is not allowed.
// {
//     'use strict';

    // a = 'hello';  // throws an error
// }

