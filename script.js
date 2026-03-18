// index 2 = peso
// index 3 = altura
// index 4 = imc

import { calculo, imc } from "./imc.js";

var trs = document.querySelectorAll('tbody tr')

//laço

for (let index = 0; index <=19 ; index++) {
    let tr = trs[index]
    let filhos = tr.children
    
    //Extrair informações das celulas
    let peso = filhos[2].textContent
    let altura = filhos[3].textContent
    
    //Definir como numero com virgula
    peso = parseFloat(peso)
    altura = parseFloat(altura)

    //Realizar as funções
    const imcConta = calculo(peso, altura)
    const imcTipo = imc(imcConta)

    //Inserir o resultado
    filhos[4].textContent = imcConta
    filhos[5].textContent = imcTipo


}

