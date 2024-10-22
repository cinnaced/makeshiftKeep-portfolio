import React from "react";
import Linkify from "react-linkify";

function Note(props) {
  const MAX_LENGTH = 200;

  const truncatedContent =
    props.content.length > MAX_LENGTH
      ? props.content.substring(0, MAX_LENGTH) + "..."
      : props.content;

  function handleNoteClick() {
    props.onReadMore(); // Open expanded view (modal)
  }

  return (
    <div className="note" onClick={handleNoteClick}>
      <h1>{props.title || "Untitled"}</h1>
      <Linkify>
        <p>{truncatedContent}</p>
      </Linkify>

      {props.image && (
        <img src={props.image} alt="Note" className="note-image" />
      )}

      <button
        className="expand-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent bubbling
          props.onReadMore();
        }}
      >
        <br />
      </button>

      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent bubbling
          props.onDelete(props.id);
        }}
      >
        🗑
      </button>
    </div>
  );
}

export default Note;