import { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  //@ts-ignore
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => { //whenever renders it becomes to a new function! that
    //why button component keep renders even with react.memo(Button)
    //false === false | "test" === "test" (primartive type comparison - true)
    //[1,2,3] === [1.2.3] (false)
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);
 
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;