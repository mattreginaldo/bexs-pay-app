import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

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
