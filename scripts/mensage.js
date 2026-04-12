const button = document.getElementById("send-mensage")

function enviarMensagem() {
    const nome = document.getElementById('nome').value.trim();
    const servico = document.getElementById('services').value;
    const msgDiv = document.getElementById('msgSend');

    if (!nome || !servico) {
        msgDiv.innerHTML = "<p style='color: #FF0037;'>Por favor, preencha seu nome e selecione um serviço.</p>";
        return;
    }

    const telefone = "554288824775"; 
    
    const texto = `Olá! Meu nome é ${nome}. Me interessei e gostaria de saber mais sobre os seus serviços de ${servico}.`;
    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemFormatada}`;

    window.open(url, '_blank');
    
    msgDiv.innerHTML = "<p style='color: #00c911;'>Redirecionando...</p>";
}

button.addEventListener("click", enviarMensagem);