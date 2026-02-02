import React from "react";
import { useImmer } from "use-immer";

export default function BucketList() {
  const [buckets, updateBuckets] = useImmer([
    { id: 1, title: "Visit Japan", done: false },
    { id: 2, title: "Learn React", done: false },
    { id: 3, title: "Build a Portfolio", done: false },
  ]);

  function handleToggle(artworkId, nextDone) {
    updateBuckets((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      artwork.done = nextDone;
    });
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#121212",
        borderRadius: "20px",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#e0e0e0",
      }}
    >
      <h1
        style={{
          margin: "0 0 10px 0",
          color: "#ffffff",
          fontSize: "2.2rem",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        My Bucket List
      </h1>
      <h2
        style={{
          margin: "0 0 30px 0",
          color: "#a0a0a0",
          fontSize: "1.1rem",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        My List Of Art to see
      </h2>
      <ItemList artworks={buckets} onToggle={handleToggle} />
    </div>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 20px",
            backgroundColor: artwork.done ? "#1a2c3a" : "#1e1e1e",
            borderRadius: "12px",
            border: `1px solid ${artwork.done ? "#2e4a5e" : "#333333"}`,
            transition: "all 0.2s ease",
          }}
        >
          <input
            type="checkbox"
            checked={artwork.done}
            onChange={(e) => {
              onToggle(artwork.id, e.target.checked);
            }}
            style={{
              width: "20px",
              height: "20px",
              marginRight: "16px",
              cursor: "pointer",
              accentColor: artwork.done ? "#10b981" : "#3b82f6",
            }}
          />
          <label
            style={{
              flex: "1",
              fontSize: "1.1rem",
              color: artwork.done ? "#a0a0a0" : "#ffffff",
              fontWeight: artwork.done ? "400" : "500",
              textDecoration: artwork.done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {artwork.title}
          </label>
        </div>
      ))}
    </div>
  );
}
