// Примеры

// console.log(document.getElementsByClassName('container'))

// console.log(navigator) // we get navigation history here
// console.log(location)
// console.log(history)

// Comment

/**
 * This is our documentation
 */

// while, class, do, let, var, const, function, Object, Function etc.

// var num = undefined 

// console.log(num)
// var num = 9;


// for (var i = 0; i < 6; i++) {}
// console.log(i)

// console.log(num)
// let num = 99

// for (let i = 0; i < 6; i++) {
//     console.log(i)
// }
// console.log(i)

// let num = 10
// console.log(num)
// num = 99
// console.log(num)

// const num1 = 10
// console.log(num1)
// num1 = 99
// console.log(num1)

// console.log(
//     'string', 
//     'number', 
//     'object', 
//     'undefined', 
//     'bigint', 
//     'symbol',
//     'boolean',
//     'null'
// )


// const str = 'hello'
// console.log(typeof str)

// const num = 123
// console.log(typeof num)

// const obj1 = {
//     a: 1
// }
// console.log(typeof obj1)
// console.log(typeof undefined, typeof null)

// const bigNumber = 100n
// const secondNumber = BigInt(10)
// console.log(typeof bigNumber, typeof secondNumber)

// console.log(typeof Symbol('a'), Symbol('a') === Symbol('a'))
// console.log('' === 0)
// console.log('' == false)

// const bool = true
// console.log(bool, typeof bool)

// () * / % + - <<<

// const obj1 = { a: 1, b: 20, c: -10}

// console.log(2 * 5 * 6)
// console.log(21 % 2)
// console.log('b' in obj1)

// for (const key in obj1) {
//     console.log(key)
//   if (obj1[key] === 1) {
//       console.log('exist')
//       break
//   }
// }

// const obj1 = { a: 1, b: 20, c: -10}
// console.log(obj1 instanceof Object)

// const a = 0b1000
// const a = 0x1000
// const a = 0o1000

// const a = 8
// if (a === 10) {
//     console.log('OK')
// } 
// else if(a < 9) {
//     console.log('Something')
// }
// else {
//     console.log('Error')
// }

// const age = 'asd'

// if (typeof age !== 'number') {
//     console.log('Age gonna be number')
// } else if (age >= 18 && age < 100) {
//     console.log('Adult')
// } else {
//     console.log('Kid go away...')
// }

// console.log(a >>> 2)

// const age = 18

// console.log(typeof age !== 'number'
//     ? 'Age gonna be number'
//     : age < 18
//         ? 'Kid'
//         : 'Adult')


// const age = 9

// switch(age >= 18) {
//     case true:
//         console.log('Okay')
//         break
//     case false:
//         console.log('Better')
//         break
//     default:
//         console.log('Default')
// }

// alert("Hello World")
// console.log("123")

// const age = prompt("Please, enter your age: 18")
// const formated = +age
// console.log(formated)

// console.log("Hello World" + 12)
// console.log([1] + 12)

// let counter = 0
// while(counter < 9) {
//     console.log('Hello JavaScript')
//     counter++
// }

// age : for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     break age
// }

// console.log(getName(10, 'John'))

// function getName(age, name) {
//     return name + age
// }


// const getName = function(age, name) {
//     return name + " " + age
// }

// console.log(getName(10, 'John'))

// const getName = (age, name) => {
//     return  name + " " + age
// }

// const getName = (age, name) => name + " " + age

// console.log(getName(10, 'John'))

// Практика

// 1. Нахождение чисел, кратных двум
// for(let i=0;i<10;i++)
// {
//   if(i%2==0) {
//     console.log(i)
//   }
// }

// 2. Среднее арифметическое двух чисел
// let a=+prompt("enter a: ")
// let b=+prompt("enter b: ")
// console.log((a+b)/2)

// 3. Факториал (вариант с помощью цикла)
// let fact = 3;
// let res = 1;
// for (let i = 1; i <= fact; i++) {
//   res *= i;
// }
// console.log(res);

// 4. Найти число Фибоначчи
// let n = 8
// let a = 0, b = 1

// for(let i = 1; i < n; i++){
//   let temp = b
//   b = a+b
//   a = temp

// }
// console.log(a)
// 0 1 1 2 3 5 8 13

// 5. Рекурсивный вариант нахождения факториала
// function fact(num) {
//   if (num < 2) {
//     return num;
//   }
//   return num * fact(num - 1);
// }
// console.log(fact(5))

// 6. Предлагать пользователю решить пример 2 + 2 * 2 до тех
//let пор, пока он не решит его правильно.
// let hasErr = false 
// do
// {
//   let answer = +prompt("Solve 2+2*2")
// if( answer === 6)
// {
//   hasErr = false
// }
// else {
//   hasErr = true
// }
// } while(hasErr)