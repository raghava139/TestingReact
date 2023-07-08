import React, { useState } from "react";

const FormChecking = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log("inputValue", inputValue);
  const handleKeyDown = (event) => {
    console.log("keycode", event.keyCode);
    if (event.keyCode === 13) {
      event.preventDefault();
      handleClick();
    }
  };

  const handleClick = () => {
    alert("button Clicked");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Form Button Checking</h3>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default FormChecking;
