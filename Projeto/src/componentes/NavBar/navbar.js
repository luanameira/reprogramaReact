import React from 'react'
import {Link , withRouter } from 'react-router-dom'
import logo from './logo.png'
import Menu from '../Menu/menu'
import { connect } from 'react-redux'
import './navbar.css'
import {deslogaUsuario} from '../../redux/actions'


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
    


export default withRouter(
    connect(
        (state) => ({usuario: state.usuario}), {deslogaUsuario}
    )(NavBar)
)