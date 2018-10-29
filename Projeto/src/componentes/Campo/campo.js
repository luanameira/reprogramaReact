
import React, { Component } from "react";
import "./campo.css"


class Campo extends Component {
    constructor(props) {
        super(props)
        this.state = { erro: "" }
    }

    validar = (evento) => {

        const input = evento.target
        const { value, type } = input
        const { required, minLength } = this.props
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let mensagem = ""


        if (required && value.trim() === "") {
            mensagem = "Campo obrigatório"
        } else if (minLength && value.length < minLength) {
            mensagem = `Digite pelo menos ${minLength} caracteres`
        } else if (type === "email" && !regex.test(value)) {
            mensagem = "Valor Inválido"
        }
        this.setState({ erro: mensagem })
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
                    onBlur= {this.validar}
                />
                <p className="grupo__erro">{this.state.erro}</p>
            </div>
        )
    }
}


export default Campo



