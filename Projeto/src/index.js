import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./index.css";
import Login from "./pages/Login/paginaLogin";
import Conta from "./pages/Conta/conta";
import QuemSomos from "./pages/QuemSomos/quemsomos";
import Contato from "./pages/Contato/contato"


function App() {
    return (
        <div className="app">
            {/* NAV BAR */}

            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/conta" component={Conta} />
                <Route path="/login" component={Login} />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </div>

    )
}



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("projeto")
)