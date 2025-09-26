import React, { useState } from "react";

function App() {
  const [selectedName, setSelectedName] = useState("Выбери имя");
  const [bgColor, setBgColor] = useState("lightgray");

  const names = ["Muhammadiyor", "Alisher", "Izzatillo"];
  const colors = ["red", "blue", "orange"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ismlar</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {names.map((name) => (
          <li key={name} style={{ marginBottom: "8px" }}>
            <button
              onClick={() => setSelectedName(name)}
              style={{
                padding: "6px 12px",
                border: "1px solid #999",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>

      <h2>Colors</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {colors.map((color) => (
          <li key={color} style={{ marginBottom: "8px" }}>
            <button
              onClick={() => setBgColor(color)}
              style={{
                padding: "6px 12px",
                border: "1px solid #999",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {color}
            </button>
          </li>
        ))}
      </ul>

      <div
        id="output"
        style={{
          marginTop: "30px",
          padding: "20px",
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#fff",
          background: bgColor,
          borderRadius: "10px",
          transition: "0.3s",
        }}
      >
        {selectedName}
      </div>
    </div>
  );
}

export default App;
