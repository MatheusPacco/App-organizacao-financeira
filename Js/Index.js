// Objetivo é capturar todas informações do INPUS e atribui-los a um ARRAY 
// ou objeto, para que possam, posteriormente, ser atribuido a uma CLASS de uma pessoa... 
import ativandoModal from './modal.js';
import ChamadaDeConsulta from './historico.js'
import validandoFormulario from './validandoFormulario.js';

const SecaoContainerCadastro = document.getElementById('Container-Cadastro'); 
const SecaoContainerConsulta = document.getElementById('Consulta-Despesas'); 
const btnMenuCadastro = document.getElementById('btn-Cadastro-menu'); 
const btnMenuConsulta = document.getElementById('btn-consulta'); 

btnMenuCadastro.addEventListener('click', () =>{
    SecaoContainerCadastro.classList.add('ativo'); 
    SecaoContainerConsulta.classList.remove('ativo'); 
    btnMenuCadastro.classList.add('Ativo'); 
    btnMenuConsulta.classList.remove('Ativo'); 
}); 

document.getElementById('ConfirmarCadastro').addEventListener('click', (e) => {
    e.preventDefault(); 
    GerandoDespesa(); 
})  

class Despesa{
    constructor (dia, mes, ano, descricao, valor, categoria) {
        this.dia = dia; 
        this.mes = mes; 
        this.ano = ano;
        // this.categoria = categoria; 
        this.descricao = descricao; 
        this.valor = valor; 
        this.categoria = categoria; 
    }
} 

let GerandoDespesa = function () {
    const inputsSelecionados = document.querySelectorAll('#Formulario-Cadastro input')
    let ArrayDeValores = Array()
    let categoria = document.querySelector('#Seletor-Cadastro')
    inputsSelecionados.forEach(inputsSelecionados => {
        ArrayDeValores.push(inputsSelecionados.value)
    });

    if (validandoFormulario(inputsSelecionados, categoria) === 0){
        //Criando a entidade Despesa e validando informações do formulário

        let DespesaQualquer = new Despesa(...ArrayDeValores, categoria.value); 
        banco.gravar(DespesaQualquer);
        ativandoModal(true)

        // Deixando as informações do formulário em Default para que possam ser cadastrados outras tarefas
        inputsSelecionados.forEach(inputsSelecionados => {
            inputsSelecionados.value = ''; 
        });

        categoria.value = '0';

        return DespesaQualquer
        
    } else {
        ativandoModal(false)
    }
    
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
            let despesa = JSON.parse(localStorage.getItem(i))
            if (despesa === null) { continue }
            despesas.push(despesa) 
        } 
        
        return despesas;
    }

    pesquisar(despesa) {   
        console.log(despesa)
    }
}

// Instânciado o objeto
let banco = new Bd(); 
let informacoesRegistro = Array(); 

btnMenuConsulta.addEventListener('click', () => {
    informacoesRegistro = banco.recuperarTodosRegistros();  

    SecaoContainerCadastro.classList.remove('ativo'); 
    SecaoContainerConsulta.classList.add('ativo'); 

    btnMenuConsulta.classList.add('Ativo'); 
    btnMenuCadastro.classList.remove('Ativo'); 

    //Recuperando os dados do storage da aplicação, se que será redirecionados para as informações no histórico

    ChamadaDeConsulta(informacoesRegistro)
})

