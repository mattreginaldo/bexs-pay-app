import React from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import MaskedInput from "react-input-mask";

import "./styles.scss";

interface Props extends UseControllerProps {
  placeholder: string;
  mask: string;
  maskChar: string;
  maxLength: number;
}

const InputText = ({
  placeholder = "Input Text Placeholder",
  name,
  mask,
  maskChar,
  control,
  maxLength,
}: Props) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field }) => (
      <div className="input-text">
        {mask ? (
          <MaskedInput
            {...field}
            mask={mask}
            maskChar={maskChar || null}
            placeholder=" "
            inputRef={field.ref}
          ></MaskedInput>
        ) : (
          <input {...field} maxLength={maxLength} placeholder=" " />
        )}

        <label>{placeholder}</label>
      </div>
    )}
  />
);

export default InputText;
