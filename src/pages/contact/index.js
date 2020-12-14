import React,{Component} from 'react';
import MainLayout from '../../Layouts/mainLayout';

class ContactPage extends Component{
    
  constructor(props){
      super(props);
  
  }

   render(){
    
      const {id, name} = this.props.match.params;
       return (
            <MainLayout>
               <h1>Contact</h1>

               <p>Id: {id}</p>
               {name && <p>Name: {name}</p>}
            </MainLayout>
        );
   }
}
export default ContactPage;

