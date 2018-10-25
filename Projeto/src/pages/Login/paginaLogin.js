import React from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import "./paginaLogin.css"



function Login(){
    return (
    <main className="login">
    <h1>Login</h1>
    <p>Entre com seu email e senha.</p>
    <Link url="/conta"> Criar uma conta</Link>
    <Link url="/login">Fazer o Login</Link>
    <Botao>Enviar</Botao>
    <Botao desabilitado>Enviar</Botao>
    </main>
    )
}

export default Login