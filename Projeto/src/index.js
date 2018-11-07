import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider} from 'react-redux'
import store from './redux/store'
import Home from './pages/Home/home'
import QuemSomos from './pages/QuemSomos/quemsomos'
import Contato from './pages/Contato/contato'
import Conta from './pages/Conta/conta'
import Login from './pages/Login/paginaLogin'
import NavBar from './componentes/NavBar/navbar'
import NaoEncontrada from './pages/NaoEncontrada/naoEncontrada'
import './index.css'


function App() {
  return (
    <div className="app">
      <NavBar />

      <Switch>
        <Route path="/" exact component ={Home} />
        <Route path="/login" component={Login} />
        <Route path="/conta" component={Conta} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route path="/home" component={Home} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('projeto')
)