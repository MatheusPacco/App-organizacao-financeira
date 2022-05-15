export default function validandoFormulario (inputs, seletor, categoria){

    let validador = 0; 

    if (categoria == 'registro') {
         
    //Dia   
    if (inputs[0].value == '' || inputs[0].value <= 0 || inputs[0].value > 31) {
        adicionandoBordaDeErro(inputs[0]); 
        validador++
    } else {
        inputs[0].classList.remove('erro-Input')
    }

    // Mês
    if (inputs[1].value == '' || inputs[1].value <= 0 || inputs[1].value > 12) {
        adicionandoBordaDeErro(inputs[1]); 
        validador++
    } else {
        inputs[1].classList.remove('erro-Input')
    }

    // Ano
    if (inputs[2].value == '' || inputs[2].value <= 0 || inputs[2].value < 2012 || inputs[2].value > 2025 ) {
        adicionandoBordaDeErro(inputs[2]); 
        validador++
    } else {
        inputs[2].classList.remove('erro-Input')
    }

    if (seletor.value == 0) {
        seletor.classList.add('erro-Input')
        validador++
    } else {
        seletor.classList.remove('erro-Input')
    }

    if (inputs[4].value == '' || inputs[4].value <= 0) {
        adicionandoBordaDeErro(inputs[4]); 
        validador++
    } else {
        inputs[4].classList.remove('erro-Input')
    }

    return validador
    }

}

function adicionandoBordaDeErro (input){
    input.value = ''; 
    input.classList.add('erro-Input')
    
}