const form = document.querySelector('form');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    resultado.innerHTML = '';
    criaP((peso.value / (altura.value ** 2)).toPrecision(3));
});

function criaP (msg) {
    const p = document.createElement('p');
    p.innerHTML = `<strong>IMC</strong>: ${msg}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${mensagem(msg)}`;
    cor(p, msg);
    resultado.appendChild(p);
}

function mensagem (imc) {
    if (imc < 18.5) {
        return ' Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade Grau 1';
    } else if (imc >= 35 && imc < 40) {
        return 'Obesidade Grau 2';
    } else if (imc >= 40) {
        return 'Obesidade Grau 3';
    }
}

function cor (p, imc) {
    if (imc < 25) {
        p.classList.add('corVerde');
        return p
    } else if (imc >= 25 && imc < 30) {
        p.classList.add('corLaranja');
        return p;
    } else if (imc >= 30) {
        p.classList.add('corVermelho');
        return p;
    }
}