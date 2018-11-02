import React from "react";
import "./Link.css";
import {Link as PaginaLink} from 'react-router-dom'


function Link(props) {
    return (<PaginaLink className='link' to={props.url}>{props.children}
    </PaginaLink>);
}

export default Link