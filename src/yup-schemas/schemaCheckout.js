import {
  isValid as isValidCreditCard,
  isExpirationDateValid,
} from "creditcard.js";
import * as yup from "yup";

import { formatCreditNumber } from "utils";

yup.addMethod(yup.string, "isValidCreditCard", function (errorMessage) {
  return this.test(`test-card-valid`, errorMessage, function (value) {
    const { path, createError } = this;

    return (
      (isValidCreditCard(formatCreditNumber(value || "")) &&
        formatCreditNumber(value).length === 16) ||
      createError({ path, message: errorMessage })
    );
  });
});

yup.addMethod(yup.string, "isExpirationDateValid", function (errorMessage) {
  return this.test(`test-card-valid`, errorMessage, function (value) {
    const { path, createError } = this;

    const splitDate = value ? value.split("/") : "";

    return (
      isExpirationDateValid(splitDate[0], splitDate[1]) ||
      createError({ path, message: errorMessage })
    );
  });
});

const schemaCheckout = yup
  .object({
    name: yup
      .string()
      .min(2, "Insira seu nome completo")
      .required("Campo obrigatório"),
    cvv: yup.string().required("Campo obrigatório"),
    validateDate: yup
      .string()
      .isExpirationDateValid("Data inválida")
      .required("Campo obrigatório"),
    number: yup
      .string()
      .isValidCreditCard("Número de cartão inválido")
      .required("Campo obrigatório"),
    installments: yup.string().required("Insira o número de parcelas"),
  })
  .required();

export default schemaCheckout;
