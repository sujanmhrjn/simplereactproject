import React from 'react';
import ReactHeader from '../components/Header';


const MainLayout = (props) => {
    return(
        <div>
            <ReactHeader/>
            {props.children}
            <br/>
            <p>&copy; Copyright 2020. All Rights Reserved</p>
        </div>
    )
}

export default MainLayout;