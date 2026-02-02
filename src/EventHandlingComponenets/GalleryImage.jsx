import { useState } from "react";
import { sculptureList } from "./galleryImageData";

export default function GalleryImage() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handleMoreClick() {
    setShowDetails(!showDetails);
  }
  let currentSculpture = sculptureList[index];
  return (
    <div
      className="galleryImage"
      style={{
        backgroundColor: "green",
        textAlign: "start",
        margin: "30px 0px",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          margin: "0 5px",
          padding: "5px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          color: "#fff",
          backgroundColor: "#1f1f1f",
          border: "1px solid #ccc",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "gray")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#1f1f1f")}
      >
        Next
      </button>
      <h2>
        <i>{currentSculpture.name}</i> By {currentSculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button
        style={{
          margin: "0 5px",
          padding: "5px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          color: "#fff",
          backgroundColor: "#1f1f1f",
          border: "1px solid #ccc",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "gray")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#1f1f1f")}
        onClick={handleMoreClick}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      <p>
        {showDetails
          ? currentSculpture.description
          : "Click the button to see details."}
      </p>
      <img src={currentSculpture.url} alt={currentSculpture.alt} />
    </div>
  );
}
