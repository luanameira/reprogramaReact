import React from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/legenda"
import Campo from "../../componentes/Campo/campo"
import "./conta.css"


function Conta() {
    return (
        <main className="conta">
            <h1>Conta</h1>
            <p>Envie um formulário para criar uma conta.</p>
            <Legenda htmlFor="nome">Nome:</Legenda>
            <Campo type="text" id="nome" name='nome' placeholder="Nome" required />
            <Legenda htmlFor="telefone">Telefone:</Legenda>
            <Campo type="text" id="tel" name='Telefone' placeholder="Telefone" required />
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo type="email" id="email" name='email' placeholder="Email" required minLength={10} />
            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo type="password" id="senha" name='senha' placeholder="Senha" required minLength={6} />
            <Botao desabilitado>Enviar</Botao>
            <Link url="/login">Fazer Login</Link>
        </main>
    )
}

export default Conta