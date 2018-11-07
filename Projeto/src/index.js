import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import store from './redux/store'
import Home from './pages/Home/home'
import QuemSomos from './pages/QuemSomos/quemsomos'
import Contato from './pages/Contato/contato'
import Conta from './pages/Conta/conta'
import Login from './pages/Login/paginaLogin'
import NavBar from './componentes/NavBar/navbar'
import NaoEncontrada from './pages/NaoEncontrada/naoEncontrada'
import './index.css'


function App(props) {

  const usuario = props.usuario
  const logaUsuario = props.logaUsuario
  const deslogaUsuario = props.deslogaUsuario

  return (
    <div className="app">
      <NavBar />

      <Switch>
        <Route path="/" exact render={() => {
          return usuario ? <Home /> : <Redirect to="/login" />
        }} />

        <Route path="/login" component ={Login}/>
        }} />

        <Route path="/conta" component={Conta} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route path="/home" component={Home} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  )
}


function passaDadosDoEstadoParaMeuComponente(state) {
  const props = {
    usuario: state.usuario
  }
  return props
}


function passaFuncoesQueDisparamAcoesViaProps(dispatch) {
  const props = {
    logaUsuario: (dados) => {
      const acao = {
        type: 'LOGA_USUARIO',
        dados: dados
      }
      dispatch(acao)
    },
    deslogaUsuario: () => {
      const acao = {
        type: 'DESLOGA_USUARIO'
      }
      dispatch(acao)
    },
    
  }
  return props
}

const conectaNaStore = connect(passaDadosDoEstadoParaMeuComponente,
  passaFuncoesQueDisparamAcoesViaProps)

const AppConectada = withRouter(conectaNaStore(App))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppConectada />
    </BrowserRouter>
  </Provider>,
  document.getElementById('projeto')
)