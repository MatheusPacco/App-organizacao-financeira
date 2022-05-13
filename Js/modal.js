export default function ativandoModal(status) {
    let containerCadastro = document.getElementById('Container-Cadastro')
    let criandoModal = document.createElement('div'); 

    if (status === false) {
        criandoModal.setAttribute('class', 'modal-Erro'); 
        criandoModal.textContent = '😢 Preencha as informações de forma correta, para que possa salvar os registros'; 
    
        containerCadastro.appendChild(criandoModal); 
        let DivCriada = document.querySelector('.modal-Erro')
        const aparecerModal = setInterval(() => {
            DivCriada.classList.add('ativado'); 
            clearInterval(aparecerModal); 
        }, 0);
    
        const sumirModal = setInterval(() => {
            DivCriada.classList.remove('ativado'); 
            clearInterval(sumirModal); 
        }, 5000);
    
        const removerModal = setInterval(() => {
            DivCriada.remove() 
            clearInterval(removerModal); 
        }, 6000);
    }

    if (status === true) {
        criandoModal.setAttribute('class', 'modal-Sucesso'); 
        criandoModal.textContent = '💾 Registro realizado com sucesso!'; 
    
        containerCadastro.appendChild(criandoModal); 
        let DivCriada = document.querySelector('.modal-Sucesso')
        const aparecerModal = setInterval(() => {
            DivCriada.classList.add('ativado'); 
            clearInterval(aparecerModal); 
        }, 0);
    
        const sumirModal = setInterval(() => {
            DivCriada.classList.remove('ativado'); 
            clearInterval(sumirModal); 
        }, 5000);
    
        const removerModal = setInterval(() => {
            DivCriada.remove() 
            clearInterval(removerModal); 
        }, 6000);
    }
   
}