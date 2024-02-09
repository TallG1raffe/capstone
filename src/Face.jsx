import React from 'react';
import './Face.css';

export function Face({ sentiment }) {
  let smiley = '';

  switch (sentiment) {
    case 'positive':
      smiley = '😊'; // Green smiley face
      break;
    case 'mixed':
      smiley = '😐'; // Neutral face
      break;
    case 'negative':
      smiley = '☹️'; // Red frowning face
      break;
    default:
      smiley = '';
  }

  return (
    <div className="smiley-face" >
      <span role="img" aria-label="smiley">
        {smiley}
      </span>
    </div>
  );
}