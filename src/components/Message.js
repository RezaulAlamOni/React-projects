import {Component} from "react";

class Message extends Component{
    constructor() {
        super();
        this.state = {
            counter : 0
        }
    }

    increment(){
        this.setState({
            counter : ++this.state.counter
        })
    }
    decrement(){
        this.setState({
            counter : --this.state.counter
        })
    }

    render() {
        const {last_name} = this.props;
       return (
           <div>
               <h2>{this.props.name}</h2>
               <h2>{last_name}</h2>
               <h3>Counter : {this.state.counter}</h3>
               <button onClick={()=>this.increment()}>Increment</button>
           </div>
           )
    }
}

export default Message;
