let urlProdutos = "https://raw.githubusercontent.com/4manda22/Meu-Curso-Fullstack/master/M%C3%B3dulo%2002/07%20-%20Intera%C3%A7%C3%A3o%20com%20API/Consumir%20API/produtos.json"

async function buscar(){
    let resposta = await fetch(urlProdutos)
    let produtos = await resposta.json()
   // alert(produtos[1].descricao)
    //console.log(produtos[1].descriao) 

    document.body.innerHTML += produtos[1].descricao + "<br>"
    document.body.innerHTML += produtos[2].descricao + "<br>"
}
buscar()