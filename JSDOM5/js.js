function createAppTitle(title){
    let appTitle = document.createElement('h2')
    appTitle.innerHTML=title
    return appTitle
}
function createToDoItem(){
    let form =document.createElement('form')
    let input = document.createElement('input')
    let buttonWrapper = document.createElement('div')
    let button = document.createElement('button')

    form.classList.add('input-group','mb-3')
    input.classList.add('form-control')
    input.placeholder="Введите название задачи"
    buttonWrapper.classList.add('input-group-append')
    button.classList.add('btn','btn-primary')
    button.innerHTML='Добавить'

    buttonWrapper.append(button)
    form.append(input)
    form.append(buttonWrapper)

    return{
        form, input,button
    }


}

function createToDoList(){
    let list = document.createElement('ul')
    list.classList.add('list-group')
    return list
}

const div = document.getElementById("todo-app")

function showData(arr){
    let html = ''
    for(let item of arr){
        html += `
        <div>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        </div>
        `
    }
    div.innerHTML = html
}


function getTodosRequest() {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    })
        .then((res) => res.json())
        .then(json => {
            console.log(json)
            // showData(json)
            return json
        })
}
getTodosRequest()
// function deletePost(){
//     return fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method:"DELETE"
//     })
//         .then((res)=>{
//             res.json()
//         })
//         .then(json =>{
//             // showData(json)
//             // console.log(json);
//         })
// }
//
// deletePost()

getTodosRequest()
function draw(){
    let container = document.getElementById('todo-app')
    let title = createAppTitle('Список задач')
    let toDoItem=createToDoItem()
    let toDoList=createToDoList()
    container.append(title)
    container.append(toDoItem.form)
    container.append(toDoList)

    toDoItem.form.addEventListener('submit',function(e)
    {
        e.preventDefault()
        if(!toDoItem.input.value)
        {
            return;
        }
        let task = createToDoListItem(toDoItem.input.value)

        task.doneButton.addEventListener('click',function()
        {
            task.item.classList.toggle('list-group-item-success')

        })
        task.deleteButton.addEventListener('click',function()
        {
            if(confirm('Вы уверены?'))
            {
                task.item.remove()
            }
        })

        toDoList.append(task.item)
        toDoItem.input.value=""
    })
}


function createToDoListItem(name)
{
    let item = document.createElement('li')
    let buttonGroup = document.createElement('div')
    let doneButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    item.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    item.textContent=name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm')
    doneButton.classList.add('btn','btn-success')
    doneButton.textContent='Done'
    deleteButton.classList.add('btn','btn-danger')
    deleteButton.textContent="'Delete"
    doneButton.style.marginRight = '20px'
    buttonGroup.append(doneButton)
    buttonGroup.append(deleteButton)
    item.append(buttonGroup)


    return{
        item,doneButton,deleteButton
    }
}
draw()