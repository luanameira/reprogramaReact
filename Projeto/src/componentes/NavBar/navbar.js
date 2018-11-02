import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import Menu from '../Menu/menu'
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

export default NavBar