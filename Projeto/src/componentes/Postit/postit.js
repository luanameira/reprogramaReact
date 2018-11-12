import React, { Component } from "react";
import { cadastraPostit, alteraPostit, removePostit } from '../../redux/actions'
import { connect } from 'react-redux'
import "./postit.css"
import {MdDelete} from 'react-icons/md'


class Postit extends Component {
    constructor(props) {
        super(props)
        this.state = { editando: false }

    }

    cadastraOuAlteraPostit = (event) => {
        event.preventDefault()

        const cadastrando = !this.props.id
        const form = event.target

        if (cadastrando) {
            const dados = {
                titulo: form.titulo.value,
                texto: form.texto.value
            }
            this.props.cadastraPostit(dados)

            form.reset()
        } else {
            const dados = {
                id: this.props.id,
                titulo: form.titulo.value,
                texto: form.texto.value

            }

            this.props.alteraPostit(dados)

            this.setState({ editando: false })

        }
    }
    habilitaEdicao = () => {
        this.setState({ editando: true })
    }

    apagaPostit = (event) => {
        event.stopPropagation()
        const id = this.props.id
        this.props.removePostit(id)
    }



    render() {
        const cadastrando = !this.props.id

        return (
            <form className="postit" onClick={this.habilitaEdicao} onSubmit={this.cadastraOuAlteraPostit}>
                {!cadastrando && this.state.editando && (
                    <button className='postit__botao-remover' onClick={this.apagaPostit} type='button'> <MdDelete /> </button>
                )}
                <input className='postit__titulo' type='text' name='titulo' autoComplete='off' placeholder='Título' defaultValue={this.props.titulo} />
                <textarea className='postit__texto' type='text' name='texto' autoComplete='off' placeholder='Digite um texto' defaultValue={this.props.texto} rows={5} />
                {(cadastrando || this.state.editando) && (
                    <input className='postit__botao-concluir' type='submit' value='Concluído' />
                )}
            </form>)
    }
}



export default connect(null, { cadastraPostit, alteraPostit, removePostit })(Postit)
