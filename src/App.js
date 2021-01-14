import './App.css';
import { useState} from 'react';


function App() {

  const [clicks, setClicks] = useState(0);

  const addClick = () => setClicks(clicks + 1);

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
