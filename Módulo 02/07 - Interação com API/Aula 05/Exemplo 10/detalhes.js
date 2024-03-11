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

    document.getElementById("detalhes").innerHTML = `
        <h1>${produtos[indiceProd].nome}</h1>
        <img src="${produtos[indice].img[0]} "height= "300" width="auto" style
        <p>${produtos[indiceProd].descricao}</p>
        <div class = "grupovalores"> 
          <span class="comDesconto"> ${(produtos[indiceProd].valorComDesconto)}</span>
          <spa class="semDesconto"> ${(produtos[indiceProd].valorSemDesconto)}</span>



    `
}

procurar()