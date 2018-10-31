import React, {Component} from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/legenda"
import Campo from "../../componentes/Campo/campo"
import "./conta.css"


class Conta extends Component {
constructor(props){
super(props)
this.emailRef = React.createRef()
        this.senhaRef = React.createRef()
        this.telefoneRef = React.createRef()
        this.nomeRef = React.createRef()
        this.state = { desabilitado: true }

}

handleChange = () => {

    const campoNome = this.nomeRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if(campoEmail.temErro() || campoSenha.temErro() || campoNome.temErro() || campoTelefone.temErro()){
        this.setState ({desabilitado : true})
        }else{
            this.setState ({desabilitado : false})
        }
    }

render () {
return (
        <main className="conta">
            <h1>Conta</h1>
            <p>Envie um formulário para criar uma conta.</p>
            <Legenda htmlFor="nome">Nome:</Legenda>
            <Campo ref={this.nomeRef} type="text" id="nome" name='nome' placeholder="Nome" onChange = {this.handleChange} required />
            <Legenda htmlFor="telefone">Telefone:</Legenda>
            <Campo ref={this.telefoneRef} type="tel" id="tel" name='Telefone' placeholder="Telefone" onChange = {this.handleChange} required />
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo ref={this.emailRef} type="email" id="email" name='email' placeholder="Email" onChange = {this.handleChange} required/>
            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo ref={this.senhaRef} type="password" id="senha" name='senha' placeholder="Senha" onChange = {this.handleChange} required minLength={6} />
            <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
            <Link url="/login">Fazer Login</Link>
        </main>
    )
}
}

export default Conta