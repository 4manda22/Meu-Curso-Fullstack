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
    document.title = produtos[indiceProd].nome  
  
    document.getElementById("detalhes").innerHTML = `
        <h1>${produtos[indiceProd].nome}</h1>
        <img src="${produtos[indiceProd].img[0]}" height="350" width="auto">
        <div class="mini-img" id="mini-img">

        </div>
        <p>${produtos[indiceProd].descricao}</p>
        <div class = "grupovalores"> 
          <span class="comDesconto"> ${(produtos[indiceProd].valorComDesconto)}</span>
          <span class="semDesconto"> ${(produtos[indiceProd].valorSemDesconto)}</span>
        </div>
    `
    
    let divMini = document.getElementById("mini-img")
    for(let i of produtos[indiceProd].img){
        divMini.innerHTML += `<img src="${i}" height="80" width="80" style="border: 1px solid #000; border-radius: 5px; ">`
    }
    
}       
procurar()
  




