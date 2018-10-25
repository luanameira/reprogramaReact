import React from "react";
import "./campo.css"


function Campo(props){
    return (<input className="caixa-texto" type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>)

}


export default Campo