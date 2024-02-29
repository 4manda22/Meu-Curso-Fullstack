async function buscar(){
    let procura = await fetch("listas-produtos.json")
    let produtos = await procura.json()
    
    let buscaParametros = new URLSearchParams(window.location.search)
}

buscar()