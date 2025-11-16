import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        🚀 Linera Onchain App (Frontend Ready!)
      </h1>

      <div className="card" style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Count is {count}
        </button>

        <p style={{ marginTop: "10px" }}>
          Edit <code>src/App.jsx</code> and save — HMR will update instantly 🔥
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a
          href="https://github.com/barikjoydeep"
          target="_blank"
          style={{ color: "#42b883", fontSize: "18px" }}
        >
          Visit My GitHub →
        </a>
      </div>
    </>
  );
}

export default App;
