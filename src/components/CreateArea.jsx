import React from "react";
import { FaPaperclip } from "react-icons/fa"; // Import paperclip icon from react-icons

function CreateArea(props) {
  // Handle changes to the text fields
  function handleChange(event) {
    const { name, value } = event.target;
    props.setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  // Handle image upload and set the image as part of the note
  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        props.setNote((prevNote) => ({
          ...prevNote,
          image: reader.result, // Directly insert the image into the note
        }));
      };
      reader.readAsDataURL(file); // Convert the image to base64
    } else {
      // Reset the image if no file is selected
      props.setNote((prevNote) => ({
        ...prevNote,
        image: "", // Reset the image field
      }));
    }
  }

  // Handle the form submission and reset after
  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(props.note); // Add the note
    resetForm(); // Reset the form after adding the note
  }

  // Reset the form fields and image
  function resetForm() {
    props.setNote({ title: "", content: "", image: "" }); // Reset the note fields
    document.getElementById("image-upload").value = ""; // Reset the file input
  }

  return (
    <div className="create-note">
      <form onSubmit={handleSubmit}>
        {/* Display the image if it's selected */}
        {props.note.image && (
          <div className="image-preview-container">
            <img src={props.note.image} alt="Selected" />
          </div>
        )}

        {props.isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={props.note.title || ""}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={props.onExpand}
          onChange={handleChange}
          value={props.note.content || ""}
          placeholder="Take a note..."
          rows={props.isExpanded ? 5 : 1}
        />

        {/* Image Upload Input with Paperclip Icon */}
        {props.isExpanded && (
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
              <FaPaperclip size={24} color="#333" />
            </label>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              onChange={handleImageUpload}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateArea;