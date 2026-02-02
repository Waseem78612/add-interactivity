export default function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div
      className="Toolbar"
      style={{
        height: "50px",
        width: "400px",
        backgroundColor: "lightgreen",
        margin: "auto",
        paddingTop: "20px",
        borderRadius: "20px",
      }}
    >
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}
function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
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
      {children}
    </button>
  );
}
