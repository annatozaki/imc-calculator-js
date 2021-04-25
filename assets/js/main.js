const form = document.querySelector('.imcForm');

function criaP() {
	const p = document.createElement('p');
	return p;
}

function setResultado(msg, isValid) {
	const resultado = document.querySelector('.resultado');
	resultado.innerHTML = '';

	const p = criaP();

	if (isValid) {
		p.classList.add('paragrafo-resultado');
	} else {
		p.classList.add('bad');
	}

	p.innerHTML = msg;
	resultado.appendChild(p);
}

function getImc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc.toFixed(1);
}

// eslint-disable-next-line consistent-return
function getNivelImc(imc) {
	const nivel = [
		'Abaixo do Peso',
		'Peso Normal',
		'Sobre Peso',
		'Obesidade Grau 1',
		'Obesidade Grau 2',
		'Obsesidade Grau 3',
	];

		if (imc >= 39.9) return nivel[5];
		if (imc >= 34.9) return nivel[4];
	if (imc >= 29.9) return nivel[3];
	if (imc >= 24.5) return nivel[2];
	if (imc >= 18.5) return nivel[1];
	if (imc < 18.5) return nivel[0];
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const inputPeso = e.target.querySelector('#peso');
	const inputAltura = e.target.querySelector('#altura');
	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	if (!peso) {
		setResultado('Peso Inválido', false);
		return;
	}
	if (!altura) {
		setResultado('Altura Inválida', false);
		return;
	}

	const imc = getImc(peso, altura);
	const nivelImc = getNivelImc(imc);

	const msg = `Seu IMC é ${imc} (${nivelImc}).`;
	setResultado(msg, true);

	console.log(imc, nivelImc);
});
