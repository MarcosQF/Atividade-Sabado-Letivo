function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.innerHTML = 'Por favor, insira valores.';
        resultado.className = '';
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Baixo peso';
        resultado.className = 'baixo-peso';
    } else if (imc < 24.9) {
        categoria = 'Peso normal';
        resultado.className = 'peso-normal';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
        resultado.className = 'sobrepeso';
    } else {
        categoria = 'Obesidade';
        resultado.className = 'obesidade';
    }

    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} - Categoria: ${categoria}`;
}