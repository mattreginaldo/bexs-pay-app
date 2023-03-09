import React from "react";
import {
  useController,
  FieldPath,
  FieldValues,
  Control,
} from "react-hook-form";
import MaskedInput from "react-input-mask";
import classNames from "classnames";

import "./styles.scss";

interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  control: Control<TFieldValues>;
  placeholder: string;
  mask?: string;
  maskChar?: string;
  maxLength?: number;
}

const InputText = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  mask,
  maskChar,
  maxLength,
  placeholder,
}: InputProps<TFieldValues, TName>) => {
  const { field, fieldState } = useController({ control, name });
  return (
    <div className={classNames("input-text", { error: !!fieldState.error })}>
      {mask ? (
        <MaskedInput
          {...field}
          id={name}
          mask={mask}
          maskChar={maskChar || null}
          placeholder=" "
          inputRef={field.ref}
        ></MaskedInput>
      ) : (
        <input
          {...field}
          id={name}
          ref={field.ref}
          maxLength={maxLength}
          placeholder=" "
        />
      )}
      <label>{placeholder}</label>
      <span className="input-text--error">
        {fieldState.error && fieldState.error.message}
      </span>
    </div>
  );
};

export default InputText;
