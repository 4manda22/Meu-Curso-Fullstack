async function buscar(){
    let buscaParametro = new URLSearchParams(window.location.search)
    let parametroId = buscaParametro.get("id")
    
    let proura = await fetch("listas.json")
    let produtos = await procura.json

    let indice = null
   
        for(let x in produtos)
           if(produtos[x].parametroId){

        }
}
buscar()
