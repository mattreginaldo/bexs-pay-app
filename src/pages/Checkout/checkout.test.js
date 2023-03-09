import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";

import Checkout from ".";

describe("Checkout component loads correctly and show elements and labels", () => {
  test("Should contain the test id 'checkout'", () => {
    render(<Checkout />);

    const checkoutContainer = screen.queryByTestId("checkout");

    expect(checkoutContainer);
  });

  test("Should display the option choose payment method and click", () => {
    render(<Checkout />);

    const changePayment = screen.queryByTestId("change-payment");

    expect(changePayment.innerHTML).toContain("Alterar forma de pagamento");

    fireEvent.click(changePayment);
  });

  test("Should show the mobile steps", () => {
    render(<Checkout />);

    const stepsMobile = screen.queryByTestId("steps-mobile");

    expect(stepsMobile.innerHTML).toContain("Etapa 2 de 3");
  });

  test("Should show the new card label", () => {
    render(<Checkout />);

    const newCardLabel = screen.queryByTestId("new-card-label");

    expect(newCardLabel.innerHTML).toContain(
      "Adicione um novo cartão de crédito"
    );
  });
});

describe("Testing checkout form", () => {
  test("Should fill in the fields correctly and the request should be rejected.", async () => {
    const { container } = render(<Checkout />);

    const inputNumber = container.querySelector(`input[name="number"]`);
    const inputName = container.querySelector(`input[name="name"]`);
    const inputValidateDate = container.querySelector(
      `input[name="validateDate"]`
    );
    const inputCVV = container.querySelector(`input[name="cvv"]`);
    const inputInstallments = container.querySelector(
      `select[name="installments"]`
    );

    await user.type(inputNumber, "5575 8169 2593 3858");
    await user.type(inputValidateDate, "04/24");
    await user.type(inputName, "MATEUS REGINALDO");
    await user.type(inputCVV, "667");
    await user.selectOptions(inputInstallments, "12");

    expect(inputNumber.value).toBe("5575 8169 2593 3858");
    expect(inputName.value).toBe("MATEUS REGINALDO");
    expect(inputValidateDate.value).toBe("04/24");
    expect(inputCVV.value).toBe("667");
    expect(inputInstallments.value).toBe("12");

    const checkoutForm = screen.queryByTestId("checkout-form-button");

    user.click(checkoutForm);

    var apiFunc = jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.reject({ data: {}, errors: [] }),
      });
    });

    expect(apiFunc).toHaveBeenCalled;
  });
});
