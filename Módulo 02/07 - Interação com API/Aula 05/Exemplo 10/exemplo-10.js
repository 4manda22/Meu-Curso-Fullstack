async function busca(){
    let procura = await fetch("listas.json")
    let produtos = await procura.json()

    let listaDiv = document.getElementById("lista-card")

    for(let produto of produtos){
        listaDiv.innerHTML += `
            <div class="card" data-id="${produto.id}">
                <img src="${produto.img}" 
                    width="250" height="auto">
                <h3> ${produto.nome} </h3>
                <p> ${produto.descricao} </p>
                <div>
                    <span> R$ ${(produto.valorComDesconto).toFixed(2).replace("." , ",")} </span>
                    <span> R$ ${(produto.valorSemDesconto).toFixed(2).replace("." , ",")} </span>
                </div>
            </div>
        `

    }

    let elementosCards = document.querySelectorAll(".card")
    for(let card of elementosCards){
        card.addEventListener("click", clicou)
    } 
}

busca()

function clicou(){
    let produtoId = this.getAttribute("data-id")
    alert("card" + produtoId)
    
}