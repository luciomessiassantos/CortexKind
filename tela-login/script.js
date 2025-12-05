
const body = document.querySelector("main.login-container");
const form = document.getElementById("login-form");
/**
 * @type {HTMLInputElement}
 */
const emailInuput = document.getElementById("email");
const senhaInput = document.getElementById("password");


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInuput.value;
  const senha = senhaInput.value;

  if (email != "medico@teste.com") {
    createError("Email inválido");
    return;
  }

  if (senha != "1234") {
    createError("Senha incorreta");
    return;
  }

console.log("email: " + email);
console.log("senha: " + senha);

window.location.href = "../tela dashboard/index.html"


})


/**
 * 
 * @param {string} message 
 */

const createError = (message) => {
  const div = document.createElement("div");
  div.className = "error-component";
  div.textContent = `Erro: ${message}`;
  body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
}
