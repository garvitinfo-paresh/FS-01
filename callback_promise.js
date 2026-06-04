
// sync
// console.log(" I ");

// console.log(" eat ");

// console.log(" Ice Cream ");


//Async
// console.log(" I ");

// setTimeout(() => {
//     console.log(" eat ");

// }, 500)

// console.log(" Ice Cream ");

//callback

// function One() {
//     return "function - One"
// }
// function two(call_one) {
//     console.log(call_one())
// }
// two(One);

// 04-06-2026

// function add(num, callBack) {
//     return callBack(num + 10)  //callback(20)
// }
// add(10, (addRes) => {
//     console.log("addRes : ", addRes)
// })


// function add(num, callBack) {
//     return callBack(num + 10)  //callback(20)
// }
// function sub(num, callBack) {
//     return callBack(num - 2) //callBack(20-2)
// }
// function mul(num, callBack) {
//     return callBack(num * 2) //callBack(20-2)
// }
// function div(num, callBack) {
//     return callBack(num / 9) //callBack(20-2)
// }
// add(10, (addRes) => { //20
//     console.log("addRes : ", addRes)
//     sub(addRes, (subRes) => {
//         console.log("subRes : ", subRes)
//         mul(subRes, (mulRes) => {
//             console.log("mulRes : ", mulRes)
//             div(mulRes, (divRes) => {
//                 console.log("divRes : ", divRes)
//             })
//         })
//     })
// })


// https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// };

// let order = (call_Production) => {
//     console.log("Order placed. Please call production")
//     call_Production()
// }

// let production = () => {
//     console.log("Production has started")
// }

// order(production)

// let order = (fruit_name, call_production) => {
//     setTimeout(function () {
//         console.log(`${stocks.Fruits[fruit_name]} was selected`)
//         call_production();
//     }, 2000)
// };
// let production = () => {
//     setTimeout(() => {
//         console.log("production has started")
//         setTimeout(() => {
//             console.log("The fruit has been chopped")
//             setTimeout(() => {
//                 console.log("Add Water & Ice")
//                 setTimeout(() => {
//                     console.log("Machine Start, BMMMMMMMMMMMMMMM")
//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} as toppings`)
//                             setTimeout(() => {
//                                 console.log("Serve the Ice-Creame")
//                             }, 500)
//                         }, 2000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 500)
// };

// order(0, production);

// This is called callback hell.