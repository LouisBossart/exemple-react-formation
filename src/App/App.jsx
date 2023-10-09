import React from "react";
import "./App.css";
import Button from "./components/uis/Button/Button";

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <hr />
      <Button text="Valider" onbuttonclick={(param)=>{console.log('action',param)}}/>
      <Button text="Annuler" />
      <Button text="Benjamin" />
      <Button
        x={[1, 2]}
        c={{ abc: 123 }}
        s="cc"
        n={1}
        b={true}
        g={undefined}
        f={() => {
          console.log("fn");
        }}
        nn={null}
      />
    </div>
  );
}

export default App;
