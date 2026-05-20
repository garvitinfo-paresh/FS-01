// 11/05/26
// console.log("Hello");

// 12/05/26
// console.log("1. Hello");
// console.log("2. Hello");
// console.log("3. Hello");
// console.log("4. Hello");
// console.log("5. Hello");

// console.log(1 + 3)
// console.log(10 / 3) //
// console.log(10 / 2) //
// console.log(10 % 3) //
// console.log(0.10 + 0.3) //
// console.log(0.1 + 0.3) //
// console.log(0.1 + 0.3) //

// console.log(typeof (10 / 3)) //
// console.log(typeof (10 / 2)) //
// console.log(typeof ('hello')) //
// console.log(typeof (true)) //
// console.log(typeof (true)) //

// Boolean

// true=1 false=0

// console.log(typeof (false * 15))
// console.log(typeof (false * 15))
// console.log(typeof (true * 15))
// console.log((true * 15))

// console.log(true + true)
// console.log((true + true + true) * false)
// 'hello' -> string
// console.log(typeof ('true'))
// console.log(typeof ('1'))
// console.log('10' * '20')
// console.log('100' / '20')
// console.log('100' - '20')
// console.log(typeof ('10' + '20'))

// console.log('10' + 10)
// console.log(+'10' + 10)
// console.log(10 + '10')
// console.log(10 + +'10')
// console.log(10 - '10')
// console.log(10 * '10') //100

//  NaN = Not a Number
// console.log(10 * 'ten')//NaN
// console.log(10 + 'ten')//10ten
// console.log(10 - 'ten')//NaN
// console.log(10 / 'ten')//NaN

// console.log(typeof (10 / 'ten')) //NaN
// console.log(typeof (NaN))


// For declaring variable there is 3 keywords
// var(default) let const
// int x;
// x = 10
// var x = true

// console.log(typeof (x), '-', x)

// String declaration
// using singlequote  ' '
// using doublequote  " "
// using bacltick  ` `
//          introduced es6 - template literal - multiple line / paragraph
//

// var strSQ = 'Lorem ipsum, dolor sit amet     consectetur adipisicing elit.                    Tempore est, omnis, possimus incidunt repellendus aperiam odit maxime iure accusamus ducimus ex.'

// var strDQ = "Lorem ipsum, dolor sit amet     consectetur adipisicing elit.                    Tempore est, omnis, possimus incidunt repellendus aperiam odit maxime iure accusamus ducimus ex."

// var strBT = `Lorem
// ipsum, dolor sit amet     consectetur adipisicing elit.
//                     Tempore est, omnis, possimus incidunt repellendus aperiam odit
//              maxime iure accusamus ducimus ex.`

// console.log(strDQ)
// console.log(strSQ)
// console.log(strBT)


// 13/05/26

// ``

// var str1 = " let's "
// var str2 = ' let"s '

// console.log(str1, "-", str2)


// Data types in JS

// console.log(typeof ("Hello")) //string
// console.log(typeof 100)      //number
// console.log(typeof true)    //boolean

// var x;
// console.log(typeof x) //undefined

// console.log(typeof []) //object
// console.log(typeof {}) //object
// console.log(typeof (() => { })) //function
// console.log(typeof (function () { })) //function

// console.log(typeof null) //object

// console.log(typeof (10 / 'ten')) //NaN - number

// console.log(typeof 999)  //number
// console.log(typeof 999n) //bigint

// var myInt = 989898989898998989898965686568956598659989898989898989989898989656865689565986599898989898989899898989896568656895659865998989898989898998989898965686568956598659989898989898989989898989656865689565986599898989898989899898989896568656895659865998989898989898998989898965686568956598659989898989898989989898989656865689565986599898989898989899898989896568656895659865998989898989898998989898965686568956598659989898989898989989898989656n;


// var myInt = 1;

// console.log(typeof myInt)


// console.log(typeof Symbol(myInt)) //symbol


// ---

// var

// var x = 10;
// {
//     var x = 20;
//     console.log(x)
// }
// console.log(x)

// let x = 10;
// {
//     let x = 20;
//     console.log(x)
// }
// console.log(x)

// var x = 10;
// var x = 20;
// console.log(x)

// let x = 10;
// let x = 20; // Identifier 'x' has already been declared
// console.log(x)

// hoisting

// console.log(x); //undefined
// var x;
// x = 10;

// console.log(x); // Cannot access 'x' before initialization
// let x;
// x = 10;


// let x = 10;
// console.log(x)
// x = 20;
// console.log(x)

// const x = 10;
// console.log(x)
// x = 20; //Assignment to constant variable.
// console.log(x)

// const x;
// console.log(x) // Missing initializer in const declaration

// -------------

// ==  compare value only
// ===  compare value and Data type

// let x = 10;
// let y = '10';

// console.log(x == y)
// console.log(x === y)

// -------------
//  14/05/26
// -------------
// https://ecma-international.org/publications-and-standards/standards/ecma-262/
/*
This Standard defines the ECMAScript 2025 general-purpose programming language.

            var                                             let

    var keword introduced in "ES1"                let keyword introduced in "ES6"

    var keyword allows the duplicate              let keyword wont allows the duplicate
    variables                                     variables

    variable hoisting issue raised                we can overcome variable hoisting
    with var keywors                              with let keyword

    scope rule break by var keyword               let keyword obeys the scope rule

    global polluting issue raised                 we can overcome global polluting issue
    because of var keyword                        by using let keyword

*/

// == ===
// NaN     null     undefined

// console.log(10 * 'xsxs');
// console.log(100 * 'fdfdf');

// console.log(NaN == NaN)
// console.log(NaN === NaN)

// console.log(null == null)
// console.log(null === null)
// q
// console.log(undefined == undefined)
// console.log(undefined === undefined)

// -------------
//  15/05/26
// -------------

// console.log(NaN == undefined)
// console.log(NaN === undefined)

// console.log(NaN == null)
// console.log(NaN === null)

// console.log(undefined == null)
// console.log(undefined === null)


// array - object

//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// []
// let arr = []
// console.log(typeof arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arr = [1, 2, 'three', 4.0, "FIVE", 6, 7, 8, 9, '10', true]
// console.log(arr)

// console.log(typeof arr[4])
// length - The length data property of an Array instance represents the number of slots in that array.

// console.log(arr[4])
// console.log(arr[9])
// console.log(arr[15])

// arr[15] = 16;
// console.log(arr)
// arr[12] = undefined
// console.log(arr[12])
// console.log(arr.length)

// arr[3.1] = "x"
// arr['key'] = "value"
// console.log(arr)
// console.log(arr['3.1'])
// console.log(arr[3.1])
// console.log(arr['key'])
// console.log(arr.length)

// console.log(arr.length)  //0 -10


// arr['90'] = "Ninty";                // index
// arr[900] = "Nine Hundred";          // index
// // arr[2.2] = "twelve";             // key - value
// console.log(arr)
// console.log(arr.length)

// console.log(arr['3']);

// ----------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arr.length)
// arr[-3] = -3
// console.log(arr)
// console.log(arr.length)

// let a = []
// a[100] = 100
// console.log(a)
// console.log(a.length)


// let a = []
// let b;

// console.log(typeof a);
// console.log(typeof b);
// console.log([] == undefined);
// console.log([] == undefined);

// console.log(undefined == null)

// -------------
//  18/05/26
// -------------


// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
// All values are truthy unless they are defined as falsy.

// console.log(111 == true)

// if (111)
//     console.log("true")

// if (true)
// if (false)
// console.log("TRUE")

// if ({})
// console.log("TRUE")
// if ([]);
// console.log("TRUE")
// if (42);

// console.log(0 == false)
// console.log('0' == false)

// if(expression)

// if ('0') // ' 0'
//     console.log("0 TRUE")


// if (-42);
// if (12n);
// if (3.14);
// if (-3.14);
// if (Infinity);
// if (-Infinity);


//  &&

// console.log(false && 1 && "dog")
// console.log(1 && false && "dog")
// console.log(1 && true && "dog")

// console.log([] && "dog")

//inbuilt Array Function
//----------------------

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// delete pop - shift
// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
// arr.shift()
// arr.shift()
// let shiftedElement = arr.shift()
// console.log(`Shifted element is ${shiftedElement}`)
// console.log(arr)
// console.log(arr.length)



// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// arr.pop()
// arr.pop()
// let popedElement = arr.pop()
// console.log(`Poped element is ${popedElement}`)
// console.log(arr)
// console.log(arr.length)

// insert push - unshift

// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.


// arr.unshift(100)
// arr.unshift(101)
// arr.unshift(100, 101)

// let arrRet = arr.unshift(100, 101, 102, 103)
// console.log(`array return ${arrRet} `)
// console.log(arr)
// console.log(arr.length)

// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)

// arr.push(100)
// arr.push(101)
// arr.push(100, 101)

// let arrRet = arr.push(100, 101, 102, 103)
// console.log(`array return ${arrRet} `)
// console.log(arr)
// console.log(arr.length)

// -------------
//  19/05/26
// -------------

// deep copy
// shallow copy

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// let arr2 = arr1;

// arr1.push(200)
// arr2.push(100)

// console.log(`arr1 : ${arr1}`)
// console.log(`arr2 : ${arr2}`)

// Shallow copy

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

// Deep copy
// That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

// More formally, two objects o1 and o2 are shallow copies if:

// They are not the same object (o1 !== o2).
// The properties of o1 and o2 have the same names in the same order.
// The values of their properties are equal.
// Their prototype chains are equal.

// splice

// The splice() method of Array instances changes the contents of an array by
// removing or replacing existing elements
//  and/or
// adding new elements in place


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

// Return value
// An array containing the deleted elements.

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// arr1.splice(4)
// arr1.splice(8)
// arr1.splice(3, 2)
// arr1.splice(5, 3)
// let deletedElem = arr1.splice(5, 3, 100)
// let deletedElem = arr1.splice(5, 3, 100, 101, 102, 103)
// arr1.splice(-4)
// arr1.splice(-7, 5)
// arr1.splice(-7, )
// arr1.splice(-1, 5)


// console.log(`Deleted Elements : ${deletedElem}`)
// console.log(arr1)



// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// slice()
// slice(start)
// slice(start, end)
// ++
// let arr2 = arr1.slice(5)
// let arr2 = arr1.slice(2, 6)
// let arr2 = arr1.slice(3, 6)

// let arr2 = arr1.slice(-2)
// let arr2 = arr1.slice(-7)
// -,+
// let arr2 = arr1.slice(-7, 5)
// let arr2 = arr1.slice(-8, 8)
// +,-
// let arr2 = arr1.slice(2, -2)
// let arr2 = arr1.slice(3, -3)
// let arr2 = arr1.slice(5, -8)  []

// let arr2 = arr1.slice(-5, -2)


// console.log(arr1)
// console.log(arr2)

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// let arr2 = arr1;            //shallow Copy
// let arr3 = arr1.slice()     //Deep Copy

// arr1.pop()
// arr2.shift()
// arr3.push(100)

// console.log(`Arr1  :  ${arr1}`)
// console.log(`Arr2  :  ${arr2}`)
// console.log(`Arr3  :  ${arr3}`)

// -------------
//  20/05/26
// -------------

// at()
// concat()
// findIndex()
// findLast()
// findLastIndex()
// flat()
// flatMap()
// indexOf()
// join()
// lastIndexOf()
// reverse()
// toLocaleString()
// toReversed()
// toSorted()
// toSpliced()
// toString()

