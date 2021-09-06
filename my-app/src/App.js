import React, { useState, useEffect } from "react";
import Words from "./components/words";
import Container from "./components/container";
import Typeracer from "./components/typeracer";
import Results from "./components/results";
import './App.css';

const App = () => {

  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * word.length);
  return (
    <div className="App">
      <Container>
        <Typeracer
        newWord={newWord}
        inputValue={inputValue}
        setInputValue={setInputValue}
        disabled={disabled}
        time={time}
        animation={animation}
        />
        <Results
        correctResults={correctResults}
        wrongResults={wrongResults}
        countCorrect={countCorrect}
        />
      </Container>
    </div>
  );
}

export default App;
