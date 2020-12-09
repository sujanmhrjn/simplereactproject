import React from 'react';

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        console.log("1 From Constructor");
        
    }
    componentDidMount(){
        //$(document).ready(function(){});
        //window.load= function(){}
     

        console.log("3 Loaded after constructor & Render: componentDidMount");
        
      
    }

    componentWillUnmount(){
        console.log("4 Unmounted");
    }
    render(){
        console.log("2 From Render");
       
           return( <div>
                Hello
                </div>
           );
        
    }
}
export default Lifecycle;