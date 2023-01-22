import {Component} from "react";

class Message extends Component{
    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState({
            counter : ++this.state.counter
        })
    }
    decrement( ){
        if (this.state.counter > 0){
            this.setState({
                counter : --this.state.counter
            })
        }

    }
    decrementArrow = ()=> {
        if (this.state.counter > 0){
            this.setState({
                counter : --this.state.counter
            })
        }
    }

    render() {
        const {last_name} = this.props;
        return (
           <div>
               <h2>{this.props.name}</h2>
               <h2>{last_name}</h2>
               <h3>Counter : {this.state.counter}</h3>
               <button onClick={()=>this.increment()}>Increment</button>

               {/* binding a method*/}
               <button onClick={this.decrement}>Decrement Bind Function</button>
               {/* arrow function don't need to bind*/}
               <button onClick={this.decrementArrow}>Decrement Arrow</button>
           </div>
           )
    }
}

export default Message;
