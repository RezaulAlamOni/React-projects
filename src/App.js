import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Message from "./components/Message";
import FunctionComponentEvent from "./components/FunctionComponentEvent";
import ClassBaseComponentsEvent from "./components/ClassBaseComponentsEvent";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
        <Hello name="Rezaul" last_name="Alam"/>
        <Message name="Rezaul"  last_name="Alam"/>
        <FunctionComponentEvent/>
        <ClassBaseComponentsEvent />
        <Products/>
    </div>
  );
}

export default App;
