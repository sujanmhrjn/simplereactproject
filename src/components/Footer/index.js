import React from 'react';

const ReactFooter = () => {
    const date =  new Date();
    return (
        <div className="c-footer">
            <div className="container">
                <p>&copy; Copyright { date.getFullYear() }. All Rights Reserved</p>
            </div>
        </div>
    )
}


export default ReactFooter;