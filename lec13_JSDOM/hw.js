/* 1
function sumOfElements(value){
    let sum = 0
    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    return sum
}

let inp = document.getElementById("inp")

function logSum(inp){
    console.log(sumOfElements(inp.value))
}
*/

/* 2

let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

function changeContent(inp1, inp2){
    let val = inp1.value
    inp1.value = inp2.value
    inp2.value = val
}
*/

/* 3
function chBG(elem){
    elem.style.backgroundColor = 'yellow'
}
*/

// 4
let inp = document.getElementById("inp")
function block(inp){
    inp.disabled = true
}
function unblock(inp){
    inp.disabled = false
}

