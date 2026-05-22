
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