
import React, { Component } from "react";
import "./campo.css"


class Campo extends Component {
    constructor(props) {
        super(props)
        this.valor = ""
        this.state = { modificado: false, erro: "" }
    }


    getValor = () => {
        return this.valor;
    }

    temErro = () => {
        if (!this.state.modificado || this.state.erro) {
            return true
        } else {
            return false
        }
    }

    validar = (evento) => {

        const input = evento.target
        const { value, type } = input
        const { required, minLength } = this.props
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regexTel = /^\(11\) 9\d{4}-\d{4}|\((?:1[2-9]|[2-9]\d)\) [5-9]\d{3}-\d{4}$/
        let mensagem = ""
        this.valor = value


        if (required && value.trim() === "") {
            mensagem = "Campo obrigatório"
        } else if (minLength && value.length < minLength) {
            mensagem = `Digite pelo menos ${minLength} caracteres`
        } else if (type === "email" && !regexEmail.test(value)) {
            mensagem = "Valor Inválido"
        } else if (type === "tel" && !regexTel.test(value)) {
            mensagem = "Valor Inválido"
        }
        this.setState({ modificado: true, erro: mensagem }, this.props.onChange)
    }

    render() {
        return (
            <div>
                <input
                    id={this.props.id}
                    className="caixa-texto"
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.validar}
                    onBlur={this.validar}
                />
                <p className="grupo__erro">{this.state.erro}</p>
            </div>
        )
    }
}


export default Campo



