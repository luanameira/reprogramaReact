
const linkCriarConta = React.createElement("a", {
    className: "link",
    href: "/conta",
    children: "Criar uma conta"
});


const linkFazerLogin = React.createElement("a", {
    className:"link",
    href:"/login",
    children: "Fazer o Login"
});

const formularioLogin = React.createElement("form", {
    children: [linkCriarConta, linkFazerLogin]
});


const divisaoProjeto = document.getElementById("projeto");

//ReactDOM.render(elemento React, tag html)
ReactDOM.render(formularioLogin, divisaoProjeto);
