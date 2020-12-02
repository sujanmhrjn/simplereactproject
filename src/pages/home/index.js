import React,{Component} from 'react';
import './home.css';
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            number:2,
            fullname:"",
            email:"",
            errors:{},
            
     
        }
        // this.incrementNumber=this.incrementNumber.bind(this);
    }
    // incrementNumber=()=> {
       
    //     this.setState(state=>({
    //         number: ++state.number
    //     }));
    // }
    // decrementNumber=()=> {
   
    //     this.setState(state=>({
    //         number: --state.number
    //     }));
    // }
  

    handleInputChange= (e) =>{
     this.setState({
         [e.target.name]:e.target.value
     })
    }
    handleFormValidation = () => {
        let formError = {};
        const emailRegex = /^[A-Za-z0-9\.\-\_]+[\@]{1}[A-Za-z]+[\.]{1}[a-z]{2,}$/;
        if(this.state.fullname === "") formError.fullname="Enter Fullname";
        if(!this.state.email) formError.email="Enter email";
        if(!emailRegex.test(this.state.email)) formError.email="Invalid Email Address";
        return formError;
    
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.handleFormValidation();
        this.setState({
            errors
        })
        if(Object.keys(errors).length){
            
        }else{
            alert("You are good to go")
        }

        // Object.keys(errors).length?"there's an error":alert("You are good to go")
        
    }

    

   render(){
       const {errors} = this.state;
       const emailError = `forminput ${errors && errors.email?'error':''}`  ;
     
       return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                       
                        <input type="text" name="fullname" onChange={this.handleInputChange} className={`forminput ${errors && errors.fullname?'error':''}`}/>
                        {errors?.fullname && <p>{errors.fullname}</p>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                       
                        <input type="text" name="email" onChange={this.handleInputChange} className={emailError}/>
                        {errors && errors.email && <p>{errors.email}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
   }
}
export default HomePage;

