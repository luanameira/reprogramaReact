
const linkCriarConta = <a class= "link" href= "/conta">Criar uma conta</a>
const linkFazerLogin = <a class= "link" href= "/login">Fazer o Login</a>


const formularioLogin = (
    <form>
        {[linkCriarConta, linkFazerLogin]}
    </form>
);


const divisaoProjeto = document.getElementById("projeto");

//ReactDOM.render(elemento React, tag html)
ReactDOM.render(formularioLogin, divisaoProjeto);
