import React from 'react';

function FeedbackOptions({ options }) {
  return (
    <>
      <button name="good" onClick={options}>
        Good
      </button>
      <button name="neutral" onClick={options}>
        Neutral
      </button>
      <button name="bad" onClick={options}>
        Bad
      </button>
    </>
  );
}

export default FeedbackOptions;
