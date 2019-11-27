import React from "react"

export default class Feedback extends React.Component {
    // determine the state variables
    state = {
        name: "ABC",
        message: "",
        email:"'"
    }
    
    constructor(props) {
        super(props);
        this.updateName = this.updateName.bind(this); // black magic
        this.updateEmail = this.updateEmail.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        let fieldName = event.target.name; // email
        this.setState({
            [fieldName]: event.target.value
        })
    }
    
    updateName(event) {
        let newName = event.target.value;
        this.setState({
            name:newName
        })
    }
    
    updateEmail(event) {
        let newEmail = event.target.value;
        this.setState({
            email:newEmail
        })
    }
    
    updateMessage(event) {
        let message = event.target.value;
        this.setState({
            message:message
        })
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type='text' value={this.state.name} name='name' onChange={this.handleChange} placeholder="Your name"/><br/>
                    <input type='text' placeholder="Email" name='email' onChange={this.handleChange}/><br/>
                    <textarea placeholder="Message" name='message' onChange={this.handleChange}/>
                </form>
                <h1>Summary</h1>
                <p>Your name: {this.state.name}</p>
            </div>
        )
    }
}