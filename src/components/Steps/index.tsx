import React from "react";

import { ReactComponent as Chevron } from "assets/icons/chevron.svg";
import { ReactComponent as Check } from "assets/icons/check.svg";

import "./styles.scss";

interface StepsI {
  label: string;
  id: number;
  completed: boolean;
}

const Steps = () => {
  const steps: StepsI[] = [
    {
      label: "Carrinho",
      id: 1,
      completed: true,
    },
    {
      label: "Pagamento",
      id: 2,
      completed: false,
    },
    {
      label: "Confimação",
      id: 3,
      completed: false,
    },
  ];

  return (
    <div className="steps">
      {steps.map(({ id, label, completed }) => (
        <div key={id} className="steps__step">
          <div className="steps__step__content">
            {completed ? (
              <Check />
            ) : (
              <div className="steps__step__content__step-number">
                <strong>{id}</strong>
              </div>
            )}

            <span>{label}</span>
          </div>

          {steps.length !== id && (
            <div className="steps__step__chevron">
              <Chevron />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;
