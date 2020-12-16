import React from 'react';
import ReactHeader from '../components/Header';
import ReactFooter from '../components/Footer';


const MainLayout = (props) => {
    return(
        <div>
            <ReactHeader/>
            {props.children}
            <br/>
            <ReactFooter/>
            
        </div>
    )
}

export default MainLayout;