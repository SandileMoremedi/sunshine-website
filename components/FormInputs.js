import { useContext, useState } from "react";
import { ProductsContext } from "./ProductsProvider";
const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="loginPage__form">
      <label htmlFor={props.id}>{props.name}</label>
      <input
        placeholder={props.placeholder}
        id={props.id}
        pattern={props.pattern}
        type={props.type}
        required
        aria-label={props.label}
        onBlur={() => handleFocus()}
        focused={focused.toString()}
        onChange={(e) => props.handleChange(props.type, e)}
      />
      <span className="incorrect" aria-hidden aria-label={props.errorMessage}>
        {props.errorMessage}
      </span>
    </div>
  );
};
export default FormInputs;
