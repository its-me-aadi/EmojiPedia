import React from "react";
import "../App.css";

function Terms(term) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {term.emoji}
        </span>
        <span>{term.name}</span>
      </dt>
      <dd>{term.meaning}</dd>
    </div>
  );
}

export default Terms;
