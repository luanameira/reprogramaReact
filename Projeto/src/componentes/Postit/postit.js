import React, { Component } from "react";
import "./postit.css"


class Postit extends Component {
    constructor(props) {
        super(props)
        this.state = ""

    }

    render() {
        return (
            <form className="postit">
                <input className='postit__botao-remover' type='submit' />
                <input className='postit__titulo' type='text' placeholder='Digite um Título' />
                <textarea className='postit__texto' type='text' placeholder='Digite um lembrete' />
                <input className='postit__botao-concluir' type='submit' />
            </form>)
    }
}




export default Postit