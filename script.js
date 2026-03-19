// index 2 = peso
// index 3 = altura
// index 4 = imc

import { calculo, imc } from "./imc.js";

var trs = document.querySelectorAll('tbody tr')
var table = document.querySelector('table')

//laço
// extrai a table e aplica a propriedade .rows.lenght para obter o numero total de linhas
for (let index = 0; index < table.rows.length ; index++) {
    //obtem as trs e extrai seus filhos (tds)
    let tr = trs[index]
    let filhos = tr.children
    
    //Extrair informações das celulas
    let peso = filhos[2].textContent
    let altura = filhos[3].textContent
    
    //Definir como numero decimal
    peso = parseFloat(peso)
    altura = parseFloat(altura)

    //Realizar as funções
    const imcConta = calculo(peso, altura)
    const imcTipo = imc(imcConta)

    //Inserir o resultado
    filhos[4].textContent = imcConta
    filhos[5].textContent = imcTipo
    

}

