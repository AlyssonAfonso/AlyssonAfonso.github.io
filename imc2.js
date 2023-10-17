function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const nome = document.getElementById("name").value;
    const imc = (peso/(altura*altura).toFixed(1));

    document.querySelector("p").innerHTML =  `Oi ${nome} , seu IMC é de ${imc}`;



}