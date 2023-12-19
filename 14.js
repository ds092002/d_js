// Javascript setTimeout()

// The setTimeout() method executes a block of code after the specified time. The method exectes teh code only once.

{
    // setTimeout(function, millisecond);

    // function - a function containing a block of code
    // millisecond - the time after which the function is executed
}

// The setTime() method return an IntervalID, which is a positive integer.

// Display a Text Oncr After 3 Second

{
    // Program to Display a Text using setTimeout method
    // function greet(){
    //     console.log('Hello World....');
    // }
    // greet();
    // setTimeout(greet,3000);
    // console.log('This Message is Shown First ');
    // console.log('1 Today to much Rain...');

    // The setTimeout() method calls the greet() function after 3000 millisecond (3 second).

    // let x = setInterval(greet,3000);
    // clearInterval(x);
}

// The setTimeout() method returns the interval id.

{
    // program to display a text using 
    function greet(){
        console.log('Hello World');
    }

    let intervalID = setTimeout(greet, 3000);
    console.log('ID : ' + intervalID);
    clearInterval(intervalID);
    console.log('Clear Interval Function Stop TO setTimeout Function');
}