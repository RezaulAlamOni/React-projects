
const txt = "REZAUL";
function Hello(props) {
    const {name ,last_name} = props;
    return (
        <div>
            <h1>Hello {props.name} {props.last_name}</h1>
            <h1>Hello {name} {last_name}</h1>
        </div>
    )
}

export default Hello;
