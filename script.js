function separarNomeSobrenome() {
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const nomeArray = nomeCompleto.split(' ');

    if (nomeArray.length >= 2) {
        const nome = nomeArray[0];
        const sobrenome = nomeArray.slice(1).join(' ');

        document.getElementById('nome').value = nome;
        document.getElementById('sobrenome').value = sobrenome;
    } else {
        alert('Digite um nome completo válido.');
    }
}