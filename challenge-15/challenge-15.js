(function(){

  /*

  Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

  /*
  Crie uma função construtora chamada "Person". Esse construtor deve ter
  as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
      - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
  */
  // ?

  function Person(name, lastName, age){

    this.name = name;
    this.lastName = lastName; 
    this.age = age;
    
    this.getFullName = function getFullName(){
      let fullName = this.name + ' ' + this.lastName;
      return fullName;
    };
    this.getAge = function getAge(){
      return this.age;
    };

    this.addAge = function addAge(){
      //return this.age + add;
      //como este metodo nao estara recebendo nenhum parametro, pegaremos o parametro com o objeto argumentos
      this.age += arguments[0];
      return this;
      // aqui estamos retornando o objeto que esta sendo instanciado; Person
    };
    

  };
  let newPerson = new Person('Gilmara', 'Pimentel', 43);
  console.log('Novo objeto:', newPerson);
  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */

  let Person1 = new Person('Alzira', 'Maia', 55 );
  let Person2 = new Person('Nilva', 'Pimentel', 64 );
  let Person3 = new Person('Aloisio', 'Pimentel', 70 );

  console.log( 'Novas pessoas criadas à partir de Person:' );
  // ?
  console.log(Person1);
  console.log(Person2);
  console.log(Person3);

  //Mostre no console o nome completo de cada pessoa.

  console.log( '\nNomes das pessoas:' );
  // ?
  console.log(newPerson.getFullName());
  console.log(Person1.getFullName());
  console.log(Person2.getFullName());
  console.log(Person3.getFullName());
  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );
  // ?
  console.log('"' + newPerson.getFullName() + ' tem ' + newPerson.getAge() +'"');
  console.log('"' +Person1.getFullName() +' tem '  + Person1.getAge() + '"');
  console.log('"' +Person2.getFullName() + ' tem ' + Person2.getAge() + '"');
  console.log('"' +Person3.getFullName() + ' tem ' + Person3.getAge() + '"');
  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  //

  // ******O metodo this.addAge() retorna o prorpio objeto*****
  // Entao eu havia chamada a propriedade .age apos o retorno do objeto. Porem, o Fernando ensinou encadeando os metodos:
  // console.log('"' + newPerson.getFullName() + ' agora tem ' + newPerson.addAge(100).age + ' anos"');
  // console.log('"' +Person1.getFullName() +' agora tem '  + Person1.addAge(5).age + ' anos"');
  // console.log('"' +Person2.getFullName() + ' agora tem ' + Person2.addAge(6).age + ' anos"');
  // console.log('"' +Person3.getFullName() + ' agora tem ' + Person3.addAge(6).age + ' anos"');

  //Como este metodo retorna a funcao, a gente vai so mandar adicionar a idade e depois encadear e pegar a idade
  // Usando os metodos de pegar de addAge() e getAge() subsequentemente
  

  console.log('"' + newPerson.getFullName() + ' agora tem ' + newPerson.addAge(10).getAge() + ' anos"');
  console.log('"' + Person1.getFullName() +' agora tem '  + Person1.addAge(-4).getAge() + ' anos"');
  console.log('"' + Person2.getFullName() + ' agora tem ' + Person2.addAge(8).getAge() + ' anos"');
  console.log('"' + Person3.getFullName() + ' agora tem ' + Person3.addAge(-10).getAge() + ' anos"');

  // Foi possivel fazer o encadeamento deste que retornamos o objeto no metodo addAge()
})();
