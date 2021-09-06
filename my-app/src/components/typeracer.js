import React from "react";
import Button from "./button";

const Typeracer = (props) => {

    const { newWord, inputValue, setInputValue, disabled, time, animation } = props;

    newWord={newWord}
        inputValue={inputValue}
        setInputValue={setInputValue}
        disabled={disabled}
        time={time}
        animation={animation}

    return (
        <div className='typeracer'>
            <div className="wordOutput">
                <p>{newWord}</p>
            </div>
            <div style={{animation: animation !== null ? animation : ""}} className="time">
                <p>{time</p>
            </div>
            <div className="wordValues">
                <input 
                type="text"
                disabled={disabled && disabled}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={disabled ? "" : "Start typing"}
                />
                <Button/>
            </div>
        </div>
    );
};

export default Typeracer;