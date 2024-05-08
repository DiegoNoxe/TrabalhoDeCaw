function validar() {
    var nome_user = document.getElementById('nome').value;
    var email_user = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;





    
    if (!emailRegex.test(email_user)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return false;
    }
    return true;
}