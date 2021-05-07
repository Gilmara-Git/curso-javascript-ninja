    (function(window, document){
      'use strict'
    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    // ?

    // usamos data-js, pois nao utilizamos nem 'id' e nem 'classe' para trabalhar com js
    let $inputField = document.querySelector('[data-js="input"]');
    let $startButton = document.querySelector('[data-js="start"]');
    let $resetButton =  document.querySelector('[data-js="reset"]');
    let $stopButton =  document.querySelector('[data-js="stop"]');


   
    let temporizador;


    //MANEIRA QUE O PROFESSOR FEZ, FICOU MAIS CONCISO, MAIS MODULAR
    //ALEM DISSO AS FUNCOES ESTAO FORA DO eventListener e podemos reaproveita-las

    $startButton.addEventListener('click', timer, false );
    $stopButton.addEventListener('click', stop, false );
    $resetButton.addEventListener('click', reset, false );


    function timer(){
        console.log( typeof $inputField.value )
        $inputField.value = +$inputField.value + 1;
        temporizador = setTimeout(timer, 1000);
        console.log('temp',temporizador)
    }

    //Dentro da funcao de time, como o professor colocou o valor = '0'
    //no input type= "text" do HTML, ele precisou transformar o valor
    //para number, e usou o  '+' . Dai somou com +1

     //$inputField.value = +$inputField.value + 1;

    function stop(){
        clearTimeout(temporizador);
    }

    function reset(){

        $inputField.value = 0;
        stop();
        console.log('temp na reset',temporizador)
        $inputField.value = 0;
    }


    //MANEIRA QUE EU FIZ:
    // $startButton.addEventListener('click', function(){
    //     function timer(){
    //         $inputField.value = counter++;
    //         temporizador = setTimeout( timer, 1000);
    //         console.log('linha', temporizador);
    //     }
    //     timer();

    // }, false);


    // $stopButton.addEventListener('click', function(){
    //     // console.log(inputField.value);
    //     clearTimeout(temporizador);
    // }, false);


    // $resetButton.addEventListener('click', function(){
    //     $inputField.value  = 0;
    //     clearTimeout(temporizador);
    // }, false);


    })(window, document);
