import React, { Component } from "react";
import { cadastraPostit } from '../../redux/actions'
import { connect } from 'react-redux'
import "./postit.css"


class Postit extends Component {
    constructor(props) {
        super(props)
        this.state = ""

    }

    cadastraOuAlteraPostit = (event) => {
        event.preventDefault()

        const form = event.target
        const dados = {
            id: `04e43ce0-9fa6-4c61-ab3e-a1138b741705${Math.random(100)}`,
            titulo: form.titulo.value,
            texto: form.texto.value
        }
        this.props.cadastraPostit(dados)

        form.reset()
    }

    render() {
        const cadastrando = !this.props.id

        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
                {/* <input className='postit__botao-remover' type='submit' value='x' /> */}
                <input className='postit__titulo' type='text' name='titulo' autoComplete='off' placeholder='Título' defaultValue={this.props.titulo} />
                <textarea className='postit__texto' type='text' name='texto' autoComplete='off' placeholder='Digite um texto' defaultValue={this.props.texto} rows={5} />
                <input className='postit__botao-concluir' type='submit' value='Concluído' />
            </form>)
    }
}



export default connect(null, { cadastraPostit })(Postit)
