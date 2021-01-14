import './App.css';
import { useState, useEffect} from 'react';


function App() {

  const [clicks, setClicks] = useState(0);

  const addClick = () => {
    console.log("Button was clicked")
  };

  return (
    <div className="App">
      <div>Welcome to the clicker app.</div>
      <div>
  <div>You have clicked the button this many times: {clicks}</div>
        <button
        onClick={() => {
          addClick()
        }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
