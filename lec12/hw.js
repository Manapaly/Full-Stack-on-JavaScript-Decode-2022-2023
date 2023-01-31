// function sumOfArray(a){
//     let ans = 0
//     for(let i of a){
//         ans += i
//     }
//     return ans
// }
// let a = [1, 2, 3, 5 ,7 ,9]
// console.log(sumOfArray(a))

// function countLetter(letter, str){
//     let cnt = 0
//     for(let i of str){
//         if(i == letter) cnt++
//     }
//     return cnt
// }
// console.log(countLetter('a','fvadadda'))

// function func(a){
//     let ans = 0
//     for(let i of a){
//         ans += i
//     }
//     return ans/a.length
// }
// let arr = [1, 2, 3, 5 ,7 ,9]
// console.log(func(arr))

// function maxOfArr(a){
//     let ans = -1000
//     for(let i of a){
//         if(i > ans) ans = i
//     }
//     return ans
// }
// let arr = [1, 2, 3, 5 ,7 ,9]
// console.log(maxOfArr(arr))

// function mINOfArr(a){
//     let ans = 1000
//     for(let i of a){
//         if(i < ans) ans = i
//     }
//     return ans
// }
// let arr = [1, 2, 3, 5 ,7 ,9]
// console.log(mINOfArr(arr))

// function f(a){
//     let ans1 = [], ans2 = []
//     for(let i of a){
//         if(i < 0) ans1.push(i)
//         else ans2.push(i)

//     }
//     return ans1, ans2
// }

// function f(a, n){
//     for(let i = 1; i <= n; i++){
//         a.push(i)
//     }
//     return a
// }

// function longestWord(str){
//     let ans = ''
//     let cur = ''
//     for(let i of str){
//         if(i != ' ') cur += i
//         if(cur.length > ans.length) ans = cur
//         if(i == ' ') cur = ''
//     }
//     return ans
// }
// console.log(longestWord("They arfdgdghgde absolutely unstoppable"))

// function season(n){
//     if(n <= 0 || n > 12) return 'error'
//     else if(i <= 3) return 'зима'
//     else if(i <= 6) return 'весно'
//     else if(i <= 9) return 'лето'
//     else if(i <= 12) return 'осень'
// }

// function byGenre(films, g){
//     let ans = []
//     for(let i of films){
//         if(i.genre == g) ans.push(i)
//     }
//     return ans
// }

// function byYear(films, g){
//     let ans = []
//     for(let i of films){
//         if(i.year == g) ans.push(i)
//     }
//     return ans
// }

// users = [
// 	{
// 		login: "alice19",
// 		password: "alice19",
// 		name: ""
// 	},
// 	{
// 		login: "richard18",
// 		password: "richard18",	
// 		name: "Richard"
// 	},
// 	{
// 		login: "sam22",
// 		password: "",
// 		name: "Sam"
// 	}
// ]

// function changeProperty(user, property, value) {
// 	if(property == "login") user.login = value
//     else if(property == "password") user.password = value
//     else if(property == "name") user.name = value
// }

// function sumOfElements(a){
//     let ans = []
//     for(let value of a){
//         let sum = 0
//         while (value) {
//             sum += value % 10;
//             value = Math.floor(value / 10);
//         }
//         ans.push(sum)
//     }
//     return ans
// }
// console.log(sumOfElements([12,43,123,44,22]))

// function last(value){
//     let ans = []
//     for(let i = 1; i <= 48; i++){
//         if(value % i == 0) ans.push(i)
//     }
//     return ans
// }
// console.log(last(48))