import './App.css';
import { useState} from 'react';


function App() {

  const [clicks, setClicks] = useState(0);

  const addClick = () => {
    let newClicks = (clicks + 1)
    setClicks(newClicks)
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
