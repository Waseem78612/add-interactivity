import { useState } from "react";
export default function CounterUpdateState() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        textAlign: "center",
        width: "200px",
        borderRadius: "10px",
        color: "#333",
        marginTop: "20px",
      }}
    >
      <h2>Counter Update State</h2>
      <button
        onClick={() => handleIncrement()}
        style={{
          padding: "5px 10px",
          cursor: "pointer",
          backgroundColor: "#1f1f1f",
          color: "#fff",
          borderRadius: "5px",
          border: "none",
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          handleIncrement();
          handleIncrement();
          handleIncrement();
        }}
        style={{
          padding: "5px 10px",
          cursor: "pointer",
          backgroundColor: "#1f1f1f",
          color: "#fff",
          borderRadius: "5px",
          border: "none",
          marginLeft: "10px",
        }}
      >
        +3
      </button>
      <h1>Count: {count}</h1>
    </div>
  );
}
