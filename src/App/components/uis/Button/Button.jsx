import React from "react";
import './Button.css'

/*function Button(props) {
  return <button>Benjamin</button>;
}*/

const Button = (props) => {
  console.log(props);
  return (
    <button
      className="Button"
      onClick={(evt) => {
        //traitement de l'event prealable propre au composant
        console.log(evt);
        //declenchement de la fonction envoyée par les props depuis le parent
        props.onbuttonclick("on a tapper sur benjamin");
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
