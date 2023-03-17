const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        // console.log(response)
        response.data.slice(0, 10).forEach((post) => console.log(post.id + ' : ' + post.title))
    })