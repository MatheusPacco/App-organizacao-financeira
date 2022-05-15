export default function ChamadaDeConsulta (informacoesGerais, filter = false) {
    let id = localStorage.getItem('id')
    let container = document.getElementById('box-historico')
    // Recuperando a quantidade de despesas registradas 
    let i = document.querySelectorAll('.container-historico').length

    // tinha feito com o for... 
    // explorar o mitivo dps

    if (filter === false) {
        
    for (i; i < id; i++) {
    let divCriada = document.createElement('div')
        
        divCriada.innerHTML = ` 
        <div class="container-historico">
                <div class="row-historico-1">
                    <img class="icone-historico" src="img/Emoji-Cowboy.png" alt="">
                    <div id="data-historico" class="data-historico">
                        ${informacoesGerais[i].dia} / ${informacoesGerais[i].mes} / ${informacoesGerais[i].ano} 
                    </div>
                <div class="tipo-historico">
                    <h3> Tipo </h3>
                    <p> ${informacoesGerais[i].categoria}</p>
                </div>
    
                <div class="valor-historico">
                    <h3> valor </h3>
                    <p> R$ ${informacoesGerais[i].valor}</p>
                </div>
    
                <div class="box-historico-descricao">
                    <h3> Descrição </h3>
                    <div class="historico-descricao">
                        ${informacoesGerais[i].descricao} teste de descrição qualquer aaaa
                    </div>
                </div>
                <div>
                    <button id="editar-Historico" class="btn-editar-historico"> Alterar </button>
                    <button id="remover-Historico" class="btn-remover-historico"> Remover </button>
                </div>
            </div>
        </div>`    

        container.appendChild(divCriada); 
        }
    }

    if (filter === true ) {
        container.innerHTML = ''; 

        if (informacoesGerais.length == 0) {
            alert('nenhum registro com essas características!')
        }

        informacoesGerais.forEach((informacoesGerais) => {
            let divCriada = document.createElement('div')
        
            divCriada.innerHTML = ` 
            <div class="container-historico">
                    <div class="row-historico-1">
                        <img class="icone-historico" src="img/Emoji-Cowboy.png" alt="">
                        <div id="data-historico" class="data-historico">
                            ${informacoesGerais.dia} / ${informacoesGerais.mes} / ${informacoesGerais.ano} 
                        </div>
                    <div class="tipo-historico">
                        <h3> Tipo </h3>
                        <p> ${informacoesGerais.categoria}</p>
                    </div>
        
                    <div class="valor-historico">
                        <h3> valor </h3>
                        <p> R$ ${informacoesGerais.valor}</p>
                    </div>
        
                    <div class="box-historico-descricao">
                        <h3> Descrição </h3>
                        <div class="historico-descricao">
                            ${informacoesGerais.descricao} teste de descrição qualquer aaaa
                        </div>
                    </div>
                    <div>
                        <button id="editar-Historico" class="btn-editar-historico"> Alterar </button>
                        <button id="remover-Historico" class="btn-remover-historico"> Remover </button>
                    </div>
                </div>
            </div>`    
    
            container.appendChild(divCriada); 
        });

    } 
}