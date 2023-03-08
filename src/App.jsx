import React, { useState, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function App() {
  const { width, height } = useWindowSize();

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  const [rollNum, setRollNum] = useState(0);

  const [timer, setTimer] = useState(0);
  const [bestTime, setBestTime] = useState(bringSavedData() || false);

  // bring saved data for init state
  function bringSavedData() {
    return JSON.parse(localStorage.getItem("bestTime"));
  }

  // track time
  useEffect(() => {
    let runTimer;
    if (!tenzies) {
      runTimer = setTimeout(() => setTimer(prevTimer => prevTimer + 1), 1000);
    } else {
      clearTimeout(runTimer);

      setBestTime(prevTime => {
        if (!prevTime) {
          return timer;
        } else {
          return prevTime > timer ? timer : prevTime;
        }
      });
    }
  }, [timer]);

  // updating best time
  useEffect(() => {
    if (tenzies) {
      localStorage.setItem("bestTime", JSON.stringify(bestTime));
    }
  }, [tenzies, bestTime]);

  // Keeping 2+ states in sync (dice & tenzies)
  // for winning the game
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const allEqual = dice.every((die, _, dice) => die.value === dice[0].value);
    allHeld && allEqual && setTenzies(true);
  }, [dice]);

  // generating new die/dice
  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
    };
  }
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  // holding the dice when clicked
  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(prevDie => {
        return prevDie.id === id
          ? { ...prevDie, isHeld: !prevDie.isHeld }
          : prevDie;
      });
    });
  }

  // rendering 10 dice on screen
  const diceElements = dice.map(die => {
    return (
      <Die
        key={die.id}
        id={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });

  // when clicking the roll button + keep track of roll number
  function rollDice() {
    setDice(prevDice => {
      return prevDice.map(prevDie => {
        return prevDie.isHeld
          ? prevDie
          : { ...prevDie, value: Math.floor(Math.random() * 6 + 1) };
      });
    });

    // track roll number
    setRollNum(prevRollNum => prevRollNum + 1);
  }

  // Resetting game
  function newGame() {
    setTenzies(false);
    setRollNum(0);
    setTimer(0);
    setDice(allNewDice());
  }

  // timer appearance
  function formatTimer(time) {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  }

  return (
    <main className="App">
      {tenzies && (
        <Confetti
          width={width}
          height={height}
          style={{ position: "absolute", top: "0", left: "0" }}
        />
      )}
      <div className="text-container">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dice-container">{diceElements}</div>
      {!tenzies && (
        <button className="roll-btn" onClick={rollDice}>
          Roll
        </button>
      )}
      {tenzies && (
        <button className="new-game-btn" onClick={newGame}>
          New Game
        </button>
      )}
      <div className="record-game">
        <p>
          🎲 Rolled (<span style={{ color: "red" }}>{rollNum}</span> times)
        </p>
        <p>
          ⏰ Time spent (
          <span style={{ color: "red" }}>{formatTimer(timer)}</span>)
        </p>
      </div>
      <div className="best-record">
        <p>
          🏆 Shortest time spent (
          <span>{bestTime ? formatTimer(bestTime) : "NOT FOUND"}</span>)
        </p>
      </div>
    </main>
  );
}

export default App;
