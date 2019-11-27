import React from "react"

let styles ={
    border:'black 1px solid',
    padding:'10px',
    margin:'10px',
    width:'50px',
    textAlign:'center',
    fontSize:'32px'
}

export default class Counter extends React.Component {
    // State is a normal JavaScript object
    state = {
        count:0,
        colour:'blue'
    }
    
    // JavaScript constructor
    constructor(props) {
        super(props); // add this line for black magic
        this.increment = this.increment.bind(this); // black magic
    }
    
    increment()
    {
         // setState will update the state and cause 
         // the component to refresh itself
         
         
         let currentCount = this.state.count;
         let nextColour="";
         currentCount += 1;
         if (currentCount % 2 == 0) {
             nextColour = "blue"
         } else {
             nextColour = "red"
         }
         
         //this.state.count = this.state.count + 1; // WRONG!!
         
         this.setState({
             count: this.state.count + 1,
             colour: nextColour
         })
    }
    
    render() {
        
        let textStyle = {
            color: this.state.colour        
        }
        
        return (
        <div>
            <div style={styles}>
                <p style={textStyle}>{this.state.count}</p>
            </div>
        
            <button onClick={this.increment}>+</button>
        </div>    
        )
    }
}