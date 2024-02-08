let urlobjetos = "https://raw.githubusercontent.com/4manda22/Meu-Curso-Fullstack/master/M%C3%B3dulo%2002/07%20-%20Intera%C3%A7%C3%A3o%20com%20API/Aula%2004/Atividade%2001/produtos.json"

async function buscar(){
    let resposta = await fetch(urlobjetos)
    let objetos = await resposta.json()
   // console.log(objetos)

    for (let objetos in objeto ){
        let div = document.body.innerHTML += `"<h1 class='t1'>" + objetos[objeto].nome + "</h1>" 
            <div class='card'>
                <img 
                src="${objetos[objeto].img}" 
                alt="Não renderizou" 
                width="auto"
                height="150"
                class="img-produtos"
                >
                <p class='t1'>
                    <b>${objetos[objeto].nome}</b>
                </p>

                <p>
                    ${objetos[objeto].descricao}
                </p>

                <div class="h1">
                    <span class="valorSem">
                        <b>
                          R$ ${produtos[objeto].valorSemDesconto}
                        </b>
                    </span>
                
                <p>
                    ${objetos[objeto].tipoEntrega}
                </p>
            </div>
            `
    }

}

buscar()

