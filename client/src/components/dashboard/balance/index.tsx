import React from "react";

interface IBalance {
  balance: number;
}

function Balance(props: IBalance) {
  let formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  const { balance } = props;

  return (
    <div className="bg-black-900 p-4 rounded-tl-2xl rounded-tr-2xl">
      <span className="text-white text-lg font-black">Saldo atual: </span>
      <span className="text-black-400 text-lg font-black">
        {formatCurrency.format(balance)}
      </span>
    </div>
  );
}

export { Balance };
