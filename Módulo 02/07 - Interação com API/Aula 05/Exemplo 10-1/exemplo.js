async function buscar(){
    let procura = await fetch("listas.json")
    let produtos = await procura.json()

    let listaDiv = document.getElementById("lista.card")

    for(let produto of produtos)
        listaDiv.innerHTML += `
            <div class= "card" data id="${produto.id}">
                <div class="grupo-img">
                    img src="${produto.img}" width ="250" height="auto">
                </div>
                <div class= "textos">
                    <h3> ${produto.nome} </h3>
                    <p> ${produto.descricao} </p>
                    </div> 
                         <span class= "comDesconto"> RS ${(produto.valorComDesconto).toFixed(2).replace(",",".")} </span>
                         <span class= "semDesconto"> RS ${(produto.valorSemDesconto).toFixed(2).replace(",",".")} </span>
                    </div>
                </div> 
            </div>

    `        
}            
        
let elementosCards = document.querySelectorAll(".card")

for(let card of elementosCards){
    card.addEventListener("click", cliquei)
}           

buscar()

function cliquei(){
    let elementoID = this.getAttribute("data-id")
    window.locationbar.href = "detalhes.html?PazeAmor=" + elementoID
}

cliquei()