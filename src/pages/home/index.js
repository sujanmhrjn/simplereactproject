import React,{Component} from 'react';
import './home.css';
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            number:2,
            fullname:"",
            email:"",
            postcode:""
        }
        // this.incrementNumber=this.incrementNumber.bind(this);
    }
    incrementNumber=()=> {
        this.setState({
            number: ++this.state.number
        });
    }
    decrementNumber=()=> {
        this.setState({
            number:  --this.state.number
        });
    }
    handleInputChange=(e)=>{
        this.setState({
            number: e.target.value
        })
    }

    handleFormInputChange= (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
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

                <form>
                    <div>
                        <label>Full Name</label>
                        <br/>
                        <input type="text" name="fullname" onChange={this.handleFormInputChange}/>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <br/>
                        <input type="email" name="email" onChange={this.handleFormInputChange}/>
                    </div>
                    <div>
                        <label>Post Code</label>
                        <br/>
                        <input type="number" name="postcode" onChange={this.handleFormInputChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
   }
}
export default HomePage;

