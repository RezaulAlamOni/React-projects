import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Message from "./components/Message";
function App() {
  return (
    <div className="App">
        <Hello name="Rezaul" last_name="Alam"/>
        <Message name="Rezaul"  last_name="Alam"/>
    </div>
  );
}

export default App;
