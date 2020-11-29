import React, {Component} from 'react';
import GreetPage from '../greet';

class AboutPage extends Component{
    render(){
        return (
            <div>
                <h1 align="center">About Page</h1>
                <p>This is about text</p>

                <GreetPage fname="Hari" lname="Sharma"/>
                <GreetPage fname="Dinesh" lname="Maharjan"/>
                <GreetPage fname="Sid"/>
                <GreetPage fname="Sanjay"/>

            </div>
        )
    
    }
}
export default AboutPage;