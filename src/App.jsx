import Display from "./components/Display";
import css from "./App.module.css";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [calVal, setcalVal] = useState("");


  const onCLickButton = (event) => {
    if (event.target.innerText === "C") {
      setcalVal("");
    } else if (event.target.innerText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      let newVal = calVal + event.target.innerText;
      setcalVal(newVal);
    }
  };

  return (
    <>
      <center>
        <div className={css.container}>
          <Display displayVal={calVal}></Display>
          <Button buttonClick={onCLickButton}></Button>
        </div>
      </center>
    </>
  );
}

export default App;
