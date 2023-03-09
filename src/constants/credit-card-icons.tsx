import React from "react";
import { ReactComponent as Default } from "assets/icons/credit-cards-icons/default.svg";
import { ReactComponent as Visa } from "assets/icons/credit-cards-icons/visa.svg";
import { ReactComponent as Diners } from "assets/icons/credit-cards-icons/diners.svg";
import { ReactComponent as Mastercard } from "assets/icons/credit-cards-icons/mastercard.svg";
import { ReactComponent as Amex } from "assets/icons/credit-cards-icons/amex.svg";
import { ReactComponent as Discover } from "assets/icons/credit-cards-icons/discover.svg";
import { ReactComponent as JCB } from "assets/icons/credit-cards-icons/jcb.svg";
import { ReactComponent as Maestro } from "assets/icons/credit-cards-icons/maestro.svg";
import { ReactComponent as Elo } from "assets/icons/credit-cards-icons/elo.svg";
import { ReactComponent as Hipercard } from "assets/icons/credit-cards-icons/hipercard.svg";

const CREDIT_CARD_ICONS = {
  default: <Default />,
  visa: <Visa />,
  mastercard: <Mastercard />,
  ["american-express"]: <Amex />,
  ["diners-club"]: <Diners />,
  discover: <Discover />,
  jcb: <JCB />,
  maestro: <Maestro />,
  elo: <Elo />,
  mir: <Default />,
  hipercard: <Hipercard />,
  hiper: <Hipercard />,
};

export default CREDIT_CARD_ICONS;
