// Objetivo é capturar todas informações do INPUS e atribui-los a um ARRAY 
// ou objeto, para que possam, posteriormente, ser atribuido a uma CLASS de uma pessoa... 

class Usuario {
    constructor() {
        this.nome = 'Nome do Usuário' 
    }
}   

let UsuarioUm = new Usuario; 
let Acumalador = 1; 

document.getElementById('ConfirmarCadastro').addEventListener('click', (e) => {
    e.preventDefault(); 
    let teste = GerandoArray(); 
    console.log(teste);
    // GerandoHistorico(); 
    gravar(teste); 
})  

let GerandoArray = function () {
    const inputsSelecionados = document.querySelectorAll('#Formulario-Cadastro input')
    let ArrayDeValores = Array()

    // for (let i = 0; i < inputsSelecionados.length; i++) {
    //     ArrayDeValores[i] = inputsSelecionados.item(i).value; 
    // }

    inputsSelecionados.forEach(inputsSelecionados => {
        ArrayDeValores.push(inputsSelecionados.value)
    });

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
    
    for (const key in UsuarioUm) {
        console.log(key);
        if ([key] == "Despesa") {
            Acumalador++
            UsuarioUm[Acumalador] = new Despesa(...ArrayDeValores)
            return UsuarioUm
        }
    }

    UsuarioUm.Despesa = new Despesa(...ArrayDeValores)
    return UsuarioUm;
 
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Gravando os objetos dentro do Local Storege que irá manter a informação de forma permanente 
// Sendo necessário deletar manualmente

function gravar(despesaCriada) {
    // instrução que nos retorna o objeto de navegador
    // SetItem permite o uso de dois parâmetros (idadentidade, objeto em questão, que será armazenado)
    // Por ser um método engessado, o SetItem subrescreve o objeto já existente 
    
    localStorage.setItem('Despesa', JSON.stringify(despesaCriada))
}