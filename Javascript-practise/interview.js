//execution context

// var n = 2;

// function square(num){
//     var res = num*num;
//     console.log(res)
// }

// var square2 = square(n);
// var square4 = square(6);
// ------------------------------
// var x = 10;
// function foo() {
//   console.log(x);
//   var x = 20;
// }
// foo();

//output: undefined
// -----------------------------------------------------
// var x = 1;
// function a() {
//   console.log(x);
// }
// function b() {
//   var x = 2;
//   a();
// }
// b();
//output : 1


// -----------------------------------------------------




// function test() {
//     console.log(a);
//     console.log(b);
//     var a = 10;
//     let b = 20;
//   }
//   test();
  //output for var it's hoisted, for b its reference eror since using let and it willbe in temporal dead zone until b is initialized




//question: describe how call stack works?
//   function outer() {
//     function inner() {
//       console.log("Inner");
//     }
//     inner();
//   }
//   outer();

//Answer: 









// var a = 10;
// function example() {
//   console.log(a);
//   if (true) {
//     var a = 20;
//     console.log(a);
//   }
// }
// example();




// var num = 1;
// function first() {
//   var num = 2;
//   second();
// }
// function second() {
//   console.log(num);
// }
// first();



// var a = 10;

// function example() {
//   console.log(a);
//   if (true) {
//     var a = 20;
//     console.log(a);
//   }
// }

// example();



// function test() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }
// test();

// var x = 10;
// function foo() {
//   console.log("x inside:", x);
//   var x = 20;
//   console.log("x inside after assign:", x);
// }
// foo();
// console.log("x outside:", x);


// sayHello(); // ?
// sayHi();    // ?

// function sayHello() {
//   console.log("Hello");
// }

// var sayHi = function() {
//   console.log("Hi");
// };







// function outer() {
//   var a = 5;
//   function inner() {
//     var b = 10;
//     console.log(a + b);
//   }
//   inner();
// }
// outer();


// var num = 1;
// function first() {
//   var num = 2;
//   second();
// }
// function second() {
//   console.log(num);
// }
// first();




// function one() {
//   console.log("1");
//   two();
//   console.log("1 end");
// }
// function two() {
//   console.log("2");
//   three();
// }
// function three() {
//   console.log("3");
// }
// one();



// var a = 10;
// let b = 20;
// console.log(window.a);
// console.log(window.b);








// function outer() {
//   inner();
//   function inner() {
//     console.log("Inner executed");
//   }
// }
// outer();




// function show() {
//   console.log(a);
//   let a = 10;
// }
// show();



// var foo = 10;
// function foo() {}
// console.log(typeof foo);


// if (true) {
//   function sayHi() 
//   { console.log("Hi"); }
// }
// sayHi();
//In ES6+, block-scoped function declarations are allowed,
//but behavior varies between browsers.



// function first() {
//   console.log("A");
//   return second();
// }
// function second() {
//   console.log("B");
// }
// first();
// console.log("C");


// function countdown(n) {
//   if (n === 0) return;
//   console.log(n);
//   countdown(n - 1);
// }
// countdown(3);

// map/reduce/filter interview like questions
// Given an array of integers, return a new array where each number is increased by 10



//call bind and apply

// let name = {
//   name: "raj",
//   place: "dehradun",
// }

// let name2 = {
//   name: "vaish",
//   place: "hyderabad",
// }
// let identity = function freak (){
//   console.log(this.name+" "+"lives in"+ this.place )

// }


// identity.call(name2);

//another example for call method

// let objname ={
//   name:"tony",
// }

// let printname ={
//   name:"Steve",
//   sayHi: function(age,birthplace){
//     console.log(this.name+ "'s age is"+" "+age+" "+"and born in"+" "+ birthplace);
//   }
// }

// printname.sayHi.call(objname,67);
// printname.sayHi.apply(objname,[23,"london"]);


//bind
// let newfun = printname.sayHi.bind(objname,"34","london");
// console.log(newfun);
// newfun();




//pollyfill

let name ={
  firstname: "pooja",
  lastname: "biradar",
}


let printName = function(hometown,state,country){
  console.log("Hi it's "+" "+ this.firstname + " "+this.lastname+" "+"from"+ " "+hometown+", "+ state +  ", " +country );
}


let printMyname = printName.bind(name);
// printMyname();

// -----using pollyfill

Function.prototype.mybind = function(...args){
  let oj = this;
  params= args.slice(1);
  // console.log(...args); 
  return function(...args2){ 
    oj.apply(args[0],[...params,...args2]);

  }

}

let printMynamebind = printName.mybind(name,"dilsukhnagar","Hyderabad");
printMynamebind("India"); //if we pass argument while  calling needto pass in the return function as binding creates new function line no 318