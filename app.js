function sortear() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(ate, de);
        sorteados.push(numero);    
    }

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

}

function obterNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}