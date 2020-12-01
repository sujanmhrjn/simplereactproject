import React,{Component} from 'react';
import './home.css';
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            number:2,
            fullname:"",
            email:"",
            errors:{}
     
        }
        // this.incrementNumber=this.incrementNumber.bind(this);
    }
    incrementNumber=()=> {
       
        this.setState(state=>({
            number: ++state.number
        }));
    }
    decrementNumber=()=> {
   
        this.setState(state=>({
            number: --state.number
        }));
    }
    handleInputChange=(e)=>{
        this.setState({
            number: e.target.value
        })
    }

    handleInputChange= (e) =>{
     this.setState({
         [e.target.name]:e.target.value
     })
    }
    handleFormValidation = () => {
        let formError = {};
        if(!this.state.fullname) formError.fullname="Enter Fullname";
        if(!this.state.email) formError.email="Enter email";
        
        return formError;
    
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.handleFormValidation();
        this.setState({
            errors
        })
        // alert("submitted");
     
    }

    

   render(){
       return (
            <div>
                <h1>Increment/Decrement Value</h1>
                <div>
                    <button onClick={this.decrementNumber}>-</button>
                    <input type="text" value={this.state.number} onChange={this.handleInputChange}/>
                    <button onClick={this.incrementNumber}>+</button>
                </div>
                <h5>{this.state.number}</h5>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Full Name</label>
                        <br/>
                        <input type="text" name="fullname" onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <br/>
                        <input type="text" name="email" onChange={this.handleInputChange}/>
                    </div>
                  
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
   }
}
export default HomePage;

