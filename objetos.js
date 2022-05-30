//  Outro uso da notação de colchetes em objetos é acessar uma
//  propriedade que é armazenada como o valor de uma variável.
//  Isso pode ser muito útil para iterar pelas propriedades de um
//  objeto ou ao acessar uma tabela de pesquisa.
//    Aqui está um exemplo de uso de uma variável para acessar uma propriedade:
        
        const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);