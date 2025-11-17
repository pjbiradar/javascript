
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




    // closures examples

    // function a (){
    //     let x = 444;
    //     function b(){
    //         console.log(x);
    //     }
    //     b();
    // }
    // a();


    // function a (){
    //     let x = 444;
    //     function b(){               //we can write like this also return function b()
    //         console.log(x);
    //     }
    //     x =89;             //at the end x will print x value 89 not 444 because in memory its pointed to 'x'
    //     return b;
    // }
    // var y = a();
    // // console.log(y);
    // ////after n no of codes when we call y variable it will print value of x;
    // y();


    // corner cases in closure

//     function z(){
//         var b = 67;
//         function x (){
//             var a = 777;
//             function y (){
//                 console.log(a, b);
//             }
//             y();
//         }
//         x();
//     }

// z();


//settimeout examples and closure used here

// function x(){
//     var i =29;
//     setTimeout(()=>{
//         console.log(i);
//     },2000);
//     console.log("hey i will prnint first in console not settimeout console as its takes time after the time it will log")
// }
// x();
//check notes for more info












//difference between function statement and function expression is hoisting
// a(); //outpur hehehe
// b(); //output typeerror b function is not defined
// function a(){
//   console.log("hehehe");
// }

// var b = ()=>{
//   console.log("lalaala");
// }












//event listeners

// function EventListener(){
//     let count = 0;
//     document.getElementById("clickme").addEventListener("click", function xyz(){
//         console.log("count", count++);
//     })
// }
// EventListener();


//higher order function

// let radius = [1,2,3,4];
// const area = (radius)=>{
//     return Math.PI*radius*radius;

// }
// const circumference =(radius)=>{
//     return 2*Math.PI*radius;

// }
// const calculate =(radius, logic)=>{
//     let arr= [];
//     for(let i=0; i<radius.length; i++){
//        arr.push(logic(radius[i]));
//     //    console.log(arr);


//     }
//     return arr;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference))



//object.create

// const obj1 = {
//     name: "johm",
//     age: '33',
//     greet: function(){
//         console.log("hello,i'm "+this.name)

//     }
// }


// const obj2 = Object.create(obj1);
// obj2.name = "lexy";
// obj2.greet();



//constructor funcion: before es6 constructor fucntion is used to create many similar objects

// function Person(name,age){
//     this.name = name;
//     this.age = age;

// }

// const obj1 = new Person('pooja','33');
// const obj2 = new Person('neha','55');
// console.log(obj1);
// console.log(obj2.name);


//Prototype
// function Person(name){
//     this.name= name;
// }

// // console.log(Person.prototype);

// Person.prototype.greet =function(){
//     console.log("him "+this.name);
// }

// const p1 = new Person("lia");
// const p2 = new Person("ami");
// p1.greet();
// p2.greet();


// tep 1: What happens when you write function Person(name){...}

// You just created a constructor function.
// When you later call it using new, it behaves like a blueprint for creating new objects.

// ⚙️ Step 2: What happens when you call new Person("lia")

// When you use the new keyword, four things happen automatically in JavaScript:

// A new empty object is created: {}

// The prototype of that new object is set to Person.prototype.

// Inside the function, this refers to that new object.

// The new object is returned automatically.

// So after this line:

// const p1 = new Person("lia");


// 👉 JS internally does this:

// const p1 = {};                    // step 1
// p1.__proto__ = Person.prototype;  // step 2 (sets prototype link)
// Person.call(p1, "lia");           // step 3 (assigns name = "lia")


// Now:

// p1 = { name: "lia" }


// and it’s connected to Person.prototype.

// 🧩 Step 3: Adding methods to the prototype

// When you do:

// Person.prototype.greet = function() {
//     console.log("hi " + this.name);
// }


// You’re not putting greet inside every object.
// You’re putting it once inside Person.prototype,
// and all Person objects can use it through the prototype chain.

// ✅ So:

// p1 doesn’t have greet() directly.

// But p1.__proto__ → points to Person.prototype

// JS looks there and finds greet().

// So p1.greet() works!

// Let’s verify that:
// console.log(p1.__proto__ === Person.prototype); // true
// console.log(p2.__proto__ === Person.prototype); // true








// function Person(name){
//     this.name= name;
// }

// // console.log(Person.prototype);

// Person.prototype.greet =function(){
//     console.log("him "+this.name);
// }

// const p1 = new Person("lia");
// const p2 = new Person("ami");
// p1.greet();
// p2.greet();




//mapping

const user=[
    {firstname: "lewis",lastname:"hamilton", age:'40'},
    {firstname: "max",lastname:"verstappen", age:'29'},
    {firstname: "charles",lastname:"leclre", age:'29'},
    {firstname: "kimi",lastname:"hamilton", age:'19'},
]

// const list = user.map((item)=>
//     item.firstname +" "+ item.lastname
// )
// console.log(list);

// const agelist = user.reduce((acc,curr)=>{
//     console.log(acc);
//     if(acc[curr.age]){
//         acc[curr.age] = acc[curr.age] + 1
      

//     }
//     else{
//         acc[curr.age] = 1
//     }
//     return acc;

// },{})
// console.log(agelist);


// const fistnameage = user.filter(x=>x.age<30).map(x=>x.firstname);
// console.log(fistnameage);

// const redage = user.reduce((acc,cur)=>{
//     if(cur.age < 30){
//         acc.push(cur.firstname) ;
//     }
 
//     return acc;

// },[])
// console.log(redage);