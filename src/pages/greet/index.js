import React,{Component} from 'react';

class GreetPage extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
        //const fname = this.props.fname;
        const {fname, lname} = this.props;
   
        return (
                // <h1>Welcome {fname} {lname} {</h1>
                <h1>{`Welcome ${fname} ${lname}`}</h1>
            );
    }
}
export default GreetPage;