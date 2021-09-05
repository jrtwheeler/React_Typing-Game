import React, { useState, useEffect } from "react";
import Words from "./components/words";
import './App.css';

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [currentResults, setCurrentResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
