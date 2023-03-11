import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

/** Interfaces */
import { ICreditCardPayment } from "interfaces/checkout";

/** Icons and Images */
import { ReactComponent as Chevron } from "assets/icons/chevron.svg";
import { ReactComponent as NewCreditCardIcon } from "assets/icons/new-credit-card-vector.svg";
import { ReactComponent as Spinner } from "assets/icons/spinner.svg";

/** Components */
import Touchable from "components/Touchable";
import CreditCard from "components/CreditCard";
import Steps from "components/Steps";
import InputText from "components/Inputs/InputText";
import ListBox from "components/Inputs/ListBox";

/** Utils */
import { installmentsGenerator } from "utils";

/** Services */
import { fetchPaymentCardCredit } from "services/checkout";

/** Schemes Yup */
import schemaCheckout from "yup-schemas/schemaCheckout";

import "./styles.scss";

interface Props {
  totalValue: number;
}

const Checkout = ({ totalValue }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<ICreditCardPayment>({
    mode: "onChange",
    resolver: yupResolver(schemaCheckout),
    defaultValues: {
      number: "",
      name: "",
      validateDate: "",
      cvv: "",
      installments: undefined,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const showToast = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const onSubmit = (data: ICreditCardPayment) => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        await fetchPaymentCardCredit(data);
        reset();
      } catch (error) {
        console.error(error);
        showToast("Houve um erro na requisição!");
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

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

            <CreditCard watchFields={watch} />
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

          <form
            className="checkout__right__content__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputText
              name="number"
              placeholder="Número do cartão"
              control={control}
              mask="9999 9999 9999 9999"
              maskChar="*"
            />
            <InputText
              name="name"
              placeholder="Nome (igual ao cartão)"
              control={control}
              maxLength={24}
            />
            <div className="flex gap-6">
              <InputText
                name="validateDate"
                placeholder="Validade"
                control={control}
                mask="99/99"
              />
              <InputText
                name="cvv"
                placeholder="CVV"
                control={control}
                mask="999"
              />
            </div>

            <div className="mt-10">
              <ListBox
                placeholder="Número de parcelas"
                control={control}
                {...register("installments")}
                error={errors.installments}
                data={installmentsGenerator(12, totalValue)}
                ref={null}
              />
            </div>

            <div className="checkout__right__content__form__button">
              <Touchable
                data-testid="checkout-form-button"
                disabled={!isValid || isLoading}
              >
                {isLoading ? <Spinner /> : "Continuar"}
              </Touchable>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Checkout;
