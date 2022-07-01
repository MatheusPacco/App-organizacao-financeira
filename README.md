# App-organizacao-financeira
Aplicação focada no uso de JSON e Orientação Objeto como projeto desenvolvido dentro do curso de Desenvolvimento WEB da Udemy 


### Sobre a aplicação
A plataforma tem como principal objetivo armazenar informações financeiras sobre gastos, com base em categorias, dias, meses e anos, de forma que usuário tenha uma visão organizada e bem hierarquizada dos seus gastos diários. 

#### Objetivos 
Desenvolver uma aplicação mais próxima da realidade, com validações, consultas, filtragem e interação com o usuário. Além disso, aplicação foi desenvolvida usando o paradigma de orientação objeto, baseado no armazenamento de dados e hierarquia de código, resultando em um código mais seguro, confiável e eficiente na administração das regras de negócio e funcionalidades. 

<hr>

### Requisitos e funcionalidade da aplicação

> Criação de despesa:
- O Usuário só poderá criar uma despesa desde que todos os campos estejam preenchidos;
  -  Em caso de um dos campos não estar preenchido (com exceção da entrada de descrição), será exposto um modal informando o erro;
  -  A entrada do campo de dias, se limita a 01 - 31; 
  -  O Mês se restringe de 01 - 12 
  -  O ano se limita de 2012 - 2025 
  -  O campo de valor não aceita números negativos ou 0; 
  -  Categoria deve ser escolhida entre as possibilidades; 
  -  A descrição é um campo facultativo; 

- Caso todos os campos estejam corretamente preenchidos será apresentado um modal, confirmando o cadastro da despesa;
  - A despesa poderá ser vizualizada na aba de consulta; 
  -    
 
- Validação com base em que; 
   - Modal no formulário;  
- Filtro; 
- Despesas salvas e filtragem;   
