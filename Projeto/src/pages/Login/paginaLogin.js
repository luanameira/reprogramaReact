import React from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/legenda"
import Campo from "../../componentes/Campo/campo"
import "./paginaLogin.css"



function Login() {
    return (
        <main className="login">
            <h1>Login</h1>
            <p>Entre com seu email e senha.</p>
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo type="email" id="email" name='email' placeholder="Email" required minLength={10} />
            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo type="password" id="senha" name='senha' placeholder="Senha" required minLength={6} />
            <Botao>Enviar</Botao>
            <Link url="/conta"> Criar uma conta</Link>
        </main>
    )
}

export default Login