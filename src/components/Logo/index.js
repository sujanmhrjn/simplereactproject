import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
function ReactLogo(props){
    return (
        <Link to="/" className="c-logo">
            <img src={Logo} alt="Company Name"/>
        </Link>
    )
}

export default ReactLogo;