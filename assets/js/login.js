// Função para redirecionar para /index.html
function redirecionarParaIndex() {
    window.location.href = "/index.html";
}

// Função para verificar o login
function verificarLogin(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Verifica se os campos estão vazios
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    } 
    // Verifica se o login está correto
    else if (email === "uninter.teste@gmail.com" && senha === "123456") {
        alert("Login realizado com sucesso!");
        redirecionarParaIndex(); // Redireciona para /index.html
    } 
    // Se os dados estiverem incorretos
    else {
        alert("E-mail ou senha incorretos!");
        return false;
    }
}

// Função para verificar o cadastro
function verificarCadastro(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    const username = document.getElementById("username").value;
    const signupEmail = document.getElementById("signupEmail").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const signupPassword = document.getElementById("signupPassword").value;

    // Verifica se algum campo está vazio
    if (username === "" || signupEmail === "" || phoneNumber === "" || signupPassword === "") {
        alert("Por favor, preencha todos os campos do cadastro.");
        return false;
    } 
    // Cadastro bem-sucedido
    else {
        alert("Cadastro realizado com sucesso!");
        redirecionarParaIndex(); // Redireciona para /index.html
    }
}

// Adiciona eventos de submit para o formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    verificarLogin(event);
});

// Adiciona eventos de submit para o formulário de cadastro
document.getElementById("signupForm").addEventListener("submit", function(event) {
    verificarCadastro(event);
});
