import React from "react";

import { ReactComponent as Chevron } from "assets/icons/chevron.svg";
import { ReactComponent as NewCreditCardIcon } from "assets/icons/new-credit-card-vector.svg";

import Touchable from "components/Touchable";
import CreditCard from "components/CreditCard";
import Steps from "components/Steps";
import InputText from "components/Inputs/InputText";

import "./styles.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__left__content">
          <Touchable className="hidden lg:block">
            <div className="checkout__left__content__change-payment-label">
              <Chevron />
              <span>Alterar forma de pagamento</span>
            </div>
          </Touchable>

          <div className="flex lg:hidden checkout__left__content__upside">
            <Touchable className="checkout__left__content__upside__touchable">
              <Chevron />
            </Touchable>
            <span>Etapa 2 de 3</span>
          </div>

          <div className="checkout__left__content__credit-card">
            <div className="checkout__left__content__credit-card__new-credit-card-label">
              <NewCreditCardIcon />
              <span>Adicione um novo cartão de crédito</span>
            </div>

            <div className="checkout__left__content__credit-card__credit-card">
              <CreditCard />
            </div>
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <div className="checkout__right__content">
          <div className="hidden lg:block checkout__right__content__upside">
            <div className="checkout__right__content__upside__steps">
              <Steps />
            </div>
          </div>

          <div className="checkout__right__content__form">
            <div>
              <InputText />
            </div>
            <div>
              <InputText />
            </div>
            <div>
              <InputText />
              <InputText />
            </div>
            <div>
              <InputText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
