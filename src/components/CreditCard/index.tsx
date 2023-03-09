import React, { useEffect, useState } from "react";
import classNames from "classnames";
import creditCardType from "credit-card-type";

/** Constants */
import CREDIT_CARD_ICONS from "constants/credit-card-icons";

/** Utils */
import { formatCreditNumber } from "utils";

import "./styles.scss";

interface Props {
  watchFields: any;
}

const INITIAL_STATE = {
  number: "**** **** **** ****",
  name: "NOME DO TITULAR",
  validateDate: "00/00",
};

const CreditCard = ({ watchFields, ...rest }: Props) => {
  const watchAllFields = watchFields();

  const { number, name, validateDate } = watchAllFields;

  const [cardType, setCardType] = useState("default");

  const handleWithCardType = (cardNumber: string) => {
    const formattedCardNumber = formatCreditNumber(cardNumber);

    const findCard =
      creditCardType(formattedCardNumber).length === 1 &&
      formattedCardNumber.length >= 4
        ? creditCardType(formattedCardNumber)[0].type
        : "default";

    setCardType(findCard);
  };

  useEffect(() => {
    handleWithCardType(number);
  }, [number]);

  return (
    <div {...rest} className={classNames("credit-card", cardType)}>
      <div className="credit-card__data">
        {CREDIT_CARD_ICONS[cardType as keyof typeof CREDIT_CARD_ICONS]}

        <div className="credit-card__data__bottom">
          <span>{number || INITIAL_STATE.number}</span>
          <div className="credit-card__data__bottom__name-and-date">
            <span>{name || INITIAL_STATE.name}</span>
            <span>{validateDate || INITIAL_STATE.validateDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
