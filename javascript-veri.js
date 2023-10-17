function enviar() {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let mae = document.getElementById("mae").value;
    let pai = document.getElementById("Pai").value;
    let tele = document.getElementById("tele").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;

    // Verifique se os campos obrigatórios estão preenchidos
    if (nome === "" || data === "" || mae === "" || pai === "" || tele === "" || tel === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
    } else if (!isValidEmail(email)) {
        alert("O endereço de e-mail não é válido. Certifique-se de que ele contenha o '@'.");
    } else if (!isValidBrazilianDDD(tele)) {
        alert("O DDD do Brasil deve começar com '55'.");
    } else {
        alert("Formulário enviado com sucesso!");
    }
}

function isValidEmail(email) {
    // Use uma expressão regular para verificar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidBrazilianDDD(tele) {
    return tele.startsWith("55");
}

document.getElementById("limpar").addEventListener("click", function() {
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("mae").value = "";
    document.getElementById("Pai").value = "";
    document.getElementById("tele").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
});