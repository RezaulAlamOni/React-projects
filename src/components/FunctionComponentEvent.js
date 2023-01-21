function FunctionComponentEvent() {
    function handleCLick() {
        console.log('Handle CLick')
    }

    const handleClickF = ()=>{
        console.log('Handle CLick 5554')
    }
    return (
        <div>
            <h2>Function Component </h2>
            <button onClick={handleCLick}>Click</button>
            <button onClick={handleClickF}>Click For count</button>
        </div>
    )
}
export default FunctionComponentEvent;
