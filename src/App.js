import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import Field from "./components/Field";
import Length from "./components/Length";

function App() {
  let [password, setPassword] = useState("");
  let [isPasswordLength, setIsPasswordLength] = useState(5);
  const [copyText, setCopyText] = useState(false);

  function passwordLength(event) {
    setIsPasswordLength(event.target.value);
  }

  function passwordCopy() {
    navigator.clipboard.writeText(password);
    setCopyText(true);
    setTimeout(() => {
      setCopyText(false);
    }, 1500);
  }

  return (
    <div className="App">
      <h1 className="header">Генератор паролей</h1>
      <Field
        password={password}
        passwordCopy={passwordCopy}
        copyText={copyText}
      />
      <Length
        passwordLength={passwordLength}
        isPasswordLength={isPasswordLength}
      />
      <Checkbox setPassword={setPassword} isPasswordLength={isPasswordLength} />
    </div>
  );
}

export default App;
