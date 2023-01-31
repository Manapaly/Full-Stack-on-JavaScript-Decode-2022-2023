//--1
// let n = +prompt()
// let str = ''
// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         str+='*'
//     }
//     str+='\n'
// }
// console.log(str)

//--2
// let n = 5
// let str = ''
// for(let i = 0; i < n; i++){
//     for(let j = 0; j <= i; j++){
//         str+='*'
//     }
//     str+='\n'
// }
// console.log(str)

//--3
// let str
// for(let i = 1; i < 5; i++){
//     str = ''
//     for(let j = 1; j <= i; j++){
//         str += j.toString()
//     }
//     str+='\n'
//     console.log(str)
// }

//--4
// let n = 1001
// while(n<=1025){
//     console.log(n)
//     n += 3
// }

//--5
// let a = +prompt()
// let b = +prompt()
// let sum = 0
// while(a <= b){
//     sum+=a
//     a++
// }
// console.log(sum)

//--6
// for(let i = 500; i <= 1800; i++){
//     if(i % 5 == 0 && i % 7 == 0) console.log(i)
// }

// --7
// for(let i = 1; i <= 50; i++){
//     if(i % 3 == 0 && i % 5 == 0 ){
//         console.log('FizzBuzz')
//         continue
//     }
//     if(i % 3 == 0) console.log('Fizz')
//     else if(i % 5 == 0) console.log('Buzz')
// }

// --8
// let sum1 = 0, sum2 = 1
// for(let i = 10; i <= 20; i++){
//     if(i == 15){
//         continue
//     }
//     if(i % 2 == 0){
//         sum1+=i
//         sum2*=i
//     }
// }
// console.log(sum1, sum2)