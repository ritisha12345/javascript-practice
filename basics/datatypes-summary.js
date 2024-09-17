//javascript is dynamically typed language
// Primitive datatype
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined // let userEmmail; can also be written like this

const id = Symbol('123')
const anotherID = Symbol('123')
//console.log(id === anotherID);
const bigNumber = 3456772222975 // bigint

//Refernce type(Non Primiitve)
//Arrays, Objects, Functions

const heros = ['shaktiman','nagarj','doga']
let myobj = {
    name: 'ritu',
    age: 19,
}

const myfunction = function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber);
