import React,{Component} from 'react';

class ContactPage extends Component{
    
  constructor(props){
      super(props);
  
  }

   render(){
    
      const {id, name} = this.props.match.params;
       return (
            <div>
               <h1>Contact</h1>

               <p>Id: {id}</p>
               {name && <p>Name: {name}</p>}
            </div>
        );
   }
}
export default ContactPage;

