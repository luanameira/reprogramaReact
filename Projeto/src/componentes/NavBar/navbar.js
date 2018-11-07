import React from 'react'
import {Link , withRouter } from 'react-router-dom'
import logo from './logo.png'
import Menu from '../Menu/menu'
import { connect } from 'react-redux'
import './navbar.css'


function NavBar(props){

    return (
        <header className='navbar'>
        <Link to='/'>
        <img className='navbar__logo' src={logo}alt='logo'/>
        </Link>
        <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario}/>
        </header>
    )
}   

function passaNoPropsDadosDoEstado(state){
    return {
        usuario: state.usuario
    }
}

function passaNoPropsDisparadoresDeAcao(dispatch){
    return{
        deslogaUsuario: () =>{
            const acao = {
                type: 'DESLOGA_USUARIO'
            }
            dispatch(acao)
        }
    }
}

const conectaNaStore = connect(passaNoPropsDadosDoEstado, passaNoPropsDisparadoresDeAcao)
  
  const NavBarConectado = conectaNaStore(NavBar)

export default withRouter(NavBarConectado)