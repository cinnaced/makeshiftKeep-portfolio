import React from "react";

function ParseLink(text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  return text.split(urlPattern).map((part, index) =>
    urlPattern.test(part) ? (
      <a
        key={index}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#3498db", textDecoration: "underline" }}
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default ParseLink;