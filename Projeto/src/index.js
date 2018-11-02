import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home/home'
import QuemSomos from './pages/QuemSomos/quemsomos'
import Contato from './pages/Contato/contato'
import Conta from './pages/Conta/conta'
import Login from './pages/Login/paginaLogin'
import NavBar from './componentes/NavBar/navbar'
import NaoEncontrada from './pages/NaoEncontrada/naoEncontrada'
import './index.css'

let usuario = JSON.parse(localStorage.getItem('usuario'))

function logaUsuario(dados) {
  const json = JSON.stringify(dados)
  localStorage.setItem('usuario', json)
  usuario = dados
}


function deslogaUsuario() {
  localStorage.removeItem('usuario')
  usuario = null
}

function App() {
  return (
    <div className="app">
      <NavBar usuario={usuario} deslogaUsuario = {deslogaUsuario} />

      <Switch>
        <Route path="/" exact render={() => {
          return usuario ? <Home /> : <Redirect to="/login" />
        }} />

        <Route path="/login" render={(props) => {
          return <Login historico={props.history} logaUsuario={logaUsuario} />
        }}/>
        
        <Route path="/conta" component={Conta}/>
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route path="/home" component={Home} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('projeto')
)