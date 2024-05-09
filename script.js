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






