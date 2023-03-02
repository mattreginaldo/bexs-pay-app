import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const Touchable = ({ children, ...rest }: Props) => {
  const [touched, touchedSet] = useState(false);

  return (
    <button
      style={{ opacity: touched ? 0.5 : 1, transition: "opacity 300ms ease" }}
      onMouseDown={() => touchedSet(true)}
      onMouseUp={() => touchedSet(false)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Touchable;
