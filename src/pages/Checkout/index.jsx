import React from "react";
import { useForm } from "react-hook-form";

import { ReactComponent as Chevron } from "assets/icons/chevron.svg";
import { ReactComponent as NewCreditCardIcon } from "assets/icons/new-credit-card-vector.svg";

import Touchable from "components/Touchable";
import CreditCard from "components/CreditCard";
import Steps from "components/Steps";
import InputText from "components/Inputs/InputText";
import ListBox from "components/Inputs/ListBox";

import { formatToMoney } from "utils";

import "./styles.scss";

const totalCartValue = 10000;

const Checkout = () => {
  const { control, register, handleSubmit, watch } = useForm({
    defaultValues: {
      number: "",
      name: "",
      validateDate: "",
      cvv: "",
      installments: undefined,
    },
  });

  const installments = () =>
    Array.from(Array(12).keys()).map((installment) => {
      const updateInstallment = installment + 1;
      const totalValueByInstallment = formatToMoney(
        totalCartValue / updateInstallment
      );

      return {
        label: `${updateInstallment}x ${totalValueByInstallment} sem juros`,
        value: updateInstallment,
        name: `installment-${updateInstallment}`,
      };
    });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="checkout" data-testid="checkout">
      <div className="checkout__left">
        <div className="checkout__left__content">
          <Touchable className="hidden lg:block" data-testid="change-payment">
            <div className="checkout__left__content__change-payment-label">
              <Chevron />
              <span>Alterar forma de pagamento</span>
            </div>
          </Touchable>

          <div
            className="flex lg:hidden checkout__left__content__upside"
            data-testid="steps-mobile"
          >
            <Touchable className="checkout__left__content__upside__touchable">
              <Chevron />
            </Touchable>
            <span>Etapa 2 de 3</span>
          </div>

          <div
            className="checkout__left__content__credit-card"
            data-testid="new-card-label"
          >
            <div className="checkout__left__content__credit-card__new-credit-card-label">
              <NewCreditCardIcon />
              <span>Adicione um novo cartão de crédito</span>
            </div>

            <div className="checkout__left__content__credit-card__credit-card">
              <CreditCard watchFields={watch} />
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
            <form onSubmit={handleSubmit(onSubmit)} data-testid="checkout-form">
              <div className="flex flex-col gap-11">
                <InputText
                  placeholder="Número do cartão"
                  control={control}
                  mask="9999 9999 9999 9999"
                  maskChar="*"
                  {...register("number")}
                  ref={null}
                />
                <InputText
                  placeholder="Nome (igual ao cartão)"
                  control={control}
                  maxLength={24}
                  {...register("name", { maxLength: 24 })}
                  ref={null}
                />
                <div className="flex gap-6">
                  <InputText
                    placeholder="Validade"
                    control={control}
                    mask="99/99"
                    {...register("validateDate")}
                    ref={null}
                  />
                  <InputText
                    placeholder="CVV"
                    control={control}
                    mask="999"
                    {...register("cvv", { maxLength: 3 })}
                    ref={null}
                  />
                </div>

                <div className="mt-6">
                  <ListBox
                    placeholder="Número de parcelas"
                    control={control}
                    {...register("installments")}
                    data={installments()}
                    ref={null}
                  />
                </div>
              </div>

              <button>ENVIAR</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
