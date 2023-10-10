import React, { useState } from "react";
import "./App.css";
import Button from "./components/uis/Button/Button";

function App() {
  const [counter, setcounter] = useState(-1);
  //possibilite de plusieurs etats dans le meme cmp ---> 
  //const [userState, setUserState] = useState({name:"dd",value:0})
  return (
    <div className="App">
      Valeur counter : {counter}<br/>
      {/* Valeur counter de userState: {userState.value}<br/> */}
      <hr />
      <Button
        onbuttonclick={() => {
          setcounter(counter-1);
          //setUserState({...userState,value:userState.value-1})
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        text="Annuler"
        onbuttonclick={() => {
          setcounter(counter+1);
          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
}

export default App;
