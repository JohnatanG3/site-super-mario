// Selecionando o formulário e a máscara para manipulação de exibição
const formulario = document.querySelector(".fale-conosco");
const mascara = document.querySelector(".mascara-form");

// Função chamada ao clicar no botão "Entre em Contato Agora"
// Adiciona a classe "active" ao formulário para torná-lo visível
function cliqueiNoBotao() {
    formulario.classList.add("active"); // Torna o formulário visível
    mascara.style.visibility = "visible"; // Torna a máscara visível
}

// Função chamada ao clicar no botão "Solicitar Orçamento" ou na máscara
// Remove a classe "active" do formulário, tornando-o invisível
function sumirFormulario() {
    formulario.classList.remove("active"); // Torna o formulário invisível
    mascara.style.visibility = "hidden"; // Torna a máscara invisível
}

// Evento que fecha o formulário ao clicar na máscara
mascara.addEventListener("click", sumirFormulario);