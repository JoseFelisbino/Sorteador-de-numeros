function sortear() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);
}

function obterNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}