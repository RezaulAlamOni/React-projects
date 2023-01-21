import {useState} from "react";
function FunctionComponentEvent() {
    const [counter, setCounter] = useState(0);

    function handleCLick() {
        console.log('Handle CLick')
    }
    const handleClickF = ()=>{
        setCounter(counter+1 )
    }

    return (
        <div>
            <h2>Function Component </h2>
            <button onClick={handleCLick}>Click</button>

            <h2>Show Counter {counter}</h2>
            <button onClick={handleClickF}>Click For count</button>
        </div>
    )
}
export default FunctionComponentEvent;
