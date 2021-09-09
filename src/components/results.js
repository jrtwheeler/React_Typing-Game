import React from "react";

const Results = ({ correctResults, wrongResults, countCorrect }) => {
  return (
    <div className="results">
      <div className="title">
        <p> ANSWERS:</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          <p className='resultsHeader'>Correct:</p>
          {correctResults.map((correctWord, index) => (
            <div key={index} className="row">
              <p>{correctWord}</p>
            </div>
          ))}
        </div>
        <div className="wrongResults">
          <p className='resultsHeader'>Incorrect:</p>
          {wrongResults.map((wrongWord, index) => (
            <div key={index} className="row">
              <p>{wrongWord}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="title">
        <p> FINAL SCORE: {correctResults.length}</p>
      </div>
    </div>
  );
};

export default Results;
