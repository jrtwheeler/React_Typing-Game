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
                <input type="text"/>
                <Button/>
            </div>
        </div>
    );
};

export default Typeracer;