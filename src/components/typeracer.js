import React from "react";
import Button from "./button";

const Typeracer = (props) => {
  const {
    newWord,
    inputValue,
    setInputValue,
    disabled,
    time,
    animation,
    handleInput,
    handleStart,
  } = props;

  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>
      <div
        style={{ animation: animation !== null ? animation : "" }}
        className="time"
      >
        <p style={{animation: animation !== null ? animation : ""}}>{time}</p>
      </div>
      <div className="wordValues">
        <input
          type="text"
          disabled={disabled && disabled}
          onKeyPress={handleInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start typing"}
        />
        <Button handleStart={handleStart} disabled={disabled} />
      </div>
    </div>
  );
};

export default Typeracer;
