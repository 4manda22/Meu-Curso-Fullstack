async function busca(){
    let procura = await fetch("lista-produtos.json")
    let produtos = await procura.jason()

    let listaDiv = document.getElementById("lista-card")

    for(let x in produtos){
        listaDiv.innerHTML = `<h1> ${produtos[x].nome} </h1>`

    }
}


busca()