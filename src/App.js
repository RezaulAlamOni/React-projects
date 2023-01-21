import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Message from "./components/Message";
import FunctionComponentEvent from "./components/FunctionComponentEvent";
function App() {
  return (
    <div className="App">
        <Hello name="Rezaul" last_name="Alam"/>
        <Message name="Rezaul"  last_name="Alam"/>
        <FunctionComponentEvent/>
    </div>
  );
}

export default App;
