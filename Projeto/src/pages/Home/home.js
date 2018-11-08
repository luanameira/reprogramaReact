import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './home.css'
import Postit from '../../componentes/Postit/postit'
import carregando from "./loading.svg"

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {carregando: true}
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
        </div>
      )}
      </main>
    )
  }
}



export default connect((state) => ({ usuario: state.usuario }))(Home)