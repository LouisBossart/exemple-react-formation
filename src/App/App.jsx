import React from "react";
import "./App.css";
import Button from "./components/uis/Button/Button";

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <hr />
      <Button
        onbuttonclick={(param) => {
          console.log("action", param);
        }}
        children="ertyui"
        type="submit"
      />
      <Button text="Annuler" type="bout">
        <img src="https://cdn3.iconfinder.com/data/icons/miscellaneous-80/60/check-256.png" alt="icone" />
        Coucou
      </Button>
      {/* <Button text="Benjamin" /> */}
      <Button ><div>coucou</div></Button>
    </div>
  );
}

export default App;
