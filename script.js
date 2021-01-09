function calcular(){
    let fsexo = document.getElementsByName('radsex');
    let txidade = document.querySelector('input#fidade');
    let txaltura = document.querySelector('input#faltura');
    let txpeso = document.querySelector('input#fpeso');
    let res = document.querySelector('div#res');

    //Conversão de dados
    let idade = Number(txidade.value);
    let altura = Number(txaltura.value);
    let peso = Number(txpeso.value);
    
    //Calculo IMC
    let imc = peso / (altura * altura);
    const total = imc.toFixed(2);
    res.innerHTML = `Seu IMC é de ${total} <br>`
    if (total < 18.5){
        //ABAIXO DO PESO
        res.innerHTML += `Você está abaixo do peso.`
    } else if (total < 24.9) {
        //PESO NORMAL
        res.innerHTML += `Você está no peso normal.`
    } else if (total < 29.9){
        //SOBREPESO
        res.innerHTML += `Você está com sobrepeso.`
    } else if (total < 34.9){
        //OBESIDADE GRAU 1
        res.innerHTML += `Você pode estar com indícios de obesidade grau 1.`
    } else if (total < 39.9){
        //OBESIDADE GRAU 2
        res.innerHTML += `Você pode estar com indícios de obesidade grau 2.`
    } else {
        //OBESIDADE GRAU 3
        res.innerHTML += `Você pode estar com indícios de obesidade grau 3.`
    }
    
}
