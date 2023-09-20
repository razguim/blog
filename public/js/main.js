const deleteBtn = document.getElementById('delete-btn')
const confimation = () =>{
    confirm("Etes vous sure de suprimer ce article")
}
if (typeof deleteBtn != 'null'){
    deleteBtn.addEventListener ('click',confimation)
}
