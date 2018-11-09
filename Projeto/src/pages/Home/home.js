import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './home.css'
import Postit from '../../componentes/Postit/postit'
import carregando from "./loading.svg"

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {carregando: false}
  }

  render() {
    if (!this.props.usuario) {

      return (<Redirect to="/login" />
      )
    }

    return (
      <main className="home">
      {this.state.carregando ? (
        <img className="home__loading" src={carregando} alt='Carregando' />
      ) : (
        <div>
          <Postit />
          <div>
            {this.props.postit.map(postit =>(
              <Postit  key={postit.id} id={postit.id} titulo={postit.titulo} texto={postit.texto} />
            ))}
          </div>
        </div>
      )}
      </main>
    )
  }
}



export default connect((state) => ({ usuario: state.usuario, postit: state.postits }))(Home)