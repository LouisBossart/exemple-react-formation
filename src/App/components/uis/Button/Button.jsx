import React from "react";

/*function Button(props) {
  return <button>Benjamin</button>;
}*/
const Button = (props) => {
    console.log(props);
    return <button className="Button">{props.text}</button>
}

export default Button;