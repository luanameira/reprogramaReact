const formularioLogin = document.createElement("form");

const linkCriarConta = document.createElement("a");
linkCriarConta.className = "link";
linkCriarConta.href = "/conta";
linkCriarConta.appendChild(document.createTextNode("Criar uma conta"));

const linkFazerLogin = document.createElement("a");
linkFazerLogin.className = "link";
linkFazerLogin.href = "/login";
linkFazerLogin.appendChild(document.createTextNode("Fazer o Login"));

const divisaoProjeto = document.getElementById("projeto");
formularioLogin.appendChild(linkFazerLogin);
formularioLogin.appendChild(linkCriarConta);
divisaoProjeto.appendChild(formularioLogin);
