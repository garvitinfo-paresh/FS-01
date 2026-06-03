
// -------------
//  20/05/26
// -------------

// Functions
// - funcions are used to reuse the business logic.

// Types of Functions
// 1) Named Function
// 2) Anonymous
// 3) Rest Parameter in Function
// 4) Defualt Parameter in Function
// 5) Optional Parameter in Function
// Adv.
// 6) Genrators
// 7) Constructor Function
// 8) IIFE (Immidiate Invokable Function Expression)

// Arrow Function

// Function  Defination
// Function  Calling

// 1) Named Function
// - The function with particular name

//Syntax Def
/*
function <func-name> (arg1, arg2, arg3, ...argn )
{
    business logic
    return <>;
}
// call
<func-name>(parm1,pram2,param3,param4,...paramn)


arg & param are not mandatory..
*/

// function myFunc(arg) {
//     return "return from myFunc " + arg;
// }
// console.log(myFunc("Param1"))
// console.log(myFunc("Param2"))
// console.log(myFunc("Param3"))

// function doSum(a, b) {
//     return a + b
// }
// function doSum(a, b) {
//     console.log(a + b)
// }
// doSum(10, 20)
// console.log(doSum(101, 201))
// console.log(doSum(100, 200))

// ----------

// function func_one(arg1, arg2, arg3) {
//     console.log(`${arg1} - ${arg2} - ${arg3}`)
// }
// console.log(func_one) //[Function: func_one]
// func_one("Param1", "one", "Node")
// func_one("Param1", "one")
// func_one("Param1")
// func_one()

// func_one(null)
// func_one(10, 2.3, "hello")

// -------------------


// let doSum = function (a, b) {
//     console.log(a + b)
// }
// // console.log(typeof doSum)

// let doSum = function (a, b) {
//     return a + b
// }
// doSum(10, 20)
// console.log(doSum(10, 20))

// console.log(doSum(100, 200))


// -------------
//  22/05/26
// -------------
// const func_one = function () {
//     console.log(" Func_one Called ")
// }

// function func_two(param) {
//     // console.log(param())
//     param()
// }
// func_two(()=> {
//     console.log(" Func_one Called ")
// })
// func_two(func_one)

// const func_one = function () {
//     console.log(" Func_one Called ")
//     return "ret-from func"
// }
// function func_two(param) {
//     // console.log(param())
//     param()
// }

// func_two(func_one)

// -----------------------------
// function func_one() {
//     console.log(" Func_one Called ")
// }
// function func_two(param) {
//     console.log(param)
//     // param()
// }
// func_two(func_one)

// -----------------------------

// console.log(() => { })
// console.log(function test() {
//     console.log("Hello")
// })

// function func_two(param) {
//     // console.log(`Func_two - Param : ${param}`)
//     console.log('Func_two - Param : ', param)
//     // param()
// }
// // func_two(() => {
// //     console.log(" Func_one Called ")
// // })
// func_two(function test() {
//     console.log("Hello")
// })

// -----------------------------------

// function func_two() {
//     return "ret-func-two"
// }
// function func_one() {
//     return func_two
// }

// console.log(func_one())
// console.log(`${func_one()}`)

// console.log(func_one())
// console.log(`${func_one()}`)

// // call  func2 as func_one return
// console.log(func_one()()) //func_two()
// console.log(`${func_one()()}`)


// -------------
//  25/05/26
// -------------
// Arrow functions are not inherently associated with a name. If the arrow function needs to call itself, use a named function expression instead. You can also assign the arrow function to a variable, allowing you to refer to it through that variable.


// function doSquare(num) {
//     return num * num;
// }
// console.log(doSquare(5))

// let doSquare = (num) => {
//     return num * num;
// }

// let doSquare = num => num * num;

// invalud --
// let doSquare = num =>
//     console.log("inside doSquare fuction..")
// return num * num;

// console.log(doSquare)
// console.log(doSquare(5))

// ---------------

// let doSum = (num1, num2) => num1 + num2;

// console.log(doSum(10, 20))

// -------------------
// let func_one = () => {
//     return "Hello"
// }

// let func = () => { };
// console.log()

// console.log(func_one)
// console.log(`${func_one}`)

// // Traditional anonymous function
// (function (a, b) {
//     const chuck = 42;
//     return a + b + chuck;
// });

// // Arrow function
// (a, b) => {
//     const chuck = 42;
//     return a + b + chuck;
// };

// ---------------------

// let func_one = (param1, param2, param3) => {
//     console.log(param1, " - ", param2, " - ", param3)
// }

// func_one("one", 2, 3.000000000000000000)
// func_one("one", 2,)
// func_one()

// ------------------------------------

// let func_one = () => {
//     return () => "func_one"
// }

// // console.log(func_one)
// let func_two = func_one()

// // console.log(func_one())
// // console.log(`${func_two}`)

// console.log(func_one()())
// console.log(func_two())

// --------------------------------------------

// let func_one = () => {
//     return () => {
//         return () => {
//             return "Hello"
//         }
//     }
// }

// console.log(func_one()()())

// --------------------------------------------

// let func_one = (param1, param2, param3) => {
//     console.log(param1(), " - ", param2(), " - ", param3())
// }

// func_one(
//     () => { return "param1" },
//     () => { return "param2" },
//     () => { return "param3" }
// )

// func_one(
//     () => "param1",
//     () => "param2",
//     () => "param3"
// )

// 03-06-2026

// Default parameter function
// while defining function, will initiate argument with default value

// function fun_one(param1 = "1", param2 = "2", param3 = "3") {
//     console.log(param1, " - ", param2, " - ", param3)
// }

// fun_one()
// fun_one("one")
// fun_one(" ", " two ")
// fun_one(null, " two ")

// rest parameter in function
// pass multiple values in an array form as parameter
// rest parameter represented by ...
// ... spread operator
// can use only one rest param in a functionS
// rest parameter is held at last



// let arr = ["one", "two", "three", "four", "Five"];

// function fun_one(...restParam) {
//     console.log(restParam)
// }
// fun_one("one", "two", "three", "four", "Five");
// fun_one(arr, "six", "seven");
// ----------------

// function fun_one(...param) {
//     console.log(param)
// }

// fun_one("one", "two", "three", "four", "Five")

// ----------------

// function fun_one(param1, ...param2) {
//     console.log(param1, " - ", param2)

// }

// fun_one("one", "two", "three", "four", "Five")
// ----------------
// function fun_one(param1, param2, ...restParam) {
//     console.log(param1, " - ", param2, " - ", restParam)

// }

// fun_one("one", "two", "three", "four", "Five")

// ----------------Rest parameter must be last formal parameter
// function fun_one(...restParam, param1, param2) {
//     console.log(param1, " - ", param2, " - ", restParam)

// }

// fun_one("one", "two", "three", "four", "Five")
// ----------------Rest parameter must be last formal parameter
// function fun_one(param2, ...restParam, ...param1) {
//     console.log(param1, " - ", restParam)

// }

// fun_one("one", "two", "three", "four", "Five")

// IIFE - Immidiate Invokable Function Expression

// ((param1, param2) => {
//     console.log(param1, "-", param2)
// })("one", "two")

// ((param1, param2, param3) => {
//     console.log(param1(), " - ", param2(), " - ", param3)
// })(
//     () => "Hello1",
//     () => "Hello2",
//     "three"
// )