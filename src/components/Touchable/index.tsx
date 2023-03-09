import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Touchable = ({ children, ...rest }: Props) => {
  const [touched, touchedSet] = useState(false);

  return (
    <button
      {...rest}
      style={{ opacity: touched ? 0.5 : 1, transition: "opacity 300ms ease" }}
      onMouseDown={() => touchedSet(true)}
      onMouseUp={() => touchedSet(false)}
    >
      {children}
    </button>
  );
};

export default Touchable;
