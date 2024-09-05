const especieSelect = document.getElementById('especie');
const pesoInput = document.getElementById('peso');
const calcularButton = document.getElementById('calcular');
const quantidadeP = document.getElementById('quantidade');
const resultadoDiv = document.getElementById('resultado');

calcularButton.addEventListener('click', () => {
    const especie = especieSelect.value;
    const peso = parseFloat(pesoInput.value);

    let quantidadeDiaria = "";

    if (especie === 'cão') {
        if (peso >= 1 && peso <= 3) {
            quantidadeDiaria = "até 60g";
        } else if (peso > 3 && peso <= 5) {
            quantidadeDiaria = "de 60 a 85g";
        } else if (peso > 5 && peso <= 7) {
            quantidadeDiaria = "de 85 a 110g";
        } else if (peso > 7 && peso <= 10) {
            quantidadeDiaria = "de 110 a 145g";
        } else if (peso > 10 && peso <= 25) {
            quantidadeDiaria = "de 145 a 290g";
        } else if (peso > 25 && peso <= 45) {
            quantidadeDiaria = "de 290 a 445g";
        } else if (peso > 45 && peso <= 60) {
            quantidadeDiaria = "de 445 a 555g";
        } else if (peso > 60 && peso <= 70) {
            quantidadeDiaria = "de 555 a 620g";
        } else {
            quantidadeDiaria = "Fora da faixa de peso para cálculo.";
        }
    } else if (especie === 'gato') {
        if (peso >= 1.4 && peso <= 3.6) {
            quantidadeDiaria = "de 33 a 62g";
        } else if (peso > 3.6 && peso <= 4.7) {
            quantidadeDiaria = "de 62 a 74g";
        } else if (peso > 4.7 && peso <= 7) {
            quantidadeDiaria = "de 74 a 97g";
        } else if (peso > 7 && peso <= 10) {
            quantidadeDiaria = "de 97 a 123g";
        } else {
            quantidadeDiaria = "Fora da faixa de peso para cálculo.";
        }
    } else {
        quantidadeDiaria = "Espécie inválida.";
    }

    quantidadeP.textContent = quantidadeDiaria;
    resultadoDiv.style.display = 'block';
});