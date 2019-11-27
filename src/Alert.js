import React from "react"

let alertStyle = {
            padding:'10px',
            backgroundColor:'#ffa896',
            fontColor:'white',
            margin:'5px',
            borderRadius:'5px'
        }

// class Alert(React.Component) <-- Python syntax
export default class Alert extends React.Component {
    
    state = {
        'message':'We will be opened during New Year'
    }
    
    render() {
       alertStyle.backgroundColor = this.props.color;
    
       return (
        <div style={alertStyle}>
            <p>{this.props.message}</p>
        
        </div>
      )
    }
    
   
}