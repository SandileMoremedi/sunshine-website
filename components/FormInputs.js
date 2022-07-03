import { useState } from "react";
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
        required
        onBlur={() => handleFocus()}
        focused={focused.toString()}
      />
      <span className="incorrect">{props.errorMessage}</span>
    </div>
  );
};
export default FormInputs;
