// console.log('ejsbfkj')


let localStorage = [
    {
        title: 'IPhone 14',
        description: 'IPhone 14 128Gb black' ,
        price: '100 000тг' ,
        isInStock: false
    },
    {
        title: 'Сумка',
        description: 'Сумка black' ,
        price: '10 000тг' ,
        isInStock: true
    },
    {
        title: 'Платье',
        description: 'Платье black M',
        price: '23 000' ,
        isInStock: false
    },
    {
        title: 'IPhone 14',
        description: 'IPhone 14 128Gb black' ,
        price: '100 000тг' ,
        isInStock: false
    },
    {
        title: 'Сумка',
        description: 'Сумка black' ,
        price: '10 000тг' ,
        isInStock: true
    },
    {
        title: 'IPhone 14',
        description: 'IPhone 14 128Gb black' ,
        price: '100 000тг' ,
        isInStock: false
    },
    {
        title: 'Сумка',
        description: 'Сумка black' ,
        price: '10 000тг' ,
        isInStock: true
    },
]

let cont = document.querySelector('.store');
console.log(cont)
function draw(){
    for (let i of localStorage){
        let availability = ''
        if(i.isInStock === false){
            availability = 'Нет в наличии'
        }else{
            availability = 'В наличии'
        }
        let card = createItem(i.title, i.description, i.price, availability)
        cont.appendChild(card)
    }
}


function deleteCard(del){
    del.parentNode.remove();
}

draw()