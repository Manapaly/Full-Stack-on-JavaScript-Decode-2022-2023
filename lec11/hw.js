// let city = {}
// city.name = "Berlin"
// city.location = "Germany"
// city.name = "London"
// console.log(city)


// let users = [
//     {
//         name: 'Kolya',
//         salary: 1000
//     },
//     {
//         name: "Vasya",
//         salary: 500
//     },
//     {
//         name: 'Petya',
//         salary: 200
//     }
// ]
// for(let user of users){
//     console.log(user.name + ":" + user.salary)
// }

// let students = [
//     {
//         name: "dsf",
//         surname: "dsfsd",
//         age: 19
//     },
//     {
//         name: "sfd",
//         surname: "sdf",
//         age: 22
//     },
//     {
//         name: "srtfs",
//         surname: "erwtfsd",
//         age: 12
//     },
//     {
//         name: "dswefsdf",
//         surname: "dssdffsd",
//         age: 11
//     },
//     {
//         name: "sdf",
//         surname: "wsfsd",
//         age: 23
//     },
//     {
//         name: "esdfds",
//         surname: "dds",
//         age: 11
//     },
//     {
//         name: "sdfs",
//         surname: "jhrfhg",
//         age: 12
//     },
//     {
//         name: "yukj",
//         surname: "ert",
//         age: 20
//     },
// ]
// for(let student of students){
//     if(student.age >= 19) console.log(student.name)
// }

// let students = [
//     {
//         name: "dsf",
//         surname: "dsfsd",
//         age: 19,
//         grade: 47
//     },
//     {
//         name: "sfd",
//         surname: "sdf",
//         age: 22,
//         grade: 87
//     },
//     {
//         name: "srtfs",
//         surname: "erwtfsd",
//         age: 12,
//         grade: 19
//     },
//     {
//         name: "dswefsdf",
//         surname: "dssdffsd",
//         age: 11,
//         grade: 97
//     },
//     {
//         name: "sdf",
//         surname: "wsfsd",
//         age: 23,
//         grade: 18
//     },
//     {
//         name: "esdfds",
//         surname: "dds",
//         age: 11,
//         grade: 19
//     },
//     {
//         name: "sdfs",
//         surname: "jhrfhg",
//         age: 12,
//         grade: 100
//     },
//     {
//         name: "yukj",
//         surname: "ert",
//         age: 20,
//         grade: 99
//     },
// ]
// for(let student of students){
//     if(student.grade >= 85 && student.grade <= 100) console.log(student.name)
// }

// let student = {
//     name: "Richard",
//     age: 34,
//     gpa: 3.25
// }
// for(let key in student){
//     console.log(key + " : " + student[key])
// }

// let students = [
// 	{
// 		name: 'Alice',
// 		age: 19,
// 		gpa: 3.5
// 	},
// 	{
// 		name: 'Richard',
// 		age: 22,
// 		gpa: 2.9
// 	},
// 	{
// 		name: 'Sam',
// 		age: 20,
// 		gpa: 3.25
// 	}

// ]
// let ans = 0
// for(let student of students){
//     // if(student.name[0]=='A') console.lof(student)
//     // if(student.gpa > 3) console.lof(student)
//     // if(student.age < 21) console.lof(student)
//     ans += student.gpa
// }
// console.log(ans/students.length)

// let employees = [
// 	{
// 		salary: 190000,
// 		name: 'Alice',
// 		deadline: true
// 	},
// 	{
// 		salary: 90000,
// 		name: 'Richard',
// 		deadline: true
// 	},
// 	{
// 		salary: 240000,
// 		name: 'Sam',
// 		deadline: false
// 	}
// ]
// let max = -1
// let min = 10000000
// for(let e of employees){
//     if(e.salary > max) max = e.salary
//     if(e.salary < min) min = e.salary
//     if(e.salary < 100000) e.salary += 20000
// }
// console.log(max, min)

// let users = [
// 	{
// 		login: 'alice19',
// 		password: 'alice19',
// 		name: ""
// 	},
// 	{
// 		login: 'richard18',
// 		password: 'richard18',
// 		name: 'Richrd'
// 	},
// 	{
// 		login: 'sam22',
// 		password: "",
// 		name: 'Sam'
// 	}
// ]
// for(let u of users){
//     for(let key in u){
//         if(u[key] == ''){
//             users.splice(users.indexOf(u), 1)
//             break
//         }
//     }
// }
// for(let u of users){
//     console.log(u)
// }
