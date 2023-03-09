const formatToMoney = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const formatCreditNumber = (value: string) => value.replace(/[^A-Z0-9]/gi, "");

const installmentsGenerator = (numberOfInstallments = 12, totalValue: number) =>
  Array.from(Array(numberOfInstallments).keys()).map((installment) => {
    const updateInstallment = installment + 1;
    const totalValueByInstallment = formatToMoney(
      totalValue / updateInstallment
    );

    return {
      label: `${updateInstallment}x ${totalValueByInstallment} sem juros`,
      value: updateInstallment,
      name: `installment-${updateInstallment}`,
    };
  });

export { formatToMoney, formatCreditNumber, installmentsGenerator };
