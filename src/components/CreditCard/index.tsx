import React, { useEffect, useState } from "react";
import { UseFormWatch } from "react-hook-form";
import classNames from "classnames";
import creditCardType from "credit-card-type";

import "./styles.scss";

interface Props {
  watchFields: UseFormWatch<{
    number: string;
    name: string;
    validateDate: string;
  }>;
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
    const formattedCardNumber = cardNumber.replace(/[^A-Z0-9]/gi, "");

    const findCard =
      creditCardType(formattedCardNumber).length === 1 &&
      formattedCardNumber.length > 4
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
        <span>{number || INITIAL_STATE.number}</span>
        <div className="credit-card__data__name-and-date">
          <span>{name || INITIAL_STATE.name}</span>
          <span>{validateDate || INITIAL_STATE.validateDate}</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
