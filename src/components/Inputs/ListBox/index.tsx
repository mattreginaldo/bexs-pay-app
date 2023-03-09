import React, { useState } from "react";
import classNames from "classnames";
import { useController } from "react-hook-form";

import { ReactComponent as Chevron } from "assets/icons/chevron.svg";

import "./styles.scss";

interface DataI {
  label: string;
  value: number;
  name: string;
}

const ListBox = (props: any) => {
  const { field, fieldState } = useController(props);

  const [isOpen, setIsOpen] = useState(false);

  const handleWithOpenAndClose = (selectState: boolean) =>
    setIsOpen(selectState);

  return (
    <div className={classNames("select-box", { error: !!fieldState.error })}>
      <select
        {...field}
        placeholder=""
        onClick={() => handleWithOpenAndClose(!isOpen)}
        onBlur={() => handleWithOpenAndClose(false)}
      >
        <option></option>
        {props.data &&
          props.data.map((item: DataI) => (
            <option key={item.name} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
      <label className={classNames({ "has-value": !!field.value })}>
        {props.placeholder}
      </label>
      <div className={classNames("select-box__chevron", { "is-open": isOpen })}>
        <Chevron />
      </div>

      <span className="select-box--error">
        {fieldState.error &&
          fieldState.error.message &&
          fieldState.error.message}
      </span>
    </div>
  );
};

export default ListBox;
