import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login/paginaLogin";
import Conta from "./pages/Conta/conta";


const divisaoProjeto = document.getElementById("projeto");

//ReactDOM.render(elemento React, tag html)
ReactDOM.render(<Login />, divisaoProjeto)