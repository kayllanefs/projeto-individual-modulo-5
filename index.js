const readlineSync= require ('readline-sync');
const palavra = []
let propriedade = ""

while (propriedade != "sair") {
   propriedade= readlineSync.question('digite uma propriedade css: ');
   
   palavra.push(propriedade);



 
};

