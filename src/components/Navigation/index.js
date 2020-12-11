import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {
        name:"Home",
        url:"/"
    },
    {
        name:"About",
        url:"/about"
    },
    {
        name:"Contact",
        url:"/contact"
    },
    {
        name:"Movies",
        url:"/movies"
    }
]
const ReactNavigation = () => {
    return(
       <div className="c-navigation">
           <ul className="nav-list">
                {links.map((link,ind)=>(
                    <li key={ind}><NavLink to={link.url}>{link.name}</NavLink></li>
                ))}
           </ul>
       </div> 
    )
}
export default ReactNavigation;