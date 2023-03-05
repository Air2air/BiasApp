import { useState } from "react";
import "./App.css";
import TrendsSummary from "components/Trends/trendsSummary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TrendsSummary jsonFile="data/media.json" />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
