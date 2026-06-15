function enviarMensagem() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos.");

    } else if (!email.includes("@")) {

        alert("Digite um e-mail válido.");

    } else {

        alert("Mensagem enviada com sucesso!");

        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";

    }

}