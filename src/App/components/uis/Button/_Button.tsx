import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

/*function Button(props) {
  return <button>Benjamin</button>;
}*/
interface IButtonProps{
  onbuttonclick?:Function,
  children:any,
  type?:'button'|'submit'|'reset'|undefined
}
const Button:React.FC<IButtonProps> = (props) => {
  console.log(props);
  return (
    <button
      type={props.type}
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
Button.propTypes = {
  onbuttonclick: PropTypes.func,
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};
Button.defaultProps = {
  type: "button",
};
export default Button;
