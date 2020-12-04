import React from 'react';

class ReactLoop extends React.Component{
    constructor(props){
        super(props);
        this.state={
                start:0,
                end:4,
                email:"",
                name:"",
                hobbies:["Football","Cycling", "Singing","Dancing"],
                users:[
                    {
                        id:1,
                        name:"Ramesh",
                        email:"Ramesh@gmail.com"
                    },
                    {
                        id:2,
                        name:"Hari",
                        email:"hari@gmail.com"
                    },
                    {
                        id:3,
                        name:"Rita",
                        email:"rita@gmail.com"
                    },
                    {
                        id:4,
                        name:"Gita",
                        email:"gita@gmail.com"
                    },
                    {
                        id:5,
                        name:"Ramesh",
                        email:"Ramesh@gmail.com"
                    },
                    {
                        id:6,
                        name:"Hari",
                        email:"hari@gmail.com"
                    },
                    {
                        id:7,
                        name:"Rita",
                        email:"rita@gmail.com"
                    },
                    {
                        id:8,
                        name:"Gita",
                        email:"gita@gmail.com"
                    }
                ]
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    addUser=(e)=>{
        e.preventDefault();
        // const oldUsers = this.state.users;
        // const newUsers = [ {
        //     name:this.state.name,
        //     email:this.state.email
        // }]
        // const joinUsers = oldUsers.concat(newUsers)
        // this.setState({
        //     users:joinUsers
        // })
        // Object.assign([]);
        const usersLength = this.state.users.length;
        this.setState(state=>({
            users:[...state.users, {id:usersLength+1, name:this.state.name, email:this.state.email}]
        }))
        
    }
    render(){
        const {hobbies, users,start,end} = this.state;
        return(
            <div>
                <form onSubmit={this.addUser}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Add User</button>
                    </div>
                </form>
                <h1>List:hobbies</h1>
                {
                    hobbies.map((hobby,i)=>{
                        return hobby;
                    })
                }
                <h2>List:Users</h2>
                <ul>
                {
                    users.map((user,index)=>{
                      
                        return(
                            <li key={index}>{user.name}, {user.email}</li>
                        )
                    })
                }
                </ul>

                <h2>List: Users</h2>
                <table width="400" border="1">
                    <tbody>
                    {
                        users.map((user,index)=>{
                       
                         return  ( 
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                            )
                         
                        }) 
                    }            
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ReactLoop;