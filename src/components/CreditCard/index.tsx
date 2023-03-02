import React from "react";

import "./styles.scss";

interface Props {
  className: string;
}

const CreditCard = ({ className, ...rest }: Props) => {
  return (
    <div className="credit-card" {...rest}>
      <div className="credit-card__data">
        <span>**** **** **** ****</span>
        <div className="credit-card__data__name-and-date">
          <span>NOME DO TITULAR</span>
          <span>00/00</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
