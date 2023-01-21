import {Component} from "react";

class ClassBaseComponentsEvent extends Component{

    handleEvent(){
        console.log('Click Event fro class base component')
    }
    render() {
        return (
            <div>
                <h1>Class Base Components Event</h1>

                <button onClick={this.handleEvent}>Click Handle</button>
            </div>
        )
    }
}

export default ClassBaseComponentsEvent;
