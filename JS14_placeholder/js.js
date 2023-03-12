// async function printAllPosts() {
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data = await res.json()
//     document.body.innerHTML = data.map(item => item.title).join('<br>')
// }
//
// printAllPosts()
// document.body.innerHTML = 'Загрузка…'
// ------

const getDataByServer = (url) => {
    return fetch(`https://jsonplaceholder.typicode.com/${url}`).then(res => res.json());
};
async function getAllData(id){

    const [postsPromise, commentsPromise] = await Promise.all([
        getDataByServer(`posts/${id}`),
        getDataByServer(`posts/${id}/comments`)
    ])

    console.log(postsPromise);
    console.log(commentsPromise);
}
getAllData(1)