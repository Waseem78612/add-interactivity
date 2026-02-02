import React, { useState } from "react";

export default function FormMessage() {
  const [to, toSet] = useState("Alice");
  const [message, setMessage] = useState("Hello");
  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said  ${message} to ${to}`);
    }, 500);
  }
  return (
    <div
      style={{
        backgroundColor: "purple",
        padding: "20px",
        textAlign: "start",
        width: "400px",
        borderRadius: "10px",
        color: "white",
        marginBottom: "20px",
      }}
    >
      <h1>Message Form</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <select
            name=""
            id=""
            value={to}
            onChange={(e) => toSet(e.target.value)}
            style={{
              width: "150px",
              cursor: "pointer",
              padding: "10px",
              color: "#fff",
              backgroundColor: "#1f1f1f",
              borderRadius: "5px",
              transition: "background-color 0.2s ease",
              border: "none",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "gray")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1f1f1f")}
          >
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            height: "120px",
            resize: "none",
            padding: "8px",
            boxSizing: "border-box",
            overflow: "auto",
            color: "#fff",
            backgroundColor: "#1f1f1f",
            borderRadius: "5px",
            transition: "background-color 0.2s ease",
          }}
        />
        <button
          type="submit"
          style={{
            width: "150px",
            cursor: "pointer",
            padding: "10px",
            color: "#fff",
            backgroundColor: "#1f1f1f",
            borderRadius: "5px",
            transition: "background-color 0.2s ease",
            border: "none",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "gray")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#1f1f1f")}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
