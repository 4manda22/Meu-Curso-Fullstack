async function buscar(arquivo, id){
    let buscado = await fetch(arquivo)
    let convertido = await buscado.text()
    
    document.getElementById(id).textContent = converter

}
paz("pescaria.txt", "teste")
paz("pokemon.txt", "pokemon")


