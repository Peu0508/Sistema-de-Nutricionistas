const teclaCalcular = document.querySelector('.botao__calcular');

function calcularIMC(){

    var sexoCampo = document.getElementById('form__seletor');

    var sexoUsuario = sexoCampo.value;

    console.log(sexoUsuario);

    var pesoUsuario = document.getElementById('form__peso').valueAsNumber;

    var alturaUsuario = document.getElementById('form__altura').valueAsNumber;

    var resultadoIMC = pesoUsuario / (alturaUsuario*alturaUsuario);

    resultadoIMC = resultadoIMC.toFixed(2);

    var textoIMC = "";

    if(resultadoIMC < 18.5){

        textoIMC = 'Magreza';

    } else if(resultadoIMC == 18.5 || resultadoIMC < 24.9){

        textoIMC = 'Peso Normal';

    }else if(resultadoIMC == 25 || resultadoIMC < 29.9){

        textoIMC = 'Sobrepeso';

    }else if(resultadoIMC == 30 || resultadoIMC < 39.9){

        textoIMC = 'Obesidade';

    }else if(resultadoIMC > 40){

        textoIMC = 'Obesidade Grave';

    }

    document.getElementById('paragrafo__resultado').innerHTML= (`O seu IMC é ${resultadoIMC} e está em situação de ${textoIMC}`);

}

    teclaCalcular.addEventListener('click',calcularIMC);

    // SCRIPT DA ÁREA DE CADASTRO

     // Array para armazenar os dados
     let listaClientes = [];

     // Função para adicionar um novo item à lista
     function adicionarItem(name, email, peso, altura, imc) {
       listaClientes.push({ name, email,peso, altura, imc });
       atualizarTabela();
     }
 
     // Função para atualizar a tabela
     function atualizarTabela() {
       const tableBody = document.getElementById('tableBody');
       tableBody.innerHTML = '';
       listaClientes.forEach(item => {
         const row = `<tr>
                     <td>${item.name}</td>
                     <td>${item.email}</td>
                     <td>${item.peso}</td>
                     <td>${item.altura}</td>
                     <td>${item.imc.toFixed(2)}</td>
                     <td>
                       <button type="button" class="btn btn-danger btn-sm" onclick="excluirItem('${item.email}')">Excluir</button>
                     </td>
                   </tr>`;
         tableBody.innerHTML += row;
       });
     }
 
     // Função para calcular o Índice de Massa Corporal (IMC)
     function calcularIMC(peso, altura) {
       // Fórmula do IMC: IMC = peso / (altura * altura)
       const imc = peso / (altura * altura);
       return imc;
     }
 
     // Função para excluir um item da lista
     function excluirItem(email) {
       listaClientes = listaClientes.filter(item => item.email !== email);
       atualizarTabela();
     }
 
     // Evento de envio do formulário
     document.getElementById('crudForm').addEventListener('submit', function (event) {
       event.preventDefault();
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const peso = document.getElementById('peso').value;
       const altura = document.getElementById('altura').value;
       const imc = calcularIMC(peso, altura);
       adicionarItem(name, email, peso, altura, imc);
 
       // Limpar campos do formulário
       document.getElementById('name').value = '';
       document.getElementById('email').value = '';
       document.getElementById('peso').value = '';
       document.getElementById('altura').value = '';
     });






