import React, { Component } from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/legenda"
import Campo from "../../componentes/Campo/campo"
import "./paginaLogin.css"



class Login extends Component {
    constructor(props) {
        super(props)
        this.emailRef = React.createRef()
        this.senhaRef = React.createRef()
        this.state = { desabilitado: true }
    }

    handleChange = () => {

        const campoEmail = this.emailRef.current
        const campoSenha = this.senhaRef.current

        if(campoEmail.temErro() || campoSenha.temErro()){
            this.setState ({desabilitado : true})
            }else{
                this.setState ({desabilitado : false})
            }
        }


    render() {
        return (
            <main className="login">
                <h1>Login</h1>
                <p>Entre com seu email e senha.</p>
                <Legenda htmlFor="email">Email:</Legenda>
                <Campo ref={this.emailRef} type="email" id="email" name='email' placeholder="Email" onChange = {this.handleChange} required />
                <Legenda htmlFor="senha">Senha:</Legenda>
                <Campo ref={this.senhaRef} type="password" id="senha" name='senha' placeholder="Senha" onChange = {this.handleChange} required minLength={6} />
                <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
                <Link url="/conta"> Criar uma conta</Link>
            </main>
        )
    }
}

    export default Login