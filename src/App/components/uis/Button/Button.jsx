import React from "react";

/*function Button(props) {
  return <button>Benjamin</button>;
}*/
const Button = (props) => {
  console.log(props);
  return (
    <button
      className="Button"
      onClick={(evt) => {
        console.log(evt);
        props.onbuttonclick("on a tapper sur benjamin");
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
