
// getName(); //it gives error that getName is not a function since we are using arrow functions and in memory
//it saved as undefined since its a variable)
// console.log(x);
// var x= 8;
//  function getName(){
//     console.log("hey welcome to our website");
//  }
// var getName = ()=>{
//    console.log("i'm arrow function");
// }

// getName();
// console.log(x);



//how function works in js

// var y =10;
// a();
// b();
// console.log(y);

// function a(){
//    var y= 17;
//    console.log(y);
// }

// function b(){
//    var y=67;
//    console.log(y);
// }




///window and this (this === window)
// var x = 23;

// function y(){
//    var u =90;
   
// }

// console.log(window.x);
// console.log(this.x);
// console.log(u);


// undefined
// const y = ()=>{
//     console.log("hdhah");
// }
// let u = y();
// console.log(u);




//scopechain

// function a(){
//     var b = 78;
//     function c(){
//         var b = 8888;
//         console.log(b);
//     }
   
// }

// var b = 1044;
// a();









//let and const
// console.log(a);
// console.log(b);
// var a = 10;
// let b = 888;



//shadwoing

// var a =89;
// {
//     var a = 33;
//     let b = 899;
//     const u= 90;
//     console.log(a);
//     console.log(b);
//     console.log(u);
// }
// console.log(a); //here 33 variable is shadowed the global variale a = 89;
//     console.log(b);
//     console.log(u);

    //but in case of let and const inside block the above scenario doesn't take place as let and const are block scoped its
    //allocated in separte space  and it wont get  shadowed by outer variables

