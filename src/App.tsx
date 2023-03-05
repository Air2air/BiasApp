import { useState } from "react";
import "./styles/App.css";
import Footer from "components/Footer/footer";
import Navbar from "components/Navbar/navbar";
import Sparkline from "components/Sparkline/sparkline";

function App() {
  const [count, setCount] = useState(0);

  const sparklineData = {
    name: "Page A",
    range: 100,
    value: -54,
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Sparkline data={sparklineData} />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <h1>Vite + React</h1>
        <div className="card">
          <button
            className="btn"
            onClick={() => setCount((count) => count + 1)}
          >
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
      <Footer />
    </>
  );
}

export default App;
