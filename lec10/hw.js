// let arr1 = [1, 2, 3, 4, 5]
// arr1.splice(2, 0, 'a', 'b', 'c')
// console.log(arr1)

// let arr1 = [1, 2, 3, 4, 5]
// arr1.splice(1, 0, 'a', 'b')
// arr1.splice(6, 0, 'c')
// arr1.splice(arr1.length , 0, 'e')
// console.log(arr1)

// let n = +prompt()
// let arr = []
// for(let i = 0; i < n; i++){
//     let c = +prompt()
//     arr.push(c)
// }
// console.log(arr)

// let n = +prompt()
// let arr = []
// for(let i = 0; i < n; i++){
//     let c = +prompt()
//     arr.push(c)
// }
// console.log(arr.reverse())

// let n = +prompt()
// let arr = []
// let ans = 0
// for(let i = 0; i < n; i++){
//     let c = +prompt()
//     arr.push(c)
//     ans += c
// }
// console.log(ans)

// let arr = [1, 2, 3, 4, 5, 7, 9]
// let n = +prompt()
// let ans1 = arr.slice(0, n)
// let ans2 = arr.slice(n + 1, arr.length) 
// console.log(ans1.concat(ans2))

// let arr = [2, -5, 1, 5, 8]
// let max = -10000
// for(let i of arr){
//     if(i > max) max = i
// }
// console.log(max)

// let arr = [2, -5, 1, 5, 8]
// let n = 0
// for(let i of arr){
//     n += i
// }
// n = n/arr.length
// for(let i of arr){
//     if(i > n) console.log(i)
// }

// let arr = [2, 3, 1, 7, 8, 9]
// let max = -10000
// let min = 10000
// for(let i of arr){
//     if(i > max) max = i
//     if(i < min) min = i
// }
// let a = arr.indexOf(min)
// let b = arr.indexOf(max)
// if(a < b){
//     for(let i = a; i < b; i++){
//         console.log(arr[i])
//     }
// }else{
//     for(let i = b; i < a; i++){
//         console.log(arr[i])
//     }
// }

// let arr = [2, 4, -10, -1, -8, 6]
// let arr1 = []
// for(let i of arr){
//     if(i > 0) arr1.push(i)
// }
// console.log(arr1)

// let arr = [2, 4, -10, -1, -8, 6]
// let max = -10000
// for(let i of arr){
//     if(i > max) max = i
// }
// console.log(max)
// console.log(arr.indexOf(max))

// let a = 3425
// let i = 0
// let j = 0
// while(a > 1){
//     i += a%10
//     a = parseInt(a/10)
//     j++
// }
// console.log(i/j)