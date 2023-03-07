import React, { useState } from "react";
import classNames from "classnames";
import { Controller, UseControllerProps } from "react-hook-form";

import { ReactComponent as Chevron } from "assets/icons/chevron.svg";

import "./styles.scss";

interface DataI {
  label: string;
  value: string;
  name: string;
}

interface Props extends UseControllerProps {
  placeholder: string;
  name: string;
  data: DataI[];
}

const ListBox = ({
  placeholder = "Select Placeholder",
  name,
  data,
  control,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWithOpenAndClose = (selectState: boolean) =>
    setIsOpen(selectState);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div className="select-box">
          <select
            {...field}
            placeholder=""
            onClick={() => handleWithOpenAndClose(!isOpen)}
            onBlur={() => handleWithOpenAndClose(false)}
          >
            <option></option>
            {data &&
              data.map((item) => (
                <option key={item.name} value={item.value}>
                  {item.label}
                </option>
              ))}
          </select>
          <span className={classNames({ "has-value": !!field.value })}>
            {placeholder}
          </span>
          <div
            className={classNames("select-box__chevron", { "is-open": isOpen })}
          >
            <Chevron />
          </div>
        </div>
      )}
    />
  );
};

export default ListBox;
