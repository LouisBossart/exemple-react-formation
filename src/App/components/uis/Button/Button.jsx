import React from "react";
import style from "./Button.module.css";

/*function Button(props) {
  return <button>Benjamin</button>;
}*/

const Button = (props) => {
  console.log(props);
  return (
    <button
      className={style.Button}
      onClick={(evt) => {
        //traitement de l'event prealable propre au composant
        console.log(evt);
        //declenchement de la fonction envoyée par les props depuis le parent
        if (undefined !== props.onbuttonclick) {
          props.onbuttonclick("on a tapper sur benjamin");
        }
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
