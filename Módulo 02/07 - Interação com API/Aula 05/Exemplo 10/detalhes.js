async function procurar(){
    let buscar = await fetch("listas.json")
    let produtos = await  buscar.json()

    let parametrosURL = new URLSearchParams(window.location.search)
    let idProduto = parametrosURL.get("AmandaLinda")


    let indiceProd
    for(let x in produtos){
        if(produtos[x].id == idProduto){
            indiceProd = x 

        }
    }

    document.body.innerHTML = `
        <h1>${produtos[indiceProd].nome}</h1>
        <h2>${produtos[indiceProd].descricao}</h2>
        <h3> ${produtos[indiceProd].valorComDesconto}</h3>
        <h3> ${produtos[indiceProd].valorSemDesconto}</h3>



    `
}

procurar()