import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      className="App"
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0099CC"
      }}
    >
      <header>
        <h1 className="App-title" style={{ color: "white" }}>
          Playst's Interview Task
        </h1>
      </header>

      <Dashboard />
    </div>
  );
}

export default App;
