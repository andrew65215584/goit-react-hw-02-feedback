import React from 'react';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h1> Statistics</h1>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p> Total: {total}</p>
      <p> Positive feedback: {positivePercentage.toFixed(2)} %</p>
    </>
  );
}

export default Statistics;
