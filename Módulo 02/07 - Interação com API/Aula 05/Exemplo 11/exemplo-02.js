async function procura(){
    let procura = await fetch("lista.json")
    let produtos = await procura.json()

    let listaDiv = document.getElementById("lista-card")

    for(let produto of produtos){
        listaDiv.innerHTML+= `
            <div class= "card">
                <img src="${produto.img}"
                    width= "250" height= "250px">
                <h3> ${produto.nome} </h3>
                <p> ${produto.descricao} </p>
                <div> 
                    <span> R$ $ ${(produto.valorComDesconto).toFixed(2).replace("." , ",")} </span>
                    <span> R$ $ ${(produto.valorSemDesconto).toFixed(2).replace("." , ",")} </span>
                </div>
            </div>   
            
        `
        
    }    
}       
procura()
   

  


