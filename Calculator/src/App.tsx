import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setResult(result.concat(e.currentTarget.name));
  };

  const clear = (): void => {
    setResult("");
  };

  const backspace = (): void => {
    setResult(result.slice(0, -1));
  };

  const calculate = (): void => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div>
      <div className="App">
        <div className="calculator">
          <input type="text" value={result} readOnly />
          <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">
              Clear
            </button>
            <button className="highlight" onClick={backspace} id="backspace">
              C
            </button>
            <button name="." onClick={handleClick}>
              .
            </button>
            <button name="/" onClick={handleClick}>
              &divide;
            </button>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="*" onClick={handleClick}>
              &times;
            </button>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="-" onClick={handleClick}>
              &ndash;
            </button>
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="+" onClick={handleClick}>
              +
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>

            <button className="highlight" onClick={calculate} id="result">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

