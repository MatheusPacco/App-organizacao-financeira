// Objetivo é capturar todas informações do INPUS e atribui-los a um ARRAY 
// ou objeto, para que possam, posteriormente, ser atribuido a uma CLASS de uma pessoa... 

document.getElementById('ConfirmarCadastro').addEventListener('click', (e) => {
    e.preventDefault(); 
    let GerandoDespesa = GerandoArray(); 
    banco.gravar(GerandoDespesa); 
    banco.recuperarTodosRegistros();
})  

class Despesa{
    constructor (dia, mes, ano, descricao, valor) {
        this.dia = dia; 
        this.mes = mes; 
        this.ano = ano;
        // this.categoria = categoria; 
        this.descricao = descricao; 
        this.valor = valor; 
    }
} 

let GerandoArray = function () {
    const inputsSelecionados = document.querySelectorAll('#Formulario-Cadastro input')
    let ArrayDeValores = Array()

    inputsSelecionados.forEach(inputsSelecionados => {
        ArrayDeValores.push(inputsSelecionados.value)
    });

    //Criando a entidade Despesa
    let DespesaQualquer = new Despesa(...ArrayDeValores)
    return DespesaQualquer
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Gravando os objetos dentro do Local Storege que irá manter a informação de forma permanente 
// Sendo necessário deletar manualmente
class Bd {
    constructor() {
        let idValidacao = localStorage.getItem('id')

        //Isso acontecerá automáticamente quando iniciar a página, já que na parte infeior nós já instânciamos um objeto

        if (idValidacao === null) {
            localStorage.setItem('id', 0)
        }
    }

    proximoID () {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(despesaCriada) {
        // instrução que nos retorna o objeto de navegador
        // SetItem permite o uso de dois parâmetros (idadentidade, objeto em questão, que será armazenado)
        // Por ser um método engessado, o SetItem subrescreve o objeto já existente 
        
        let id = this.proximoID(); 

        localStorage.setItem(id, JSON.stringify(despesaCriada))

        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {
        let despesas = Array(); 

        let id = localStorage.getItem('id')
        for (let i = 1; i <= id; i++) {
            let despesa = JSON.parse(localStorage.getItem(id))

            if (despesa === null) {
                continue
            }

            despesas.push(despesa) 
        }
        console.log(despesas);
    }
}

// Instânciado o objeto
let banco = new Bd(); 
