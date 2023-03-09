import API from "api/index";

import { ICreditCardPayment } from "interfaces/checkout";

interface IResponse {
  data: unknown;
  errors: unknown;
}

export function fetchPaymentCardCredit(params: ICreditCardPayment) {
  return API.post<IResponse>(`/pagar`, {
    ...params,
  });
}
