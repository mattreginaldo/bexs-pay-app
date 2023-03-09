import React from "react";
import ReactDOM from "react-dom/client";

import Checkout from "pages/Checkout";

import "styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Checkout totalValue={10000} />);
