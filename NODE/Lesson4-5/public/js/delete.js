function deleteItem(id){
    console.log("dsfds")
    axios.delete(`/delete/${id}`).then(res => location.reload())
}