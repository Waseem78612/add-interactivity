import { useImmer } from "use-immer";
export default function FormObject() {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  function handleNameChange(e) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#1a1a1a", // Dark background
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)", // Darker shadow
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#e0e0e0", // Light text color
      }}
    >
      <h2
        style={{
          margin: "0 0 10px 0",
          color: "#ffffff", // White for headings
          fontSize: "28px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Artwork Profile
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <label
          htmlFor="name"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#b0b0b0", // Light gray for labels
          }}
        >
          Name:
          <input
            id="name"
            value={person.name}
            onChange={handleNameChange}
            type="text"
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #444444", // Dark border
              fontSize: "16px",
              transition: "all 0.3s ease",
              outline: "none",
              backgroundColor: "#2d2d2d", // Dark input background
              color: "#ffffff", // White text in inputs
            }}
            onFocus={(e) => (e.target.style.borderColor = "#4a9eff")} // Brighter blue for focus
            onBlur={(e) => (e.target.style.borderColor = "#444444")}
          />
        </label>

        <label
          htmlFor="title"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#b0b0b0",
          }}
        >
          Title:
          <input
            id="title"
            value={person.artwork.title}
            onChange={handleTitleChange}
            type="text"
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #444444",
              fontSize: "16px",
              transition: "all 0.3s ease",
              outline: "none",
              backgroundColor: "#2d2d2d",
              color: "#ffffff",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#4a9eff")}
            onBlur={(e) => (e.target.style.borderColor = "#444444")}
          />
        </label>

        <label
          htmlFor="city"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#b0b0b0",
          }}
        >
          City:
          <input
            id="city"
            value={person.artwork.city}
            onChange={handleCityChange}
            type="text"
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #444444",
              fontSize: "16px",
              transition: "all 0.3s ease",
              outline: "none",
              backgroundColor: "#2d2d2d",
              color: "#ffffff",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#4a9eff")}
            onBlur={(e) => (e.target.style.borderColor = "#444444")}
          />
        </label>

        <label
          htmlFor="image"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#b0b0b0",
          }}
        >
          Image URL:
          <input
            id="image"
            value={person.artwork.image}
            onChange={handleImageChange}
            type="text"
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #444444",
              fontSize: "16px",
              transition: "all 0.3s ease",
              outline: "none",
              backgroundColor: "#2d2d2d",
              color: "#ffffff",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#4a9eff")}
            onBlur={(e) => (e.target.style.borderColor = "#444444")}
          />
        </label>
      </div>

      <div
        style={{
          marginTop: "10px",
          padding: "20px",
          backgroundColor: "#2d2d2d", // Dark card background
          borderRadius: "12px",
          border: "1px solid #444444", // Dark border
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "18px",
            fontWeight: "500",
            color: "#ffffff", // White text
            textAlign: "center",
            paddingBottom: "15px",
            borderBottom: "2px solid #444444", // Dark divider
          }}
        >
          {person.name} - {person.artwork.title} - {person.artwork.city}
        </p>

        {person.artwork.image && (
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={person.artwork.image}
              alt={person.artwork.title}
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                borderRadius: "10px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                objectFit: "contain",
                backgroundColor: "#1a1a1a", // Dark image background
                padding: "10px",
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/400x300/2d2d2d/888888?text=Image+Not+Found"; // Dark placeholder
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
