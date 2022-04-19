import './App.css';
import {useState} from "react";
import Button from './components/UI/Button/Button';

function App() {
  const [showPrargraph, setShowPrargraph] = useState(false);

  console.log("App running")
  
  const toggleParagraphHandler = () => {
    setShowPrargraph(prevShowPrargraph => !prevShowPrargraph)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPrargraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Prargraph</Button>
    </div>
  );
}

export default App;
