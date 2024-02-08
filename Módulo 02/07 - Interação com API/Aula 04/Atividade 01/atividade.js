let urlProdutos = "https://raw.githubusercontent.com/4manda22/Meu-Curso-Fullstack/master/M%C3%B3dulo%2002/07%20-%20Intera%C3%A7%C3%A3o%20com%20API/Aula%2004/Atividade%2001/produtos.json"

async function buscar(){
    let resposta = await fetch(urlProdutos)
    let produtos = await resposta.json()
    console.log(produtos)

    for (let produto in produtos ){
        let div = document.body.innerHTML +=` 
        <div class='card'>
                <img 
                src="${produtos[produto].img}" 
                alt="Não renderizou" 
                width="auto"
                height="150"
                class="img-produtos"
                >
                <p class='t1'>
                    <b>${produtos[produto].nome}</b>
                </p>

                <p>
                    ${produtos[produto].descricao}
                </p>

                <div class="h1">
                    <span class="valorSem">
                        <b>
                          R$ ${produtos[produto].valorSemDesconto}
                        </b>
                    </span>

                    <span class="valorCom">
                        <b>
                          R$ ${produtos[produto].valorComDesconto}
                        </b>
                    </span>
                <p>
                    ${produtos[produto].tipoEntrega}
                </p>
            </div>
            `
    }

}

buscar()

