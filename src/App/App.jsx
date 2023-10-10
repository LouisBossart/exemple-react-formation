import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/uis/Button/Button";

function App(props) {
  const [counter, setcounter] = useState(-1);
  //Mounté uniquement
  useEffect(() => {
    //corps du cycle de vie
    console.log("montage du composant")
    setcounter(0);
    //fonction de demontage de composant
    // return () => {
    //   //effect
    //   //
    // };
  },[])
  //mounter et mis a jour
  useEffect(()=>{
    console.log('didUpdate sur effect',counter);
  },[counter])
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
