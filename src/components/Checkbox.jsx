import React from "react";
import { useState } from "react";
import Button from "./Button";

const Checkbox = ({ setPassword, isPasswordLength }) => {
  let [lowerCaseChecked, setLowerCaseChecked] = useState(false);
  let [upperCaseChecked, setUpperCaseChecked] = useState(false);
  let [numbersChecked, setNumbersChecked] = useState(false);
  let [symbolsChecked, setSymbolsChecked] = useState(false);

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "01234567890";
  const symbols = "!@#$%^&*()_+={}";

  let passwordResult = "";

  function passwordGenerator() {
    let currentResult = "";

    if (upperCaseChecked) {
      passwordResult += upperCase;
    }
    if (lowerCaseChecked) {
      passwordResult += lowerCase;
    }
    if (numbersChecked) {
      passwordResult += numbers;
    }
    if (symbolsChecked) {
      passwordResult += symbols;
    }
    for (let i = 0; i < isPasswordLength; i++) {
      const randomNumber = Math.floor(Math.random() * passwordResult.length);
      currentResult += passwordResult.substring(randomNumber, randomNumber + 1);
      setPassword(currentResult);
    }
  }

  return (
    <div className="check">
      <div>
        <label>
          <input
            type="checkbox"
            className="lowerCase"
            checked={lowerCaseChecked}
            onChange={() => setLowerCaseChecked(!lowerCaseChecked)}
          />
          Использовать маленькие буквы
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="upperCase"
            checked={upperCaseChecked}
            onChange={() => setUpperCaseChecked(!upperCaseChecked)}
          />
          Использовать заглавные буквы
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="numbers"
            checked={numbersChecked}
            onChange={() => setNumbersChecked(!numbersChecked)}
          />
          Использовать цифры
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            className="symbols"
            checked={symbolsChecked}
            onChange={() => setSymbolsChecked(!symbolsChecked)}
          />
          Использовать символы
        </label>
      </div>
      <Button onClick={passwordGenerator} />
    </div>
  );
};

export default Checkbox;
