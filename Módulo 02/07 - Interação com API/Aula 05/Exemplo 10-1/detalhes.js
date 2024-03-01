async function procurar(){
    let buscar = await fetch(listas.json)
    let procurar = await buscar.json()

    let parametrosURL = new URLSearchParams(window.location.search)
    let idProduto = parametrosURL.get("PazeAmor")


    let indiceProd
    for(let x in produtos){
        if(produtos[x].id == idproduto){
            indiceProd = x 
        }
    } 
    
    document.body.innerHTML = `
        <h1>${produtos[indiceProd].nome}</h1>
    `
}

procurar()