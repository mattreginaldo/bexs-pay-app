import React from "react";

import "./styles.scss";

interface Props {
  placeholder: string;
}

const InputText = ({ placeholder = "Input Text Placeholder" }: Props) => {
  return (
    <div className="input-text">
      <label>
        <input placeholder=" " />
        <span>{placeholder}</span>
      </label>
    </div>
  );
};

export default InputText;
