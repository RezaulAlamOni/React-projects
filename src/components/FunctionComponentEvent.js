import {useState} from "react";
function FunctionComponentEvent() {
    const [counter, setCounter] = useState(0);
    const [display, setDisplay] = useState(0);


    function handleCLick() {
        console.log('Handle CLick')
        setDisplay(0)
    }
    const handleClickF = ()=>{
        setCounter(counter+1 )
        setDisplay(1)
    }

    let output = '', output1;
    if (display) {
        output = <div><h2>Function Component </h2> <button onClick={handleCLick}>Click</button></div>;
    } else {
        output = <div>
            <h2>Show Counter EEE {counter}</h2>
            <button onClick={handleClickF}>Click For count New</button>
        </div>
    }

    output1 = display ? ( <h2>Show as ternary condition 1</h2>) :( <h2>Show as ternary condition 2</h2>);

    return (
        <div>
            {output1}
            {output}
        </div>
    )
}
export default FunctionComponentEvent;
